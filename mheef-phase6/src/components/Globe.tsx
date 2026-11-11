import '../cesiumBase';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Cartesian2,
  Cartesian3,
  Color,
  DistanceDisplayCondition,
  Entity,
  GeographicTilingScheme,
  HeightReference,
  ImageryLayer,
  Ion,
  IonImageryProvider,
  LabelStyle,
  Math as CesiumMath,
  NearFarScalar,
  PerspectiveFrustum,
  Rectangle,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Terrain,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  VerticalOrigin,
  Viewer,
  buildModuleUrl,
  defined,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { useGlobeStore } from '../store/useGlobeStore';
import type { Facility, FacilityStub } from '../types/facility';
import { facilities } from '../data/facilities';
import { facilityMatchesFilters } from '../utils/filters';

// Phase 8 — the globe is now CesiumJS rather than a hand-built three.js
// sphere. Cesium streams map tiles and loads more detail as the camera
// approaches, so a visitor can go from the whole Earth down to a single
// laboratory site instead of zooming into one fixed, blurry texture.
//
// Imagery is layered, bottom to top:
//   1. Natural Earth II — a small texture bundled with Cesium. Always
//      present, so there is an Earth even offline or if NASA is unreachable.
//   2. NASA Blue Marble (via the GIBS tile service) — public domain, no
//      account or key. The default look, sharp to about 500 m per pixel.
//   3. Cesium ion aerial imagery plus 3D terrain — only when a token is
//      configured, and only shown once the camera is close enough to
//      need it, which also keeps ion usage down.

const ION_TOKEN = import.meta.env.VITE_CESIUM_ION_TOKEN?.trim() ?? '';
const HAS_ION = ION_TOKEN.length > 0;

// ─── Imagery ──────────────────────────────────────────────────────────────────

const BLUE_MARBLE_URL =
  'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default/500m/{z}/{y}/{x}.jpeg';
const BLUE_MARBLE_MAX_LEVEL = 7;

/**
 * GIBS geographic tiles are not the usual 180°-wide squares: each level-0
 * tile is 288° across, in a 2×1 grid anchored at (-180°, 90°), so the grid
 * overhangs the globe to the east and south. Describing that whole
 * 576°×288° grid as the tiling scheme's rectangle makes every level a
 * plain quadtree again; the provider's own rectangle (the real world
 * extent) then stops Cesium requesting the overhanging tiles.
 */
function createBlueMarbleProvider(): UrlTemplateImageryProvider {
  return new UrlTemplateImageryProvider({
    url: BLUE_MARBLE_URL,
    tilingScheme: new GeographicTilingScheme({
      rectangle: Rectangle.fromDegrees(-180, 90 - 288, -180 + 576, 90),
      numberOfLevelZeroTilesX: 2,
      numberOfLevelZeroTilesY: 1,
    }),
    rectangle: Rectangle.MAX_VALUE,
    tileWidth: 512,
    tileHeight: 512,
    maximumLevel: BLUE_MARBLE_MAX_LEVEL,
    credit: 'Imagery: NASA Blue Marble (GIBS)',
  });
}

// Camera heights (metres) between which ion imagery fades in over Blue Marble.
const ION_FADE_START = 2_500_000;
const ION_FADE_END = 900_000;

// ─── Camera ───────────────────────────────────────────────────────────────────

const EARTH_RADIUS_M = 6_378_137;
// Start over Europe and Africa, where the facility density is highest.
const INITIAL_LONGITUDE = 15;
const INITIAL_LATITUDE = 25;
// How close a selected facility is viewed: site scale with ion imagery,
// regional scale when only 500 m Blue Marble is available.
const FACILITY_VIEW_HEIGHT = HAS_ION ? 12_000 : 1_100_000;
const MIN_ZOOM_DISTANCE = HAS_ION ? 400 : 150_000;
// Idle rotation: resumes after a pause, only from far out, never while a
// facility is open.
const AUTO_ROTATE_DEG_PER_SEC = 2;
const AUTO_ROTATE_RESUME_MS = 6000;
const AUTO_ROTATE_MIN_HEIGHT = 6_000_000;

/**
 * Camera height at which the whole globe (plus a margin for the atmosphere)
 * fits the canvas. Cesium applies its field of view to the canvas's longer
 * side, so the shorter side is the constraint — this is what keeps the
 * globe on screen on a portrait phone.
 */
