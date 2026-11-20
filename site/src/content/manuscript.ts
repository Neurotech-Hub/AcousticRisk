import refsJson from './refs.json';

export const PREPRINT_URL = 'https://www.preprints.org/manuscript/202611.2187';
export const REPO_URL = 'https://github.com/Neurotech-Hub/AcousticRisk';

export const TITLE = 'Interpreting Acoustic Risk: Integrating Field Ethology and Laboratory Neuroscience in Rodents';
export const AUTHOR = 'Matt Gaidica';

/** Section numbers follow the order in manuscript/main.tex. */
export const SECTIONS = {
  intro: { n: '1', title: 'Introduction: the challenge of acoustic significance' },
  features: { n: '2', title: 'What information do rodents extract from sound?' },
  mechanisms: { n: '3', title: 'From acoustic information to neural and physiological responses' },
  action: { n: '4', title: 'From perceived risk to action: ecological and laboratory comparisons' },
  persistence: { n: '5', title: 'Why does the meaning or effect of a sound change with experience and repetition?' },
  account: { n: '6', title: 'Toward an integrated account of acoustic meaning' },
  demands: { n: '6.2', title: 'Three demands on the receiver (Equation 1)' },
  outlook: { n: '7', title: 'Outstanding questions and future directions' },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export interface Ref {
  key: string;
  authors: string[];
  year: string;
  title: string;
  venue: string;
  volume: string;
  pages: string;
  doi: string;
  short: string;
}

export const REFS = refsJson as Record<string, Ref>;

export function ref(key: string): Ref | undefined {
  return REFS[key];
}

export type Setting = 'Lab' | 'Field' | 'Lab + field';

export interface KeyExperiment {
  setting: Setting;
  text: string;
  refs: string[];
}

export const OUTSTANDING_QUESTIONS: { question: string; why: string; experiments: KeyExperiment[] }[] = [
  {
    question: 'Where does each natural call fall between broadly generalized and experience-specific responding?',
    why: 'Predator-call studies in naive laboratory rodents disagree, and the disagreement tracks strain, sound level, control stimulus, and endpoint. Settling it means following the same animals from first exposure onward, with heart and attention measured alongside behavior.',
    experiments: [
      {
        setting: 'Lab',
        text: 'Follow naive rats from first hearing a 22-kHz call through aversive experience, recording heart rate and locomotion as well as freezing, and test each stage with an acoustically matched control at two sound levels.',
        refs: ['OlszynskiEtAl2020', 'KimEtAl2010', 'EvansHammond1983a'],
      },
      {
        setting: 'Field',
        text: 'Play the same predator calls to rodent populations that do and do not live with that predator, under identical playback conditions, to ask where unlearned recognition persists.',
        refs: ['Blumstein2006', 'HendrieNeill1991', 'KindermannEtAl2009'],
      },
      {
        setting: 'Lab + field',
        text: 'Map how a species’ auditory system separates call features, then test whether learned alarm responses generalize along those same features, as gray squirrels do to unfamiliar but similar alarms.',
        refs: ['GetschowEtAl2013', 'ConcinaEtAl2018'],
      },
    ],
  },
  {
    question: 'Which circuits link natural acoustic signals to autonomic and defensive choices?',
    why: 'Causal circuit maps come mostly from tones, noise, and synthetic sounds. For natural calls, the clearest causal result is that the auditory thalamus is needed for experience-gated freezing to 22-kHz calls.',
    experiments: [
      {
        setting: 'Lab',
        text: 'Silence the competing CeA populations, or the striatal and collicular outputs, during natural-call playback rather than conditioned tones, and measure heart rate alongside freezing and flight.',
        refs: ['FadokEtAl2017', 'LiEtAl2021', 'KimEtAl2010'],
      },
      {
        setting: 'Lab',
        text: 'Repeat those manipulations in an arena where refuge and food can be changed, to see whether the same circuit is recruited when the cost of acting, not the sound, determines the action.',
        refs: ['MongeauEtAl2003'],
      },
      {
        setting: 'Field',
        text: 'Vary distance to refuge or food during alarm playback while recording heart rate, to obtain a sign of recognition that does not depend on overt defense. No field study has yet combined these.',
        refs: ['Mateo1996', 'BaackSwitzer2000', 'JayneEtAl2015'],
      },
    ],
  },
  {
    question: 'How much of a given field decline does each updating process explain?',
    why: 'Caller identity, reliability, and timing have almost always been studied one at a time. Separating them needs several signatures, such as recovery after rest and source specificity, measured in the same animals.',
    experiments: [
      {
        setting: 'Field',
        text: 'Within one playback series, hold the caller constant, then test recovery after rest, a change of caller, and renewed pairing with a predator model. Each process predicts a different pattern of return.',
        refs: ['Hare1998', 'HareAtkins2001'],
      },
      {
        setting: 'Lab + field',
        text: 'Present natural calls on fixed, jittered, and constant-hazard schedules with the same number of calls and mean interval. Irregular timing slows habituation to artificial sounds; no study has tested natural calls.',
        refs: ['Davis1970', 'HerryEtAl2007'],
      },
      {
        setting: 'Field',
        text: 'Change how often alarms are heard across a season while keeping caller and call structure fixed, to test whether vigilance per alarm falls as risk-allocation theory predicts.',
        refs: ['LimaBednekoff1999'],
      },
    ],
  },
  {
    question: 'Do these principles hold across strains, populations, species, and contexts?',
    why: 'Most rest on a few species and often a single paradigm. The same manipulation and endpoints need to be applied across species under comparable costs to tell shared mechanisms from shared questions.',
    experiments: [
      {
        setting: 'Lab + field',
        text: 'Run one playback protocol, with matched controls and the same endpoints (orienting, vigilance, heart rate, return to feeding), in a laboratory strain, a wild-derived population, and a field sciurid.',
        refs: ['EilamEtAl1999', 'Mateo1996'],
      },
      {
        setting: 'Lab',
        text: 'Re-test laboratory results in enriched enclosures where food and refuge are restored, to see whether freezing that looks like fear in an empty cage persists when the animal has better options.',
        refs: ['MongeauEtAl2003', 'BaackSwitzer2000'],
      },
      {
        setting: 'Field',
        text: 'Manipulate caller reliability where independent checking is cheap or costly, to ask why ground squirrels discount unreliable callers while marmots scrutinize them.',
        refs: ['HareAtkins2001', 'BlumsteinEtAl2004'],
      },
    ],
  },
];
