// Section 03: the playback experiments the manuscript leans on for "why does the
// response fade?" (Section 5). Each curve is a behavior someone measured, redrawn
// as an idealized schematic from the paper's description. Values are relative to
// the first presentation (1) and are NOT digitized data.

export type Setting = 'field' | 'lab';

export interface Condition {
  label: string;
  color: string;
  dash: string;
  /** Relative response, one value per presentation. */
  values: number[];
}

export interface Experiment {
  id: string;
  /** Short name for the card. */
  title: string;
  species: string;
  setting: Setting;
  sound: string;
  /** What was measured, as the y-axis label. */
  measure: string;
  xLabel: string;
  /** Presentation after which the manipulation happened, if any. */
  splitAfter?: number;
  splitLabel?: string;
  conditions: Condition[];
  /** What the result shows, in one or two sentences. */
  shows: string;
  /** What it leaves open, in one sentence. */
  open: string;
  refs: string[];
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'caller-switch',
    title: 'Switch the caller',
    species: 'Richardson’s ground squirrel',
    setting: 'field',
    sound: 'Alarm chirps from one juvenile, five playbacks about 3 min apart',
    measure: 'Time spent vigilant after each call',
    xLabel: 'Playback',
    splitAfter: 4,
    splitLabel: 'playback 5',
    conditions: [
      { label: 'Different caller', color: 'var(--learned)', dash: '', values: [1, 0.45, 0.35, 0.3, 0.9] },
      { label: 'Same caller, new recording', color: 'var(--rapid)', dash: '6 4', values: [1, 0.45, 0.35, 0.3, 0.28] },
    ],
    shows:
      'Vigilance fell by the second call. A call from a different squirrel brought it back; a fresh recording of the same squirrel did not. The fade belonged to the caller, not to the recording or to the animal’s ears.',
    open: 'Both “used to that voice” and “that voice is unreliable” predict this result, so it does not tell them apart.',
    refs: ['Hare1998'],
  },
  {
    id: 'marmot',
    title: 'Switch the caller, measured as lost feeding',
    species: 'Yellow-bellied marmot',
    setting: 'field',
    sound: 'Repeated alarm calls from one marmot, then a new caller',
    measure: 'Time not feeding after each call',
    xLabel: 'Playback',
    splitAfter: 5,
    splitLabel: 'new caller',
    conditions: [{ label: 'Foraging suppression', color: 'var(--learned)', dash: '', values: [1, 0.6, 0.42, 0.33, 0.28, 0.8] }],
    shows:
      'The same pattern in a second species and a different measure: marmots stopped losing feeding time to one caller, then lost it again when the caller changed. Whether the caller was a familiar neighbor made no difference.',
    open: 'As above, caller-specific recovery alone does not separate habituation from learning about the caller.',
    refs: ['BlumsteinDaniel2004'],
  },
  {
    id: 'reliability',
    title: 'Let one caller cry wolf',
    species: 'Richardson’s ground squirrel',
    setting: 'field',
    sound: 'Ten alarm-call playbacks from each of two callers. After most calls from one caller, a stuffed badger was shown; after the other caller’s calls, nothing appeared',
    measure: 'Upright alert posture after each call',
    xLabel: 'Playback',
    conditions: [
      { label: 'Reliable caller (badger follows)', color: 'var(--learned)', dash: '', values: [1, 0.95, 0.9, 0.92, 0.88, 0.9, 0.85, 0.88, 0.84, 0.86] },
      { label: 'Unreliable caller (nothing follows)', color: 'var(--rapid)', dash: '6 4', values: [1, 0.8, 0.65, 0.5, 0.4, 0.36, 0.32, 0.3, 0.28, 0.26] },
    ],
    shows:
      'Responses to the caller whose alarms never came true fell away, and differed from the reliable caller by the fifth playback. The squirrels were tracking whether a particular caller’s alarms predict danger.',
    open: 'Marmots do the opposite and respond more to unreliable callers. No laboratory rodent has been tested this way.',
    refs: ['HareAtkins2001', 'BlumsteinEtAl2004'],
  },
  {
    id: 'timing',
    title: 'Change the rhythm',
    species: 'Laboratory rat',
    setting: 'lab',
    sound: 'Loud tones, either every 8 s exactly or at irregular intervals averaging 8 s',
    measure: 'Startle amplitude',
    xLabel: 'Tone',
    conditions: [
      { label: 'Regular timing', color: 'var(--rapid)', dash: '6 4', values: [1, 0.7, 0.52, 0.4, 0.32, 0.27, 0.23, 0.2, 0.18, 0.17] },
      { label: 'Irregular timing, same average', color: 'var(--learned)', dash: '', values: [1, 0.82, 0.7, 0.62, 0.55, 0.5, 0.46, 0.43, 0.41, 0.4] },
    ],
    shows:
      'With the same number of tones and the same average spacing, regularly timed tones lost their effect faster. The animal learns when the next sound is due. Jittered timing also kept mouse amygdala neurons responding.',
    open: 'Artificial sounds in the lab. No one has shown that any schedule keeps free-living animals responding to natural calls.',
    refs: ['Davis1970', 'HerryEtAl2007'],
  },
];

/** The manuscript's four explanations for a fade, and what each says would bring the response back (Section 5.5). */
export interface Explanation {
  name: string;
  idea: string;
  returnsWhen: string;
  tested: string;
  /** Experiment ids above that bear on it. */
  evidence: string[];
}

export const EXPLANATIONS: Explanation[] = [
  {
    name: 'Habituation',
    idea: 'The sound has stopped being new.',
    returnsWhen: 'Time passes, or the sound changes.',
    tested: 'Yes. Caller switch (field); rest in rats.',
    evidence: ['caller-switch', 'marmot'],
  },
  {
    name: 'Learning about the caller',
    idea: 'This caller’s alarms have not come true.',
    returnsWhen: 'The caller changes, or its alarms come true again.',
    tested: 'Yes, in field squirrels and marmots. Not in the lab.',
    evidence: ['caller-switch', 'reliability'],
  },
  {
    name: 'Learning the rhythm',
    idea: 'The animal knows when the next sound is due.',
    returnsWhen: 'The timing becomes unpredictable.',
    tested: 'Lab only, with artificial sounds.',
    evidence: ['timing'],
  },
  {
    name: 'Not worth reacting',
    idea: 'The animal still reads danger, but reacting costs too much food or safety.',
    returnsWhen: 'Reacting gets cheaper: refuge nearby, animal well fed.',
    tested: 'Not with sound.',
    evidence: [],
  },
];

export const SOURCES = [...new Set(EXPERIMENTS.flatMap((e) => e.refs))];
