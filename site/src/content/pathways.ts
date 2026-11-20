// Pathway map data for "Explore the Evidence": a redraw of manuscript Fig. 3
// (Section 3, "From acoustic information to neural and physiological
// responses"). Edge and node evidence classes follow the Fig. 3 caption.
// This is a compilation across preparations, not a single established circuit.

export type EvidenceClass = 'C1' | 'C2' | 'C3' | 'C4' | 'C5';

export interface ClassInfo {
  id: EvidenceClass;
  label: string;
  short: string;
  stroke: string;
  width: number;
  dash: string;
  glyph: string;
}

// Ordered strongest to weakest. Style = line weight and pattern, not color alone.
export const CLASSES: ClassInfo[] = [
  { id: 'C1', label: 'Causal evidence, natural vocalization', short: 'Causal · natural call', stroke: '#235B57', width: 4.5, dash: '', glyph: 'i' },
  { id: 'C2', label: 'Causal evidence, other natural sound', short: 'Causal · other natural sound', stroke: '#235B57', width: 3.5, dash: '10 5', glyph: 'ii' },
  { id: 'C3', label: 'Causal evidence, synthetic or conditioned sound', short: 'Causal · synthetic or conditioned', stroke: '#55656A', width: 2.4, dash: '', glyph: 'iii' },
  { id: 'C4', label: 'Activity evidence (recording, c-Fos, fMRI), natural vocalization', short: 'Activity · natural call', stroke: '#55656A', width: 2.6, dash: '1.5 5', glyph: 'iv' },
  { id: 'C5', label: 'Conceptual extrapolation', short: 'Conceptual extrapolation', stroke: '#758589', width: 1.6, dash: '8 4 2 4', glyph: 'v' },
];

export type Zone = 'sense' | 'value' | 'output' | 'response';

export const ZONES: { id: Zone; label: string; x: number }[] = [
  { id: 'sense', label: 'Sensory representation', x: 130 },
  { id: 'value', label: 'Association and valuation', x: 380 },
  { id: 'output', label: 'Parallel outputs', x: 640 },
  { id: 'response', label: 'Responses', x: 900 },
];

export interface MapNode {
  id: string;
  label: string;
  sub?: string;
  zone: Zone;
  y: number;
  /** Evidence attached to the structure itself (not to a connection). */
  evidence?: { classes: EvidenceClass[]; text: string; refs: string[] };
  note?: string;
}

