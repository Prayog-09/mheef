import type { Facility } from '../types/facility';
import cern from './facilities/cern.ts';
import fermilab from './facilities/fermilab.ts';
import brookhaven from './facilities/brookhaven.ts';
import kek from './facilities/kek.ts';
import granSasso from './facilities/gran-sasso.ts';
import snolab from './facilities/snolab.ts';
import kamioka from './facilities/kamioka.ts';
import surf from './facilities/surf.ts';
import icecube from './facilities/icecube.ts';
import juno from './facilities/juno.ts';
import dayaBay from './facilities/daya-bay.ts';
import pierreAuger from './facilities/pierre-auger.ts';
import cta from './facilities/cta.ts';
import ligo from './facilities/ligo.ts';
import virgo from './facilities/virgo.ts';
import kagra from './facilities/kagra.ts';
import frib from './facilities/frib.ts';
import gsi from './facilities/gsi.ts';
import triumf from './facilities/triumf.ts';
import desy from './facilities/desy.ts';
import slac from './facilities/slac.ts';
import jParc from './facilities/j-parc.ts';
import jinr from './facilities/jinr.ts';
import binp from './facilities/binp.ts';
import frascati from './facilities/frascati.ts';
import jeffersonLab from './facilities/jefferson-lab.ts';
import psi from './facilities/psi.ts';
import hess from './facilities/hess.ts';
import grapes3 from './facilities/grapes-3.ts';
import supl from './facilities/supl.ts';
import hyperKamiokande from './facilities/hyper-kamiokande.ts';
import cjpl from './facilities/cjpl.ts';
import km3net from './facilities/km3net.ts';
import baikalGvd from './facilities/baikal-gvd.ts';
import lhaaso from './facilities/lhaaso.ts';
import magic from './facilities/magic.ts';
import hawc from './facilities/hawc.ts';
import telescopeArray from './facilities/telescope-array.ts';
import geo600 from './facilities/geo600.ts';
import rikenRibf from './facilities/riken-ribf.ts';
import ihep from './facilities/ihep.ts';
import boulby from './facilities/boulby.ts';
import canfranc from './facilities/canfranc.ts';
import baksan from './facilities/baksan.ts';
import kolarGoldFields from './facilities/kolar-gold-fields.ts';
import veritas from './facilities/veritas.ts';
import antares from './facilities/antares.ts';
import mace from './facilities/mace.ts';
import ligoIndia from './facilities/ligo-india.ts';
import imb from './facilities/imb.ts';
import cavendish from './facilities/cavendish.ts';
import berkeleyLab from './facilities/berkeley-lab.ts';
import losAlamos from './facilities/los-alamos.ts';
import modane from './facilities/modane.ts';
import yemilab from './facilities/yemilab.ts';
import ssc from './facilities/ssc.ts';
import vecc from './facilities/vecc.ts';
import iuac from './facilities/iuac.ts';
import ino from './facilities/ino.ts';
import ganil from './facilities/ganil.ts';
import savannahRiver from './facilities/savannah-river.ts';
import cornell from './facilities/cornell.ts';
import chacaltaya from './facilities/chacaltaya.ts';
import soudan from './facilities/soudan.ts';
import reno from './facilities/reno.ts';
import doubleChooz from './facilities/double-chooz.ts';
import flysEye from './facilities/flys-eye.ts';
import agasa from './facilities/agasa.ts';
import tibetAsgamma from './facilities/tibet-asgamma.ts';
import kascade from './facilities/kascade.ts';

/**
 * The full dataset. Each facility lives in its own file under
 * ./facilities/, named after its id. To add one, create the file, then
 * import it here and add it to the list; `npm run validate` fails if a file
 * is missing from the list or its name does not match its id.
 *
 * Order matters only where facilities crowd together on the globe: the
 * earlier one keeps its label.
 */
export const facilities: readonly Facility[] = [
  cern,
  fermilab,
  brookhaven,
  kek,
  granSasso,
  snolab,
  kamioka,
  surf,
  icecube,
  juno,
  dayaBay,
  pierreAuger,
  cta,
  ligo,
  virgo,
  kagra,
  frib,
  gsi,
  triumf,
  desy,
  slac,
  jParc,
  jinr,
  binp,
  frascati,
  jeffersonLab,
  psi,
  hess,
  grapes3,
  supl,
  hyperKamiokande,
  cjpl,
  km3net,
  baikalGvd,
  lhaaso,
  magic,
  hawc,
  telescopeArray,
  geo600,
  rikenRibf,
  ihep,
  boulby,
  canfranc,
  baksan,
  kolarGoldFields,
  veritas,
  antares,
  mace,
  ligoIndia,
  imb,
  cavendish,
  berkeleyLab,
  losAlamos,
  modane,
  yemilab,
  ssc,
  vecc,
  iuac,
  ino,
  ganil,
  savannahRiver,
  cornell,
  chacaltaya,
  soudan,
  reno,
  doubleChooz,
  flysEye,
  agasa,
  tibetAsgamma,
  kascade,
];
