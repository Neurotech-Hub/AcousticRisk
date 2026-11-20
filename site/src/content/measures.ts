// Data for "Compare lab and field": what each study measured in each receiver,
// and in which direction it changed. A cell that a study did not report is left
// undefined and drawn as a gap. Directions follow the manuscript's wording
// (Sections 3 and 4 and Table 1); none of these are quantitative.

export type Setting = 'lab' | 'wild-lab' | 'field';

export const SETTINGS: Record<Setting, { label: string; note: string }> = {
  lab: { label: 'Laboratory', note: 'Laboratory strain. No food, refuge, or foraging cost at stake.' },
  'wild-lab': { label: 'Wild-caught, tested in the lab', note: 'Field experience, but tested in an enclosure.' },
  field: { label: 'Field', note: 'Free-living animals with real costs of responding.' },
};

export type ChannelId = 'defense' | 'vigilance' | 'foraging' | 'heart' | 'hormone' | 'neural';
export type ChannelGroup = 'behavior' | 'body';

export interface Channel {
  id: ChannelId;
  label: string;
  group: ChannelGroup;
}

export const CHANNELS: Channel[] = [
  { id: 'defense', label: 'Freezing or flight', group: 'behavior' },
  { id: 'vigilance', label: 'Vigilance', group: 'behavior' },
  { id: 'foraging', label: 'Movement and foraging', group: 'behavior' },
  { id: 'heart', label: 'Heart rate', group: 'body' },
  { id: 'hormone', label: 'Stress hormone', group: 'body' },
  { id: 'neural', label: 'Neural activity', group: 'body' },
];

export const GROUPS: Record<ChannelGroup, string> = { behavior: 'Behavior', body: 'Body' };

/** How a measured channel changed. */
export type Direction = 'up' | 'down' | 'differs' | 'none' | 'gated';

export const DIRECTIONS: Record<Direction, { glyph: string; label: string }> = {
  up: { glyph: '\u2191', label: 'increased' },
  down: { glyph: '\u2193', label: 'decreased' },
  differs: { glyph: '\u2260', label: 'differs by call type' },
  none: { glyph: '\u2205', label: 'measured, no change' },
  gated: { glyph: '\u25D0', label: 'only after experience' },
};

export interface Cell {
  dir: Direction;
  /** Short phrase shown in the cell. */
  text: string;
  refs: string[];
}

export interface Receiver {
  id: string;
  species: string;
  setting: Setting;
  sound: string;
  /** Portrait file in public/graphics/ (see site/GRAPHICS.md). */
  portrait?: string;
  cells: Partial<Record<ChannelId, Cell>>;
  title: string;
  finding: string;
  limit: string;
  refs: string[];
}