export const NODES: MapNode[] = [
  { id: 'cn', label: 'Cochlea and brainstem', zone: 'sense', y: 70, note: 'Feature coding: frequency, level, timing. That is not meaning.' },
  { id: 'ic', label: 'Inferior colliculus', sub: 'IC', zone: 'sense', y: 170 },
  {
    id: 'mgb', label: 'Auditory thalamus', sub: 'MGB', zone: 'sense', y: 300,
    evidence: {
      classes: ['C1', 'C2'],
      text: 'The auditory thalamus was required for experience-gated freezing to a distressed partner’s 22-kHz calls, and the dorsal MGB for freezing to movement-sound cessation.',
      refs: ['KimEtAl2010', 'PereiraEtAl2020'],
    },
  },
  {
    id: 'ac', label: 'Auditory cortex', zone: 'sense', y: 440,
    evidence: {
      classes: ['C1', 'C4'],
      text: 'Oxytocin acting in auditory cortex enabled pup retrieval (causal, natural calls, but care rather than defense). c-Fos maps show call-type differences in auditory regions after ultrasonic playback (activity only).',
      refs: ['MarlinEtAl2015', 'SadanandaEtAl2008', 'OudaEtAl2016'],
    },
  },
  {
    id: 'bla', label: 'Lateral and basolateral amygdala', sub: 'LA/BLA', zone: 'value', y: 120,
    evidence: {
      classes: ['C4'],
      text: 'Amygdala neurons in naive rats respond differently to 22-kHz and 50-kHz calls, but frequency-matched tones reproduce most of the difference and the rats do not freeze.',
      refs: ['ParsanaEtAl2012a'],
    },
  },
  { id: 'cea', label: 'Central amygdala', sub: 'CeA', zone: 'value', y: 230, note: 'Not a single "fear center": competing outputs sit within it.' },
  {
    id: 'bnst', label: 'BNST', sub: 'extended amygdala', zone: 'value', y: 360,
    evidence: {
      classes: ['C4'],
      text: 'BNST- and BLA-related activity differs between 22- and 55-kHz calls in c-Fos and awake fMRI studies. This locates engagement without establishing necessity.',
      refs: ['DemaestriEtAl2019', 'GranataEtAl2024'],
    },
  },
  { id: 'pfc', label: 'Prefrontal cortex and hippocampus', zone: 'value', y: 520, note: 'Modulation: how far learned fear generalizes and how it is extinguished.' },
  { id: 'pnc', label: 'Caudal pontine reticular nucleus', sub: 'PnC', zone: 'output', y: 70 },
  { id: 'pag', label: 'Periaqueductal gray', sub: 'PAG', zone: 'output', y: 190 },
  { id: 'sc', label: 'Superior colliculus and tail of striatum', zone: 'output', y: 400 },
  {
    id: 'aut', label: 'Hypothalamic and brainstem autonomic targets', zone: 'output', y: 510,
    note: 'Sympathetic and parasympathetic output, plus the slower HPA axis.',
  },
  { id: 'startle', label: 'Startle', zone: 'response', y: 70 },
  { id: 'disc', label: 'Call discrimination', zone: 'response', y: 140 },
  { id: 'freeze', label: 'Freezing', zone: 'response', y: 280 },
  { id: 'escape', label: 'Escape', zone: 'response', y: 385 },
  {
    id: 'cardio', label: 'Cardiac and endocrine change', zone: 'response', y: 510,
    evidence: {
      classes: [],
      text: 'With natural calls this is physiology-and-behavior evidence: heart rate and locomotion slow to 22-kHz calls in naive rats, ground squirrels discriminate call types by heart rate before behavior, and spiny mice raise cortisol without visible defense. It shows what changes, not which pathway changed it.',
      refs: ['OlszynskiEtAl2020', 'Mateo1996', 'EilamEtAl1999'],
    },
  },
];

export interface MapEdge {
  id: string;
  from: string;
  to: string;
  classes: EvidenceClass[];
  title: string;
  text: string;
  limit?: string;
  refs: string[];
  /** Optional hand-tuned SVG path; otherwise a smooth curve between node edges. */
  path?: string;
  /** Edges drawn from background anatomy rather than coded evidence. */
  anatomy?: boolean;
}

