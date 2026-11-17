import '../cesiumBase';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Cartesian2,
  Cartesian3,
  Color,
  Credit,
  DistanceDisplayCondition,
  Entity,
  GeographicTilingScheme,
  HeightReference,
  HorizontalOrigin,
  ImageryLayer,
  Ion,
  IonImageryProvider,
  LabelCollection,
  LabelStyle,
  Math as CesiumMath,
  NearFarScalar,
  PerspectiveFrustum,
  PointPrimitiveCollection,
  Rectangle,
  SceneTransforms,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  VerticalOrigin,
  Viewer,
  buildModuleUrl,
  createWorldTerrainAsync,
  defined,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { useGlobeStore } from '../store/useGlobeStore';
import { FACILITY_TYPE_COLORS } from '../types/facility';
import type { Facility, FacilityStub, FacilityType } from '../types/facility';
import { facilities } from '../data/facilities';
import { facilityMatchesFilters } from '../utils/filters';
import placeNameData from '../data/placeNames.json';

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
//      need it, which also keeps ion usage down. There are two versions of
//      the aerial imagery, with and without place names printed on it;
//      the "Place names" switch picks between them.
//
// Place names come from two sources. From far out, the site draws its own
// country, sea and city names (Natural Earth data, src/data/placeNames.json).
// Close in, the labelled aerial imagery takes over, since it names far more
// places than could be bundled. Without ion, the site's own names stay on
// at every height.

const ION_TOKEN = import.meta.env.PUBLIC_CESIUM_ION_TOKEN?.trim() ?? '';
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
// ion asset ids: aerial imagery without and with place names.
const ION_AERIAL = 2;
const ION_AERIAL_WITH_LABELS = 3;

// ─── Camera ───────────────────────────────────────────────────────────────────

const EARTH_RADIUS_M = 6_378_137;
// Start over Europe and Africa, where the facility density is highest.
const INITIAL_LONGITUDE = 15;
const INITIAL_LATITUDE = 25;
// How close a selected facility is viewed, and how close the camera may
// go: site scale once ion imagery has actually loaded, regional scale
// while only 500 m Blue Marble is available. Keyed on ion having loaded,
// not on a token merely being configured, so a rejected or expired token
// can never fly the camera down to imagery that isn't there.
const VIEW_LIMITS = {
  ion: { facilityHeight: 12_000, minZoom: 400 },
  blueMarble: { facilityHeight: 1_100_000, minZoom: 150_000 },
} as const;
// Aerial imagery breaks down at the poles (the map projection it is cut
// from has no data there), so it is clipped to this latitude and polar
// facilities such as IceCube are always viewed from Blue Marble height.
const POLAR_LATITUDE = 80;

function facilityViewHeight(facility: FacilityStub, ionReady: boolean): number {
  const useIon = ionReady && Math.abs(facility.lat) < POLAR_LATITUDE;
  return (useIon ? VIEW_LIMITS.ion : VIEW_LIMITS.blueMarble).facilityHeight;
}
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

// One marker colour per facility type; the filter panel shows the key.
const TYPE_COLORS = Object.fromEntries(
  Object.entries(FACILITY_TYPE_COLORS).map(([type, css]) => [type, Color.fromCssColorString(css)])
) as Record<FacilityType, Color>;
const HALO_ALPHA = 0.28;
const HALO_MATCH_ALPHA = 0.45;
const MARKER_DIM_COLOR = Color.fromCssColorString('#3d6670').withAlpha(0.35);
const MARKER_OUTLINE = Color.WHITE.withAlpha(0.75);
const LABEL_MAX_DISTANCE = 3_000_000;
// Names appear on their own once the camera is this close (metres);
// further out they show on hover only, so the overview stays uncluttered.
const LABEL_VISIBLE_WITHIN = new DistanceDisplayCondition(0, LABEL_MAX_DISTANCE);
// Where several facilities sit close together (the three under Mount
// Ikeno, the telescopes on La Palma) their names would print on top of one
// another. A few times a second the labels are laid out again and any that
// would cover an already placed one is hidden until the view opens up.
const LABEL_DECLUTTER_MS = 150;
const LABEL_CHAR_WIDTH = 7.6;
const LABEL_HEIGHT = 26;
const LABEL_GAP = 4;
// Keep markers visible over 3D terrain when viewed from nearby.
const MARKER_DEPTH_TEST_DISTANCE = 1_500_000;