export const RECEIVERS: Receiver[] = [
  {
    id: 'rat',
    species: 'Laboratory rat',
    setting: 'lab',
    sound: 'Conspecific 22-kHz alarm call',
    portrait: 'species-rat.png',
    cells: {
      defense: { dir: 'gated', text: 'none when naive; freezes after shock experience', refs: ['OlszynskiEtAl2020', 'KimEtAl2010'] },
      foraging: { dir: 'down', text: 'locomotion slowed', refs: ['OlszynskiEtAl2020'] },
      heart: { dir: 'down', text: 'slowed', refs: ['OlszynskiEtAl2020'] },
      neural: { dir: 'differs', text: 'amygdala separates 22- and 50-kHz calls', refs: ['ParsanaEtAl2012a'] },
    },
    title: 'A laboratory rat hears a 22-kHz alarm call',
    finding:
      'Naive rats slow their movement and heart rate to natural 22-kHz calls, more than to matched tones, without selective freezing. Freezing appears only after aversive experience. Amygdala neurons separate the call types even in naive rats, largely by frequency.',
    limit:
      'Three studies pooled, none with food or refuge at stake. The neural difference is feature discrimination, not evidence that the calls carried different meaning.',
    refs: ['OlszynskiEtAl2020', 'KimEtAl2010', 'ParsanaEtAl2012a'],
  },
  {
    id: 'spiny-mouse',
    species: 'Spiny mouse',
    setting: 'wild-lab',
    sound: 'Owl calls',
    portrait: 'species-spinymouse.png',
    cells: {
      defense: { dir: 'none', text: 'none', refs: ['EilamEtAl1999'] },
      hormone: { dir: 'up', text: 'cortisol rose', refs: ['EilamEtAl1999'] },
    },
    title: 'A spiny mouse hears owl calls',
    finding: 'Cortisol rose, but there was no detectable freezing or flight. Scored on behavior alone, the spiny mouse would be called unresponsive.',
    limit: 'Behavior and hormone only. Which pathway produced the hormone change is not known.',
    refs: ['EilamEtAl1999'],
  },
  {
    id: 'vole',
    species: 'Vole',
    setting: 'wild-lab',
    sound: 'Owl calls',
    portrait: 'species-vole.png',
    cells: {
      defense: { dir: 'up', text: 'froze or fled', refs: ['EilamEtAl1999'] },
      hormone: { dir: 'up', text: 'cortisol rose', refs: ['EilamEtAl1999'] },
    },
    title: 'A vole hears the same owl calls',
    finding: 'Voles showed both: freezing or flight, and a rise in cortisol. Same sound, same hormone response, different behavior from the spiny mouse.',
    limit: 'Species differ in both experience and genetic background, so the comparison cannot separate the two.',
    refs: ['EilamEtAl1999'],
  },
  {
    id: 'ground-squirrel',
    species: 'Belding’s ground squirrel (juvenile)',
    setting: 'field',
    sound: 'Conspecific alarm calls (trills and whistles)',
    portrait: 'species-groundsquirrel.png',
    cells: {
      vigilance: { dir: 'differs', text: 'by call type, but later in development', refs: ['Mateo1996'] },
      heart: { dir: 'differs', text: 'by call type, before behavior; whistles slow it', refs: ['Mateo1996', 'Mateo2010'] },
      hormone: { dir: 'up', text: 'cortisol rose to trills', refs: ['Mateo2010'] },
    },
    title: 'A juvenile ground squirrel hears two kinds of alarm call',
    finding:
      'Heart rate discriminated alarm-call types before behavior did. Trills (terrestrial predators) raised cortisol; whistles (aerial predators) were linked to a slower heart. One of the few field-relevant receivers with physiology recorded.',
    limit: 'The manuscript marks these studies as not yet checked against the full text. Foraging costs were not measured.',
    refs: ['Mateo1996', 'Mateo2010'],
  },
  {
    id: 'chipmunk',
    species: 'Eastern chipmunk',
    setting: 'field',
    sound: 'Conspecific alarm-call playback',
    portrait: 'species-chipmunk.png',
    cells: {
      defense: { dir: 'up', text: 'shorter runs to cover; slower to re-emerge', refs: ['BaackSwitzer2000'] },
      vigilance: { dir: 'up', text: 'increased', refs: ['BaackSwitzer2000'] },
      foraging: { dir: 'down', text: 'intake fell', refs: ['BaackSwitzer2000'] },
    },
    title: 'A chipmunk hears alarm calls while foraging',
    finding:
      'Playback made chipmunks more vigilant, shortened their runs to cover, delayed re-emergence, and reduced intake. These are the costs that escape theory needs and that laboratory cages cannot supply.',
    limit: 'No physiological measure, so whether a chipmunk that kept feeding had registered the call cannot be known.',
    refs: ['BaackSwitzer2000'],
  },
  {
    id: 'gray-squirrel',
    species: 'Eastern gray squirrel',
    setting: 'field',
    sound: 'Predator-call playback during foraging',
    portrait: 'species-graysquirrel.png',
    cells: {
      vigilance: { dir: 'up', text: 'increased', refs: ['JayneEtAl2015'] },
      foraging: { dir: 'down', text: 'delayed and reduced; distance to refuge unchanged', refs: ['JayneEtAl2015'] },
    },
    title: 'A gray squirrel hears a predator call while foraging',
    finding:
      'Playback increased vigilance and suppressed and delayed foraging, but did not change how far the squirrels stayed from refuge. The cost showed up in lost feeding, not in where the animal stood.',
    limit:
      'No heart-rate or hormone measure, so recognition cannot be separated from the choice not to flee. The manuscript has not yet checked this study against the full text.',
    refs: ['JayneEtAl2015'],
  },
];

export const SOURCES = [...new Set(RECEIVERS.flatMap((r) => r.refs))];