export const EDGES: MapEdge[] = [
  { id: 'cn-ic', from: 'cn', to: 'ic', classes: [], anatomy: true, title: 'Ascending auditory pathway', text: 'Brainstem nuclei project to the inferior colliculus. Neurons here represent frequency, loudness, and timing.', refs: [] },
  { id: 'ic-mgb', from: 'ic', to: 'mgb', classes: ['C3'], title: 'IC to auditory thalamus', text: 'In rats, lesions of the MGB or IC abolished the conditioned blood-pressure and freezing response to a tone paired with shock; cortex lesions left it intact.', limit: 'Conditioned tone, not a natural call.', refs: ['LeDouxEtAl1984'] },
  { id: 'mgb-ac', from: 'mgb', to: 'ac', classes: [], anatomy: true, title: 'Thalamus to cortex', text: 'The standard ascending route from thalamus to auditory cortex.', refs: [] },
  { id: 'mgb-bla', from: 'mgb', to: 'bla', classes: ['C3', 'C2'], title: 'Thalamus to amygdala', text: 'Conditioning sharpens short-latency LA responses to a tone, and the dorsal MGB and LA were required for freezing to the silence that follows another rat’s freezing.', limit: 'The first result uses a conditioned tone; the second a natural sound that is not a vocalization.', refs: ['LeDouxEtAl1984', 'QuirkEtAl1995', 'PereiraEtAl2020'] },
  { id: 'ac-bla', from: 'ac', to: 'bla', classes: ['C2'], title: 'Cortex to amygdala', text: 'Freezing to movement-sound cessation also required a ventral area of auditory cortex and LA, an "auditory offset" pathway. Cortex was dispensable for the classic conditioned tone.', limit: 'One obligatory route should not be assumed for every danger cue.', refs: ['PereiraEtAl2020', 'LeDouxEtAl1984'] },
  { id: 'ac-ic', from: 'ac', to: 'ic', classes: ['C3'], title: 'Cortex to inferior colliculus', text: 'Auditory cortex neurons projecting to the IC can trigger flight when activated, and silencing them reduces sound-evoked flight.', limit: 'Synthetic sounds; shows the cortex can drive defense without first assigning learned meaning.', refs: ['XiongEtAl2015'], path: 'M 62,440 C 8,440 8,170 62,170' },
  { id: 'ic-pag', from: 'ic', to: 'pag', classes: ['C3'], title: 'IC to dorsal PAG', text: 'The IC targets of these cortical neurons project in turn to the dorsal PAG.', refs: ['XiongEtAl2015'] },
  { id: 'pag-escape', from: 'pag', to: 'escape', classes: ['C3'], title: 'PAG to escape', text: 'This descending route supports sound-evoked flight in mice.', refs: ['XiongEtAl2015'] },
  { id: 'cn-pnc', from: 'cn', to: 'pnc', classes: ['C3'], title: 'Startle pathway', text: 'A short pathway from cochlear root neurons to the PnC and on to spinal motor neurons produces the whole-body flinch within milliseconds.', limit: 'Shows a sound was loud and abrupt, not that it was recognized as dangerous.', refs: ['DavisEtAl1982', 'LeeEtAl1996'] },
  { id: 'pnc-startle', from: 'pnc', to: 'startle', classes: ['C3'], title: 'PnC to startle', text: 'Startle amplitude is modulated by state and learning, and fear-potentiated startle uses it as a probe.', refs: ['DavisEtAl1982', 'LeeEtAl1996'] },
  { id: 'bla-cea', from: 'bla', to: 'cea', classes: ['C3'], title: 'Association to selection', text: 'Association is linked to LA/BLA, where inputs from thalamus and cortex are strengthened; selection is linked to the CeA, where two inhibitory populations compete.', limit: 'Conditioned tones and noise.', refs: ['QuirkEtAl1995', 'TsvetkovEtAl2002', 'FadokEtAl2017'] },
  { id: 'cea-pag', from: 'cea', to: 'pag', classes: ['C3', 'C5'], title: 'CeA to ventrolateral PAG', text: 'Inhibitory CeA projections release PAG output neurons that drive medullary premotor targets to produce freezing.', limit: 'Defined with conditioned sounds and optogenetics. Not tested for natural calls, sciurid vigilance, or prairie-dog escape.', refs: ['TovoteEtAl2016'] },
  { id: 'pag-freeze', from: 'pag', to: 'freeze', classes: ['C3', 'C5'], title: 'PAG to freezing', text: 'The freezing pathway interacts with circuits for flight.', limit: 'Extension to natural alarm calls is conceptual.', refs: ['TovoteEtAl2016'] },
  { id: 'cea-freeze', from: 'cea', to: 'freeze', classes: ['C3', 'C5'], title: 'CeA population promoting freezing', text: 'Somatostatin-expressing CeA cells promote freezing and suppress the flight population.', limit: 'A candidate mechanism for natural calls, not a demonstrated alarm-call pathway.', refs: ['FadokEtAl2017'] },
  { id: 'cea-escape', from: 'cea', to: 'escape', classes: ['C3', 'C5'], title: 'CeA population promoting flight', text: 'CRF-expressing CeA cells promote flight; each population suppresses the other, a mechanism for switching between passive and active defense.', limit: 'A candidate mechanism for natural calls, not a demonstrated alarm-call pathway.', refs: ['FadokEtAl2017'] },
  { id: 'ac-sc', from: 'ac', to: 'sc', classes: ['C3', 'C5'], title: 'Cortex to colliculus and striatum', text: 'For sounds that grow louder, cortical projections to the tail of the striatum drive freezing and projections to the superior colliculus drive flight.', limit: 'Synthetic looming sounds; the architecture is the contribution.', refs: ['LiEtAl2021'] },
  { id: 'sc-freeze', from: 'sc', to: 'freeze', classes: ['C3'], title: 'Tail of striatum to freezing', text: 'The switch from freezing to flight tracks the different time courses of the two targets.', refs: ['LiEtAl2021'] },
  { id: 'sc-escape', from: 'sc', to: 'escape', classes: ['C3'], title: 'Colliculus to flight', text: 'Flight depended on projections to the superior colliculus.', refs: ['LiEtAl2021'] },
  { id: 'cea-aut', from: 'cea', to: 'aut', classes: ['C3'], title: 'CeA to autonomic targets', text: 'Different CeA targets carry the cardiovascular and behavioral parts of a learned response: lateral hypothalamus lesions spared freezing but disrupted the blood-pressure rise, and PAG lesions did the reverse.', limit: 'Tone-shock conditioning.', refs: ['LeDouxEtAl1988', 'IwataLeDoux1988'] },
  { id: 'aut-cardio', from: 'aut', to: 'cardio', classes: ['C3'], title: 'Autonomic output to heart and hormone', text: 'The same heart rate can hide different physiology: combined sympathetic and parasympathetic drive in conditioned rats, sympathetic drive alone in controls.', refs: ['IwataLeDoux1988', 'UlrichLaiHerman2009'] },
  { id: 'bla-disc', from: 'bla', to: 'disc', classes: ['C4'], title: 'Amygdala and call discrimination', text: 'Amygdala neurons respond differently to 22-kHz and 50-kHz calls in naive rats, yet matched tones reproduce most of the difference and the rats do not freeze.', limit: 'Frequency sensitivity is not knowledge of what a call means.', refs: ['ParsanaEtAl2012a'] },
  { id: 'mgb-freeze', from: 'mgb', to: 'freeze', classes: ['C1'], title: 'Auditory thalamus to freezing (22-kHz calls)', text: 'Rats froze selectively to a distressed partner’s 22-kHz calls only after prior shock experience, and this social transmission of fear required the auditory thalamus. Preventing the receiver from calling during its own shock did not abolish later freezing.', limit: 'Live sender, so multiple cues were available. The causal claim concerns thalamic integrity and prior experience, not a complete pathway through the amygdala.', refs: ['KimEtAl2010', 'CalubEtAl2018'], path: 'M 200,300 C 450,330 650,290 830,280' },
  { id: 'pfc-bla', from: 'pfc', to: 'bla', classes: ['C3'], title: 'Prefrontal and hippocampal control', text: 'Prelimbic cortex supports expression of conditioned fear, infralimbic cortex supports extinction, and dorsal hippocampal lesions sharpened discrimination.', limit: 'Conditioned tones; directly relevant to whether a new caller is treated like a known alarm.', refs: ['SierraMercadoEtAl2011', 'QuinnEtAl2009'], path: 'M 485,520 C 527,520 527,120 485,120' },
  { id: 'ac-pfc', from: 'ac', to: 'pfc', classes: ['C3'], title: 'Cortex to prelimbic cortex', text: 'Silencing auditory cortex input to prelimbic cortex, but not to BLA, made rats generalize fear to a new, safe tone.', refs: ['ConcinaEtAl2018'] },
  { id: 'bnst-freeze', from: 'bnst', to: 'freeze', classes: ['C3'], title: 'BNST and freezing', text: 'BNST was needed for freezing to threat cues that poorly predict when shock will arrive, which suggests a role in uncertainty.', limit: 'Not tested for alarm calls whose reliability varies.', refs: ['GoodeEtAl2019'] },
];

export function strongest(classes: EvidenceClass[]): ClassInfo | undefined {
  return CLASSES.find((c) => classes.includes(c.id));
}

/**
 * Line style for the map. Dual C3+C5 edges (conditioned causal work extended
 * conceptually to natural calls) draw as C5 so that class is visible; otherwise
 * the strongest class wins.
 */
export function displayClass(classes: EvidenceClass[]): ClassInfo | undefined {
  if (classes.includes('C3') && classes.includes('C5')) {
    return CLASSES.find((c) => c.id === 'C5');
  }
  return strongest(classes);
}