function overviewHeightFor(viewer: Viewer): number {
  const { clientWidth: width, clientHeight: height } = viewer.canvas;
  const frustum = viewer.camera.frustum;
  const fov =
    frustum instanceof PerspectiveFrustum && defined(frustum.fov)
      ? frustum.fov
      : CesiumMath.toRadians(60);
  const shortOverLong = Math.min(width, height) / Math.max(width, height, 1);
  const halfShort = Math.atan(Math.tan(fov / 2) * (shortOverLong || 1));
  return (EARTH_RADIUS_M * 1.12) / Math.sin(halfShort) - EARTH_RADIUS_M;
}

// ─── Markers ──────────────────────────────────────────────────────────────────

type MarkerHighlightState = 'normal' | 'match' | 'dim';

const MARKER_COLOR = Color.fromCssColorString('#22d3ee');
const MARKER_DIM_COLOR = Color.fromCssColorString('#3d6670').withAlpha(0.35);
const MARKER_OUTLINE = Color.WHITE.withAlpha(0.75);
const HALO_COLOR = MARKER_COLOR.withAlpha(0.28);
const HALO_MATCH_COLOR = MARKER_COLOR.withAlpha(0.45);
// Names appear on their own once the camera is this close (metres);
// further out they show on hover only, so the overview stays uncluttered.
const LABEL_VISIBLE_WITHIN = new DistanceDisplayCondition(0, 3_000_000);
// Keep markers visible over 3D terrain when viewed from nearby.
const MARKER_DEPTH_TEST_DISTANCE = 1_500_000;

interface MarkerEntities {
  core: Entity;
  halo: Entity;
}

function createMarker(viewer: Viewer, facility: FacilityStub): MarkerEntities {
  const position = Cartesian3.fromDegrees(facility.lng, facility.lat);

  const halo = viewer.entities.add({
    position,
    point: {
      pixelSize: 24,
      color: HALO_COLOR,
      heightReference: HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
    },
  });

  const core = viewer.entities.add({
    position,
    point: {
      pixelSize: 9,
      color: MARKER_COLOR,
      outlineColor: MARKER_OUTLINE,
      outlineWidth: 1.5,
      heightReference: HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
    },
    label: {
      text: facility.name,
      font: '600 13px "Inter Variable", Inter, sans-serif',
      fillColor: Color.WHITE,
      style: LabelStyle.FILL,
      showBackground: true,
      backgroundColor: Color.BLACK.withAlpha(0.72),
      backgroundPadding: new Cartesian2(8, 5),
      verticalOrigin: VerticalOrigin.BOTTOM,
      pixelOffset: new Cartesian2(0, -14),
      heightReference: HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
      distanceDisplayCondition: LABEL_VISIBLE_WITHIN,
      scaleByDistance: new NearFarScalar(2_000, 1.1, 3_000_000, 0.85),
    },
  });

  return { core, halo };
}