interface MarkerEntities {
  core: Entity;
  halo: Entity;
}

function createMarker(viewer: Viewer, facility: Facility): MarkerEntities {
  const position = Cartesian3.fromDegrees(facility.lng, facility.lat);
  const color = TYPE_COLORS[facility.type];

  const halo = viewer.entities.add({
    position,
    point: {
      pixelSize: 24,
      color: color.withAlpha(HALO_ALPHA),
      heightReference: HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
    },
  });

  const core = viewer.entities.add({
    position,
    point: {
      pixelSize: 9,
      color,
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

// ─── Place names ──────────────────────────────────────────────────────────────

type PlaceKind = 'ocean' | 'sea' | 'country' | 'capital' | 'city';
type PlaceRecord = [PlaceKind, string, number, number, number];

// Natural Earth gives each name the web-map zoom level at which it should
// first appear. Converted to a camera height: zoom 2 ≈ 17,500 km,
// zoom 4 ≈ 4,400 km, zoom 6 ≈ 1,100 km.
const PLACE_ZOOM_HEIGHT = 70_000_000;
// Drawing order, which is also who wins when two names would overlap.
const PLACE_PRIORITY: Record<PlaceKind, number> = { ocean: 0, country: 1, sea: 2, capital: 3, city: 4 };
// Once labelled aerial imagery is on screen the site's own names fade out
// between these camera distances, so the two sets don't print twice.
const OWN_NAMES_FADE = new NearFarScalar(1_200_000, 0, 2_000_000, 1);
const OWN_NAMES_HIDDEN_BELOW = 1_200_000;

const PLACE_OUTLINE = Color.BLACK.withAlpha(0.75);
const WATER_COLOR = Color.fromCssColorString('#a5cdea').withAlpha(0.85);
const PLACE_STYLES: Record<
  PlaceKind,
  { font: string; color: Color; charWidth: number; height: number; upper?: boolean }
> = {
  ocean: { font: 'italic 500 14px "Inter Variable", Inter, sans-serif', color: WATER_COLOR, charWidth: 7.6, height: 16 },
  sea: { font: 'italic 500 11px "Inter Variable", Inter, sans-serif', color: WATER_COLOR, charWidth: 6, height: 13 },
  country: {
    font: '600 11px "Inter Variable", Inter, sans-serif',
    color: Color.WHITE.withAlpha(0.8),
    charWidth: 7.4,
    height: 13,
    upper: true,
  },
  capital: { font: '600 11px "Inter Variable", Inter, sans-serif', color: Color.WHITE.withAlpha(0.92), charWidth: 6.4, height: 13 },
  city: { font: '500 11px "Inter Variable", Inter, sans-serif', color: Color.WHITE.withAlpha(0.8), charWidth: 6.2, height: 13 },
};
const CITY_DOT_COLOR = Color.WHITE.withAlpha(0.85);

interface PlaceName {
  kind: PlaceKind;
  text: string;
  position: Cartesian3;
  /** Highest camera height (metres) at which the name is shown. */
  maxHeight: number;
  label: ReturnType<LabelCollection['add']>;
  dot?: ReturnType<PointPrimitiveCollection['add']>;
  shown: boolean;
}

function createPlaceNames(labels: LabelCollection, dots: PointPrimitiveCollection): PlaceName[] {
  const records = (placeNameData as PlaceRecord[])
    .slice()
    .sort((a, b) => PLACE_PRIORITY[a[0]] - PLACE_PRIORITY[b[0]] || a[4] - b[4]);
  return records.map(([kind, name, lat, lng, minZoom]) => {
    const style = PLACE_STYLES[kind];
    const position = Cartesian3.fromDegrees(lng, lat);
    const isTown = kind === 'capital' || kind === 'city';
    const text = style.upper ? name.toUpperCase() : name;
    const label = labels.add({
      position,
      text,
      font: style.font,
      fillColor: style.color,
      outlineColor: PLACE_OUTLINE,
      outlineWidth: 3,
      style: LabelStyle.FILL_AND_OUTLINE,
      horizontalOrigin: isTown ? HorizontalOrigin.LEFT : HorizontalOrigin.CENTER,
      verticalOrigin: VerticalOrigin.CENTER,
      pixelOffset: isTown ? new Cartesian2(6, 0) : Cartesian2.ZERO,
      disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
      show: false,
    });
    const dot = isTown
      ? dots.add({
          position,
          pixelSize: kind === 'capital' ? 4.5 : 3.5,
          color: CITY_DOT_COLOR,
          outlineColor: PLACE_OUTLINE,
          outlineWidth: 1,
          disableDepthTestDistance: MARKER_DEPTH_TEST_DISTANCE,
          show: false,
        })
      : undefined;
    return {
      kind,
      text,
      position,
      maxHeight: PLACE_ZOOM_HEIGHT / 2 ** minZoom,
      label,
      dot,
      shown: false,
    };
  });
}

// ─── Globe ────────────────────────────────────────────────────────────────────

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const markersRef = useRef(new Map<string, MarkerEntities>());
  const isFlyingRef = useRef(false);
  const ionReadyRef = useRef(false);
  const [failed, setFailed] = useState(false);

  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  const activeFilters = useGlobeStore((s) => s.activeFilters);
  const showPlaceNames = useGlobeStore((s) => s.showPlaceNames);
  const showPlaceNamesRef = useRef(showPlaceNames);
  showPlaceNamesRef.current = showPlaceNames;

  // The viewer's event handlers are registered once, so they read the
  // current selection through a ref rather than a stale closure.
  const selectedIdRef = useRef(selectedFacilityId);
  selectedIdRef.current = selectedFacilityId;

  // null → no filters active, every marker renders as 'normal'.
  // Set  → filters active; markers in the set are 'match', others 'dim'.
  const matchingIds = useMemo<Set<string> | null>(() => {
    if (
      activeFilters.topics.length === 0 &&
      activeFilters.statuses.length === 0 &&
      activeFilters.types.length === 0
    ) {
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
    scene.screenSpaceCameraController.minimumZoomDistance = VIEW_LIMITS.blueMarble.minZoom;

    viewer.imageryLayers.addImageryProvider(createBlueMarbleProvider());

    // Ion imagery and terrain are added only after they load. Until then,
    // and for good if the token is rejected, the globe is exactly the
    // Blue Marble globe a token-less build shows.
    let ionLayer: ImageryLayer | null = null;
    let ionLabelledLayer: ImageryLayer | null = null;
    // Clipped short of the poles: beyond its coverage the aerial imagery's
    // edge pixels smear all the way to the pole, hiding Blue Marble's
    // proper polar imagery underneath.
    const createIonLayer = (provider: IonImageryProvider) =>
      new ImageryLayer(provider, {
        rectangle: Rectangle.fromDegrees(-180, -POLAR_LATITUDE, 180, POLAR_LATITUDE),
        show: false,
      });
    if (HAS_ION) {
      // The labelled version is optional: if the token cannot use it, the
      // site's own names simply stay on when zoomed in.
      IonImageryProvider.fromAssetId(ION_AERIAL_WITH_LABELS)
        .then((provider) => {
          if (viewer.isDestroyed()) return;
          ionLabelledLayer = createIonLayer(provider);
          viewer.imageryLayers.add(ionLabelledLayer);
        })
        .catch((error) => {
          console.warn('Labelled aerial imagery unavailable; place names stay drawn by the site.', error);
        });

      IonImageryProvider.fromAssetId(ION_AERIAL)
        .then((provider) => {
          if (viewer.isDestroyed()) return;
          ionLayer = createIonLayer(provider);
          viewer.imageryLayers.add(ionLayer);
          // Keep the labelled layer, if already there, on top.
          if (ionLabelledLayer) viewer.imageryLayers.raiseToTop(ionLabelledLayer);
          ionReadyRef.current = true;
          scene.screenSpaceCameraController.minimumZoomDistance = VIEW_LIMITS.ion.minZoom;
          // A facility opened before ion finished loading (e.g. from a
          // shared link) was framed at Blue Marble height; move in now.
          const selected = facilities.find((f) => f.id === selectedIdRef.current);
          if (selected) {
            camera.flyTo({
              destination: Cartesian3.fromDegrees(
                selected.lng,
                selected.lat,
                facilityViewHeight(selected, true)
              ),
              duration: 2,
            });
          }
        })
        .catch((error) => {
          console.warn('Cesium ion imagery unavailable; staying on NASA Blue Marble.', error);
        });

      createWorldTerrainAsync()
        .then((terrainProvider) => {
          if (!viewer.isDestroyed()) viewer.terrainProvider = terrainProvider;
        })
        .catch((error) => {
          console.warn('Cesium ion terrain unavailable; the globe stays smooth.', error);
        });
    }

    viewer.creditDisplay.addStaticCredit(new Credit('Place names: Natural Earth'));
    const placeLabels = scene.primitives.add(new LabelCollection({ scene })) as LabelCollection;
    const placeDots = scene.primitives.add(new PointPrimitiveCollection()) as PointPrimitiveCollection;
    const placeNames = createPlaceNames(placeLabels, placeDots);
    let ownNamesFading = false;

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

    // ── Label layout: hide names that would overlap one already shown ──
    const labelPositions = new Map(
      facilities.map((f) => [f.id, Cartesian3.fromDegrees(f.lng, f.lat)] as const)
    );
    const labelShown = new Map<string, boolean>();
    const windowScratch = new Cartesian2();
    const toCamera = new Cartesian3();
    const normalScratch = new Cartesian3();
    // The labelled imagery is in use only while the switch is on.
    const ionLabelledActive = () => ionLabelledLayer !== null && ionLayer !== null && showPlaceNamesRef.current;
    const declutterLabels = () => {
      const placed: { left: number; right: number; top: number; bottom: number }[] = [];
      const selectedId = selectedIdRef.current;
      // The hovered and selected facilities claim their space first.
      const rank = (f: Facility) => (f === hovered ? 0 : f.id === selectedId ? 1 : 2);
      const ordered = [...facilities].sort((a, b) => rank(a) - rank(b));

      for (const facility of ordered) {
        const label = markers.get(facility.id)?.core.label;
        const position = labelPositions.get(facility.id);
        if (!label || !position) continue;

        const priority = rank(facility) < 2;
        const inRange =
          facility === hovered ||
          Cartesian3.distance(camera.positionWC, position) <= LABEL_MAX_DISTANCE;
        const point = inRange
          ? SceneTransforms.worldToWindowCoordinates(scene, position, windowScratch)
          : undefined;

        let visible = false;
        if (point) {
          const halfWidth = (facility.name.length * LABEL_CHAR_WIDTH) / 2 + 8 + LABEL_GAP;
          const box = {
            left: point.x - halfWidth,
            right: point.x + halfWidth,
            bottom: point.y - 14 + LABEL_GAP,
            top: point.y - 14 - LABEL_HEIGHT - LABEL_GAP,
          };
          const overlaps = placed.some(
            (other) =>
              box.left < other.right &&
              box.right > other.left &&
              box.top < other.bottom &&
              box.bottom > other.top
          );
          visible = priority || !overlaps;
          if (visible) placed.push(box);
        }

        if (labelShown.get(facility.id) !== visible) {
          labelShown.set(facility.id, visible);
          label.show = visible as never;
        }
      }

      // Place names never cover a facility marker or name.
      const cameraPosition = camera.positionWC;
      const isFacing = (position: Cartesian3) =>
        Cartesian3.dot(position, Cartesian3.subtract(cameraPosition, position, toCamera)) > 0;
      for (const position of labelPositions.values()) {
        if (!isFacing(position)) continue;
        const point = SceneTransforms.worldToWindowCoordinates(scene, position, windowScratch);
        if (point) {
          placed.push({ left: point.x - 9, right: point.x + 9, top: point.y - 9, bottom: point.y + 9 });
        }
      }

      // Names close to the globe's edge are skipped: foreshortened and
      // half off the disc, they are hard to read.
      const facesCamera = (position: Cartesian3) => {
        Cartesian3.subtract(cameraPosition, position, toCamera);
        Cartesian3.normalize(toCamera, toCamera);
        return Cartesian3.dot(Cartesian3.normalize(position, normalScratch), toCamera) > 0.3;
      };
      const height = camera.positionCartographic.height;
      const namesOn =
        showPlaceNamesRef.current && !(ionLabelledActive() && height < OWN_NAMES_HIDDEN_BELOW);
      const fading = namesOn && ionLabelledActive();
      if (fading !== ownNamesFading) {
        ownNamesFading = fading;
        for (const place of placeNames) {
          place.label.translucencyByDistance = (fading ? OWN_NAMES_FADE : undefined) as never;
          if (place.dot) place.dot.translucencyByDistance = (fading ? OWN_NAMES_FADE : undefined) as never;
        }
      }
      const width = viewer.canvas.clientWidth;
      const canvasHeight = viewer.canvas.clientHeight;
      for (const place of placeNames) {
        let visible = false;
        if (namesOn && height <= place.maxHeight && facesCamera(place.position)) {
          const point = SceneTransforms.worldToWindowCoordinates(scene, place.position, windowScratch);
          if (point && point.x > -50 && point.x < width + 50 && point.y > -20 && point.y < canvasHeight + 20) {
            const style = PLACE_STYLES[place.kind];
            const textWidth = place.text.length * style.charWidth;
            const isTown = place.kind === 'capital' || place.kind === 'city';
            const box = isTown
              ? { left: point.x - 4, right: point.x + 8 + textWidth, top: point.y - style.height / 2 - 2, bottom: point.y + style.height / 2 + 2 }
              : { left: point.x - textWidth / 2 - 4, right: point.x + textWidth / 2 + 4, top: point.y - style.height / 2 - 2, bottom: point.y + style.height / 2 + 2 };
            visible = !placed.some(
              (other) =>
                box.left < other.right && box.right > other.left && box.top < other.bottom && box.bottom > other.top
            );
            if (visible) placed.push(box);
          }
        }
        if (place.shown !== visible) {
          place.shown = visible;
          place.label.show = visible;
          if (place.dot) place.dot.show = visible;
        }
      }
    };
    let lastDeclutter = 0;

    // ── Per-frame: label layout, idle rotation and the ion imagery cross-fade ──
    let lastTick = performance.now();
    const removeTick = scene.preUpdate.addEventListener(() => {
      const now = performance.now();
      const deltaSeconds = Math.min((now - lastTick) / 1000, 0.1);
      lastTick = now;
      const height = camera.positionCartographic.height;

      if (now - lastDeclutter > LABEL_DECLUTTER_MS) {
        lastDeclutter = now;
        declutterLabels();
      }

      if (ionLayer) {
        const alpha = CesiumMath.clamp(
          (ION_FADE_START - height) / (ION_FADE_START - ION_FADE_END),
          0,
          1
        );
        // Only one of the two aerial layers is shown (and downloaded) at a time.
        const labelled = ionLabelledActive();
        for (const [layer, active] of [
          [ionLayer, !labelled],
          [ionLabelledLayer, labelled],
        ] as const) {
          if (!layer) continue;
          layer.show = active && alpha > 0;
          layer.alpha = alpha;
        }
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
      placeLabels.removeAll();
      placeDots.removeAll();
      viewerRef.current = null;
      ionReadyRef.current = false;
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
      destination = Cartesian3.fromDegrees(
        facility.lng,
        facility.lat,
        facilityViewHeight(facility, ionReadyRef.current)
      );
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
    for (const facility of facilities) {
      const marker = markersRef.current.get(facility.id);
      if (!marker) continue;
      const { core, halo } = marker;
      const id = facility.id;
      const color = TYPE_COLORS[facility.type];
      const state: MarkerHighlightState =
        matchingIds === null ? 'normal' : matchingIds.has(id) ? 'match' : 'dim';
      if (!core.point || !halo.point) continue;

      core.point.color = (state === 'dim' ? MARKER_DIM_COLOR : color) as never;
      core.point.outlineWidth = (state === 'dim' ? 0 : 1.5) as never;
      core.point.pixelSize = (state === 'match' ? 11 : 9) as never;
      halo.show = state !== 'dim';
      halo.point.color = color.withAlpha(state === 'match' ? HALO_MATCH_ALPHA : HALO_ALPHA) as never;
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