// ─── Globe ────────────────────────────────────────────────────────────────────

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const markersRef = useRef(new Map<string, MarkerEntities>());
  const isFlyingRef = useRef(false);
  const [failed, setFailed] = useState(false);

  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  const activeFilters = useGlobeStore((s) => s.activeFilters);

  // The viewer's event handlers are registered once, so they read the
  // current selection through a ref rather than a stale closure.
  const selectedIdRef = useRef(selectedFacilityId);
  selectedIdRef.current = selectedFacilityId;

  // null → no filters active, every marker renders as 'normal'.
  // Set  → filters active; markers in the set are 'match', others 'dim'.
  const matchingIds = useMemo<Set<string> | null>(() => {
    if (activeFilters.topics.length === 0 && activeFilters.statuses.length === 0) {
      return null;
    }
    const set = new Set<string>();
    for (const facility of facilities) {
      if (facilityMatchesFilters(facility, activeFilters)) set.add(facility.id);
    }
    return set;
  }, [activeFilters]);

  const handleSelect = useCallback(
    (facility: FacilityStub) => setSelectedFacilityId(facility.id),
    [setSelectedFacilityId]
  );

  // ── Create the viewer once ──
  useEffect(() => {
    const container = containerRef.current;
    const credits = creditsRef.current;
    if (!container || !credits) return;

    let viewer: Viewer;
    try {
      if (HAS_ION) Ion.defaultAccessToken = ION_TOKEN;

      viewer = new Viewer(container, {
        baseLayer: ImageryLayer.fromProviderAsync(
          TileMapServiceImageryProvider.fromUrl(buildModuleUrl('Assets/Textures/NaturalEarthII'))
        ),
        terrain: HAS_ION ? Terrain.fromWorldTerrain() : undefined,
        creditContainer: credits,
        animation: false,
        timeline: false,
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        fullscreenButton: false,
        infoBox: false,
        selectionIndicator: false,
      });
    } catch (error) {
      // Most often: WebGL is unavailable or blocked on this device.
      console.error('Globe failed to start:', error);
      setFailed(true);
      return;
    }
    viewerRef.current = viewer;
    // Dev only: lets the viewer be inspected from the browser console.
    if (import.meta.env.DEV) (window as unknown as { __mheefViewer?: Viewer }).__mheefViewer = viewer;

    const { scene, camera } = viewer;
    // An atlas, not a simulation: the whole Earth stays evenly lit.
    scene.globe.enableLighting = false;
    scene.globe.baseColor = Color.fromCssColorString('#0b1a2e');
    if (scene.sun) scene.sun.show = false;
    if (scene.moon) scene.moon.show = false;
    scene.screenSpaceCameraController.minimumZoomDistance = MIN_ZOOM_DISTANCE;

    viewer.imageryLayers.addImageryProvider(createBlueMarbleProvider());

    let ionLayer: ImageryLayer | null = null;
    if (HAS_ION) {
      // Asset 2 is ion's global aerial imagery.
      IonImageryProvider.fromAssetId(2)
        .then((provider) => {
          if (viewer.isDestroyed()) return;
          ionLayer = viewer.imageryLayers.addImageryProvider(provider);
          ionLayer.show = false;
        })
        .catch((error) => {
          console.warn('Cesium ion imagery unavailable; staying on NASA Blue Marble.', error);
        });
    }

    const markers = markersRef.current;
    const facilityByEntity = new Map<Entity, Facility>();
    for (const facility of facilities) {
      const marker = createMarker(viewer, facility);
      markers.set(facility.id, marker);
      facilityByEntity.set(marker.core, facility);
      facilityByEntity.set(marker.halo, facility);
    }
    const facilityAt = (windowPosition: Cartesian2): Facility | undefined => {
      const picked = scene.pick(windowPosition);
      return picked && picked.id instanceof Entity ? facilityByEntity.get(picked.id) : undefined;
    };

    // ── Framing ──
    const applyOverviewLimits = () => {
      scene.screenSpaceCameraController.maximumZoomDistance = overviewHeightFor(viewer) * 1.6;
    };
    applyOverviewLimits();
    camera.setView({
      destination: Cartesian3.fromDegrees(
        INITIAL_LONGITUDE,
        INITIAL_LATITUDE,
        overviewHeightFor(viewer)
      ),
    });

    const resizeObserver = new ResizeObserver(() => {
      if (viewer.isDestroyed()) return;
      applyOverviewLimits();
      // Re-frame the overview when the window changes shape (e.g. a phone
      // rotating), but leave a zoomed-in or selected view alone.
      const { longitude, latitude, height } = camera.positionCartographic;
      if (!selectedIdRef.current && !isFlyingRef.current && height > AUTO_ROTATE_MIN_HEIGHT) {
        camera.setView({
          destination: Cartesian3.fromRadians(longitude, latitude, overviewHeightFor(viewer)),
        });
      }
    });
    resizeObserver.observe(container);

    // ── Pointer interaction ──
    let lastInteraction = 0;
    let pointerDown = false;
    const markInteraction = () => {
      lastInteraction = performance.now();
    };
    const onPointerDown = () => {
      pointerDown = true;
      markInteraction();
    };
    const onPointerUp = () => {
      pointerDown = false;
      markInteraction();
    };
    viewer.canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    viewer.canvas.addEventListener('wheel', markInteraction, { passive: true });

    const handler = new ScreenSpaceEventHandler(viewer.canvas);
    // Double-click would otherwise lock the camera onto the clicked entity.
    viewer.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    handler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => {
      const facility = facilityAt(event.position);
      if (facility) handleSelect(facility);
    }, ScreenSpaceEventType.LEFT_CLICK);

    let hovered: Facility | undefined;
    const setLabelPinned = (facility: Facility, pinned: boolean) => {
      const label = markers.get(facility.id)?.core.label;
      if (!label) return;
      // A pinned label ignores the distance condition, so hovering a
      // marker names it even from the full-globe view.
      label.distanceDisplayCondition = (pinned ? undefined : LABEL_VISIBLE_WITHIN) as never;
    };
    handler.setInputAction((event: ScreenSpaceEventHandler.MotionEvent) => {
      const facility = facilityAt(event.endPosition);
      if (facility === hovered) return;
      if (hovered) setLabelPinned(hovered, false);
      if (facility) setLabelPinned(facility, true);
      hovered = facility;
      viewer.canvas.style.cursor = facility ? 'pointer' : '';
    }, ScreenSpaceEventType.MOUSE_MOVE);

    // ── Per-frame: idle rotation and the ion imagery cross-fade ──
    let lastTick = performance.now();
    const removeTick = scene.preUpdate.addEventListener(() => {
      const now = performance.now();
      const deltaSeconds = Math.min((now - lastTick) / 1000, 0.1);
      lastTick = now;
      const height = camera.positionCartographic.height;

      if (ionLayer) {
        const alpha = CesiumMath.clamp(
          (ION_FADE_START - height) / (ION_FADE_START - ION_FADE_END),
          0,
          1
        );
        ionLayer.show = alpha > 0;
        ionLayer.alpha = alpha;
      }

      const idle =
        !pointerDown &&
        !isFlyingRef.current &&
        !selectedIdRef.current &&
        height > AUTO_ROTATE_MIN_HEIGHT &&
        now - lastInteraction > AUTO_ROTATE_RESUME_MS;
      if (idle) {
        camera.rotate(
          Cartesian3.UNIT_Z,
          CesiumMath.toRadians(AUTO_ROTATE_DEG_PER_SEC) * deltaSeconds
        );
      }
    });

    return () => {
      removeTick();
      resizeObserver.disconnect();
      handler.destroy();
      viewer.canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      viewer.canvas.removeEventListener('wheel', markInteraction);
      markers.clear();
      viewerRef.current = null;
      viewer.destroy();
    };
  }, [handleSelect]);

  // ── Fly to the selected facility, or back out to the overview ──
  const hasFlownRef = useRef(false);
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const { camera } = viewer;

    let destination: Cartesian3;
    if (selectedFacilityId) {
      const facility = facilities.find((f) => f.id === selectedFacilityId);
      if (!facility) return;
      destination = Cartesian3.fromDegrees(facility.lng, facility.lat, FACILITY_VIEW_HEIGHT);
    } else {
      // Nothing to fly back from on first load.
      if (!hasFlownRef.current) return;
      // Pull straight back from wherever the camera is, rather than
      // swinging round to a fixed home position.
      const { longitude, latitude } = camera.positionCartographic;
      destination = Cartesian3.fromRadians(longitude, latitude, overviewHeightFor(viewer));
    }

    hasFlownRef.current = true;
    isFlyingRef.current = true;
    const done = () => {
      isFlyingRef.current = false;
    };
    camera.flyTo({ destination, duration: 2.6, complete: done, cancel: done });
  }, [selectedFacilityId]);

  // ── Filter highlight ──
  useEffect(() => {
    for (const [id, { core, halo }] of markersRef.current) {
      const state: MarkerHighlightState =
        matchingIds === null ? 'normal' : matchingIds.has(id) ? 'match' : 'dim';
      if (!core.point || !halo.point) continue;

      core.point.color = (state === 'dim' ? MARKER_DIM_COLOR : MARKER_COLOR) as never;
      core.point.outlineWidth = (state === 'dim' ? 0 : 1.5) as never;
      core.point.pixelSize = (state === 'match' ? 11 : 9) as never;
      halo.show = state !== 'dim';
      halo.point.color = (state === 'match' ? HALO_MATCH_COLOR : HALO_COLOR) as never;
      halo.point.pixelSize = (state === 'match' ? 30 : 24) as never;
    }
  }, [matchingIds]);

  return (
    <div className="absolute inset-0">
      {/* Accessibility: the globe is a WebGL canvas, so it has no native
          keyboard or screen-reader path to "click a marker." This list
          mirrors every facility as a real, focusable button so keyboard
          and screen-reader users can open the same side panel a mouse
          click on a marker opens. Visually hidden until a list item
          receives focus (e.g. via Tab). */}
      <nav
        aria-label="Facilities"
        className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:left-4 focus-within:top-20 focus-within:z-30 focus-within:max-h-[60vh] focus-within:w-64 focus-within:overflow-y-auto focus-within:rounded-lg focus-within:border focus-within:border-accent-400/30 focus-within:bg-black/90 focus-within:p-2 focus-within:backdrop-blur-md"
      >
        <ul>
          {facilities.map((facility) => (
            <li key={facility.id}>
              <button
                onClick={() => handleSelect(facility)}
                className="block w-full rounded px-2 py-1.5 text-left text-xs text-white/80 transition-colors hover:bg-accent-400/10 focus-visible:bg-accent-400/10"
              >
                {facility.name} <span className="text-white/45">— {facility.country}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div ref={containerRef} className="globe-canvas absolute inset-0" aria-hidden="true" />

      {failed && (
        <div
          className="absolute inset-0 flex items-center justify-center px-8 text-center"
          role="alert"
        >
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            The 3D globe could not start on this device. You can still find every facility with the
            search box above.
          </p>
        </div>
      )}

      {/* Imagery attribution, required by the data providers. */}
      <div ref={creditsRef} className="globe-credits" />
    </div>
  );
}
