# Literature Map

Working bridge between [`OUTLINE.md`](OUTLINE.md), the evidence reports, and the manuscript sections. Use it to decide what each section cites and why. Every entry has a matching BibTeX entry in `manuscript/refs/references.bib` under the same key.

## Sources

| Code | Source | Notes |
|---|---|---|
| E | [`EVIDENCE.pdf`](EVIDENCE.pdf) | Round one; laboratory-weighted evidence base. |
| S1 | [`LITERATURE_SUPP01.pdf`](LITERATURE_SUPP01.pdf) | Round two; field sciurid literature, functional framework, citation completion. |
| S2 | [`LITERATURE_SUPP02.pdf`](LITERATURE_SUPP02.pdf) | Round three; full-text checks of anchor papers, disconfirming-evidence search, search log. |
| O | Revised outline | Framework references added during the BES-oriented revision. |

All three reports were produced with AI research assistance. Tracking parameters in their URLs (`utm_source=chatgpt.com`) are not reproduced here.

## How to use this file

- **Keys** are the BibTeX keys: `Author2001`, `AuthorAuthor2001`, or `AuthorEtAl2001` (three or more authors), with `a`/`b` for collisions.
- **Citation details** for every entry were checked against Crossref and `references.bib` is generated from those records.
- **Full-text check** (index column) records whether the full article was read (by the round-three agent or, for the anchor papers, during drafting) and our takeaway confirmed: `confirmed`, `corrected` (takeaway below already revised), `partial`, `doubtful` (source may be the wrong paper), or **not checked**. A dash means the paper was not in the round-three check.
- **Evidence type:** `direct`, `mechanistic` (proximate mechanism, indirect for the ecological claim), `framework`, `review`, or `adjacent` (mention only; fails an inclusion rule).
- **Setting:** `lab`, `field`, or `semi` (semi-natural, or wild-caught animals tested in captivity).

## Master index

| Key | Citation | DOI | Species | Setting | Type | Sections | Source | Full-text check |
|---|---|---|---|---|---|---|---|---|
| Davis1970 | Davis 1970, *Journal of Comparative and Physiological Psychology* 72:177–192 | 10.1037/h0029472 | Rat | lab | direct | Q4, Q7 | E | confirmed |
| EvansHammond1983a | Evans & Hammond 1983, *Animal Learning & Behavior* 11:424–430 | 10.3758/bf03199797 | Rat | lab | direct | Q1, Q6, Q7 | E | confirmed |
| EvansHammond1983b | Evans & Hammond 1983, *Animal Learning & Behavior* 11:431–434 | 10.3758/bf03199798 | Rat | lab | direct | Q6 | E | — |
| YdenbergDill1986 | Ydenberg & Dill 1986, *Advances in the Study of Behavior* 16:229–249 | 10.1016/s0065-3454(08)60192-8 | — | — | framework | Intro, Q4 | O, S1 | — |
| DillHoutman1989 | Dill & Houtman 1989, *Canadian Journal of Zoology* 67:233–235 | 10.1139/z89-033 | Gray squirrel | field | direct (visual cue) | Intro, Q4 | S1 | — |
| Helfman1989 | Helfman 1989, *Behavioral Ecology and Sociobiology* 24:47–58 | 10.1007/bf00300117 | Damselfish (non-rodent) | field | framework | Intro, Q4 | O, S1 | — |
| HendrieNeill1991 | Hendrie & Neill 1991, *Neuroscience & Biobehavioral Reviews* 15:479–482 | 10.1016/s0149-7634(05)80135-6 | Mouse (DBA/2) | lab | direct | Q2 | E, S1 | confirmed |
| Mateo1996 | Mateo 1996, *Journal of Comparative Psychology* 110:115–124 | 10.1037/0735-7036.110.2.115 | Belding's ground squirrel | semi | direct | Q2 | E | — |
| BlumsteinArmitage1997 | Blumstein & Armitage 1997, *Animal Behaviour* 53:143–171 | 10.1006/anbe.1996.0285 | Yellow-bellied marmot | field | direct | Q1, Q4 | S2 | — |
| Hare1998 | Hare 1998, *Animal Behaviour* 55:451–460 | 10.1006/anbe.1997.0613 | Richardson's ground squirrel | field | direct | Q4, Q5, Q6 | E, S1 | corrected |
| HendrieEtAl1998 | Hendrie et al. 1998, *Journal of Zoology* 245:439–446 | 10.1111/j.1469-7998.1998.tb00118.x | Voles, dormice, jerboas, spiny mice | semi | direct | Q2 | E, S1 | — |
| Shriner1998 | Shriner 1998, *Animal Behaviour* 55:529–536 | 10.1006/anbe.1997.0623 | Yellow-bellied marmot, golden-mantled ground squirrel | field | direct | Q2, Q5 | E, S1 | — |
| EilamEtAl1999 | Eilam et al. 1999, *Animal Behaviour* 58:1085–1093 | 10.1006/anbe.1999.1224 | Voles, spiny mice | semi | direct | Q2, Q4 | E, S1 | — |
| LimaBednekoff1999 | Lima & Bednekoff 1999, *The American Naturalist* 153:649–659 | 10.1086/303202 | — | — | framework | Intro, Q7 | O, S1 | — |
| BaackSwitzer2000 | Baack & Switzer 2000, *Ethology* 106:1057–1066 | 10.1046/j.1439-0310.2000.00619.x | Eastern chipmunk | field | direct | Q4 | S1 | — |
| HareAtkins2001 | Hare & Atkins 2001, *Behavioral Ecology and Sociobiology* 51:108–112 | 10.1007/s002650100414 | Richardson's ground squirrel | field | direct | Q5, Q6 | E, S1 | confirmed |
| MongeauEtAl2003 | Mongeau et al. 2003, *The Journal of Neuroscience* 23:3855–3868 | 10.1523/jneurosci.23-09-03855.2003 | Mouse | lab | direct | Q4 (Q1 boundary case) | E, S1 | — |
| BlumsteinDaniel2004 | Blumstein & Daniel 2004, *Animal Behaviour* 68:1257–1265 | 10.1016/j.anbehav.2003.12.024 | Yellow-bellied marmot | field | direct | Q1, Q5, Q6 | S1 | confirmed |
| BlumsteinEtAl2004 | Blumstein et al. 2004, *Proceedings of the Royal Society of London. Series B: Biological Sciences* 271:1851–1857 | 10.1098/rspb.2004.2808 | Yellow-bellied marmot | field | direct | Q5 | O, S1 | corrected |
| Nesse2005 | Nesse 2005, *Evolution and Human Behavior* 26:88–105 | 10.1016/j.evolhumbehav.2004.08.002 | — | — | framework | Intro, Q2, Q5 | O, S1 | — |
| SloanEtAl2005 | Sloan et al. 2005, *Animal Behaviour* 70:937–944 | 10.1016/j.anbehav.2005.01.013 | Richardson's ground squirrel | field | direct | Q1, Q7 | S1 | — |
| Blumstein2006 | Blumstein 2006, *Ethology* 112:209–217 | 10.1111/j.1439-0310.2006.01209.x | — | — | framework | Intro, Q2 | O, S1 | — |
| KiriazisSlobodchikoff2006 | Kiriazis & Slobodchikoff 2006, *Behavioural Processes* 73:29–35 | 10.1016/j.beproc.2006.01.015 | Gunnison's prairie dog | field | direct | Q1, Q4 | S1 | confirmed |
| SloanHare2006 | Sloan & Hare 2006, *Ethology* 112:896–902 | 10.1111/j.1439-0310.2006.01235.x | Richardson's ground squirrel | field | direct | Q1, Q7 | S1 | — |
| EndresEtAl2007 | Endres et al. 2007, *Behavioural Brain Research* 185:69–75 | 10.1016/j.bbr.2007.07.012 | Rat | lab | direct | Q2 | E, S1 | confirmed |
| HerryEtAl2007 | Herry et al. 2007, *The Journal of Neuroscience* 27:5958–5966 | 10.1523/jneurosci.5218-06.2007 | Mouse (and human) | lab | direct | Q7 | E | corrected |
| WohrSchwarting2007 | Wöhr & Schwarting 2007, *PLoS ONE* 2:e1365 | 10.1371/journal.pone.0001365 | Rat | lab | direct | Q1 | E, S1 | confirmed |
| SadanandaEtAl2008 | Sadananda et al. 2008, *Neuroscience Letters* 435:17–23 | 10.1016/j.neulet.2008.02.002 | Rat | lab | mechanistic | Q3 | E | — |
| SchmidtEtAl2008 | Schmidt et al. 2008, *Behavioral Ecology* 19:759–763 | 10.1093/beheco/arn034 | Eastern chipmunk | field | direct | Q1, Q2 | S1 | — |
| SwanHare2008 | Swan & Hare 2008, *Animal Behaviour* 76:47–54 | 10.1016/j.anbehav.2007.11.008 | Richardson's ground squirrel | field | direct | Q1 | E, S1 | — |
| BlumsteinRecapet2009 | Blumstein & Récapet 2009, *Ethology* 115:1074–1081 | 10.1111/j.1439-0310.2009.01691.x | Yellow-bellied marmot | field | direct | Q1, Q4, Q6 | S2 | — |
| KindermannEtAl2009 | Kindermann et al. 2009, *Journal of Experimental Biology* 212:506–513 | 10.1242/jeb.024174 | Mouse, rat, gerbil | lab | direct | Q2 | E, S1 | confirmed |
| RankinEtAl2009 | Rankin et al. 2009, *Neurobiology of Learning and Memory* 92:135–138 | 10.1016/j.nlm.2008.09.012 | — | — | framework | Q6, synthesis | E | — |
| KimEtAl2010 | Kim et al. 2010, *PLoS ONE* 5:e15077 | 10.1371/journal.pone.0015077 | Rat | lab | direct | Q2, Q4, Q5 | E, S1 | confirmed |
| Mateo2010 | Mateo 2010, *Biology Letters* 6:623–625 | 10.1098/rsbl.2010.0118 | Belding's ground squirrel | semi | direct | Q2, Q4 | E | — |
| AschemeierMaher2011 | Aschemeier & Maher 2011, *Journal of Mammalogy* 92:493–499 | 10.1644/09-mamm-a-322.1 | Woodchuck, eastern chipmunk | field | direct | Q2 | S1 | — |
| HareWarkentin2012 | Hare & Warkentin 2012, *Current Zoology* 58:773–780 | 10.1093/czoolo/58.5.773 | Richardson's ground squirrel | field | direct | Q5 | E | — |
| ParsanaEtAl2012a | Parsana et al. 2012, *Behavioural Brain Research* 226:77–86 | 10.1016/j.bbr.2011.08.040 | Rat | lab | mechanistic | Q2, Q3, Q4 | E | corrected |
| ParsanaEtAl2012b | Parsana et al. 2012, *Behavioural Brain Research* 232:395–399 | 10.1016/j.bbr.2012.03.031 | Rat | lab | direct | Q2, Q5 | E | — |
| GetschowEtAl2013 | Getschow et al. 2013, *Ethology* 119:983–992 | 10.1111/eth.12145 | Eastern gray squirrel | field | direct | Q2 | S1 | corrected |
| WilluhnEtAl2014 | Willuhn et al. 2014, *Journal of Neuroscience* 34:10616–10623 | 10.1523/jneurosci.1060-14.2014 | Rat | lab | direct | Q1, Q3, Q6 | E | confirmed |
| JayneEtAl2015 | Jayne et al. 2015, *Behavioural Processes* 116:53–61 | 10.1016/j.beproc.2015.05.002 | Eastern gray squirrel | field | direct | Q4 | S2 | — |
| MagrathEtAl2015 | Magrath et al. 2015, *Biological Reviews* 90:560–586 | 10.1111/brv.12122 | — | — | review | Intro, Q2 | O, S1 | — |
| GeisslerEtAl2016 | Geissler et al. 2016, *Frontiers in Neuroscience* 10 | 10.3389/fnins.2016.00098 | Mouse | lab | mechanistic | Q3 | E | — |
| CalubEtAl2018 | Calub et al. 2018, *Physiology & Behavior* 194:380–386 | 10.1016/j.physbeh.2018.06.029 | Rat | lab | direct | Q2, Q5 | E, S1 | confirmed |
| MoriyaEtAl2018 | Moriya et al. 2018, *Neuroscience* 386:16–23 | 10.1016/j.neuroscience.2018.06.027 | Mouse | lab | mechanistic | Q3 | E | — |
| LillyEtAl2019 | Lilly et al. 2019, *PLOS ONE* 14:e0221279 | 10.1371/journal.pone.0221279 | Eastern gray squirrel | field | direct | Q2, Q5 | S1 | — |
| FreemanEtAl2020 | Freeman et al. 2020, *Brain and Behavior* 10:e01629 | 10.1002/brb3.1629 | Richardson's ground squirrel | semi | mechanistic | Q3 | E | corrected |
| OlszynskiEtAl2020 | Olszyński et al. 2020, *iScience* 23:101577 | 10.1016/j.isci.2020.101577 | Rat | lab | direct | Q1, Q4 | E | confirmed |
| SchiavoEtAl2020 | Schiavo et al. 2020, *Nature* 587:426–431 | 10.1038/s41586-020-2807-6 | Mouse | lab | mechanistic | Q1, Q2, Q5 | E, S1 | confirmed |
| TasakaEtAl2020 | Tasaka et al. 2020, *Neuron* 107:566–579.e7 | 10.1016/j.neuron.2020.05.004 | Mouse | lab | mechanistic | Q2, Q3 | E, S1 | — |
| ValdesBaizabalEtAl2020 | Valdés-Baizabal et al. 2020, *PLOS Biology* 18:e3000744 | 10.1371/journal.pbio.3000744 | Rodent (confirm species) | lab | mechanistic | Q3, Q7 | E | — |
| WatermanMai2020 | Waterman & Mai 2020, *Ethology* 126:1122–1130 | 10.1111/eth.13092 | Cape ground squirrel | field | direct | Q2 | S1 | — |
| HernandezEtAl2021 | Hernández et al. 2021, *Animals* 11:428 | 10.3390/ani11020428 | *Abrothrix*, *Oligoryzomys*, *Rattus rattus* | field | direct | Q2, Q4 | E, S1 | — |
| KittendorfDantzer2021 | Kittendorf & Dantzer 2021, *Ethology* 127:697–709 | 10.1111/eth.13206 | Fox squirrel | field | adjacent (sound plus human approach) | Q4 (mention only) | S2 | — |
| VielleEtAl2021 | Vielle et al. 2021, *Proceedings of the Royal Society B: Biological Sciences* 288:20212260 | 10.1098/rspb.2021.2260 | Rat | lab | direct | Q1, Q5 | S2 | confirmed |
| BerzEtAl2022 | Berz et al. 2022, *Brain Sciences* 12:1474 | 10.3390/brainsci12111474 | Rat | lab | direct | Q5, Q6 | S2 | confirmed |
| ChenEtAl2022 | Chen et al. 2022, *Nature Communications* 13:5942 | 10.1038/s41467-022-33747-2 | Mouse | lab | mechanistic | Q3 | E | — |
| GoedhoopEtAl2022 | Goedhoop et al. 2022, *eLife* 11:e82711 | 10.7554/elife.82711 | Rat | lab | mechanistic | Q3, Q7 | E, S1 | confirmed |
| NardociEtAl2022 | Nardoci et al. 2022, *eneuro* 9:ENEURO.0201–22.2022 | 10.1523/eneuro.0201-22.2022 | Mouse | lab | mechanistic | Q3 | E | — |
| BonautoEtAl2023 | Bonauto et al. 2023, *Neuroscience & Biobehavioral Reviews* 153:105396 | 10.1016/j.neubiorev.2023.105396 | Rat | — | review | Q2, Q3 | E | — |
| GreenstreetEtAl2025 | Greenstreet et al. 2025, *Nature* 643:1333–1342 | 10.1038/s41586-025-09008-9 | Mouse | lab | mechanistic | Q3 | E, S1 | — |
| KutluEtAl2025 | Kutlu et al. 2025, *eneuro* 12:ENEURO.0358–25.2025 | 10.1523/eneuro.0358-25.2025 | Rodent (confirm species) | lab | mechanistic | Q3, Q7 | E, S1 | — |
| WarrenEtAl2025 | Warren et al. 2025, *iScience* 28:111796 | 10.1016/j.isci.2025.111796 | Prairie vole | lab | direct | Q1, Q5 | S2 | — |
| FuruyamaEtAl2026 | Furuyama et al. 2026, *iScience* 29:115789 | 10.1016/j.isci.2026.115789 | Mouse | lab | mechanistic | Q3 | E | confirmed |
| SolajaGustison2026 | Solaja & Gustison 2026, *Behavioural Brain Research* 517:116485 | 10.1016/j.bbr.2026.116485 | — | — | review | Intro (scope) | O, E, S1 | — |

## Introduction

### Functional framework

| Key | Role |
|---|---|
| Nesse2005 | When defenses are cheap and failing to respond is catastrophic, the optimal threshold produces many false alarms. Explains apparently "overreactive" receivers; does not predict which acoustic features are privileged. |
| YdenbergDill1986 | Escape begins when the rising cost of staying exceeds the cost of fleeing. |
| DillHoutman1989 | Rodent application: gray squirrels farther from refuge fled at greater distances. Visual predator model, so it belongs in the conceptual introduction, not the acoustic evidence. |
| Helfman1989 | Avoidance scales with threat magnitude (damselfish). Published in *Behav Ecol Sociobiol*. Rodent acoustic analogues: graded call features in Richardson's ground squirrels (SloanEtAl2005, SwanHare2008), urgency coding in marmots (BlumsteinArmitage1997), and predator-specific escape in prairie dogs (KiriazisSlobodchikoff2006). |
| LimaBednekoff1999 | Antipredator effort should concentrate in brief, rare high-risk periods. No rodent acoustic experiment has implemented the full risk-allocation design; say so explicitly. |
| MagrathEtAl2015 | Eavesdropping can rest on unlearned acoustic generalization or on learning; evidence for learning was then often indirect. Rodent studies in Q2 now add strong field examples. |
| Blumstein2006 | Antipredator traits can persist after loss of one predator if others maintain the same defenses. No rodent acoustic test comparing predator-free and predator-exposed populations was found; use as framing only. |

### Scope and positioning

- **SolajaGustison2026** — recent review of rodent vocalization production; cite to show the overlap we avoid. Online first 2026, print issue 2027; title uses "functions" and "mechanisms" (plural).
- **BonautoEtAl2023** — 22-kHz playback as a translational assay; shows how developed, and how rat-focused, the laboratory literature is.

### Central claim

> Acoustic meaning is not a fixed property of a waveform. It emerges from an interaction among signal structure, receiver predispositions, prior experience, source identity and reliability, environmental state, and the temporal history of exposure.

Pair this with the functional framing: selection should shape *when* receivers build and revise that meaning.

### Organizing distinction (new in round three)

Experiments probe at least four separable levels, which can dissociate:

1. **Acoustic detection** — sensitivity to features (frequency band, modulation, timing).
2. **Biological interpretation** — innate or acquired meaning of the sound.
3. **Action selection** — which overt response, if any, is expressed.
4. **Updating** — how responses change with repetition, reliability, and timing.

Dissociations that justify the distinction: amygdala neurons separate call types without freezing, and frequency-matched tones reproduce most of that separation (ParsanaEtAl2012a); spiny mice show endocrine but not behavioral responses to owl calls (EilamEtAl1999); chirps *reduced* c-Fos in two regions of a field species (FreemanEtAl2020). This distinction is the review's main conceptual tool across Q1–Q7.

## Part I — Recognition and ecological meaning

### Q1. What makes an acoustic stimulus biologically meaningful?

| Key | Role | Takeaway |
|---|---|---|
| WilluhnEtAl2014 | Anchor (valence contrast) | n=12 rats, ~69 dB. Natural 50-kHz calls evoked approach and nucleus accumbens dopamine; 22-kHz calls and time- and amplitude-matched noise did not. Natural and control stimuli still differ in fine spectrotemporal structure. |
| WohrSchwarting2007 | Counterweight | Natural calls and sine-wave approximations both induced approach, especially in adults; amplitude and frequency modulation were not necessary. Juvenile responses differed quantitatively, so do not call the stimuli "equivalent." |
| SchiavoEtAl2020 | Counterweight | Mouse pup calls cluster near a ~175-ms inter-syllable interval; experience broadened and shifted tuning to synthetic temporal morphs. Shows an intrinsic bias plus plasticity *within the maternal-recognition system*, not a general template. |
| OlszynskiEtAl2020 | Supporting | Natural calls usually produced larger vocal, cardiac, and locomotor responses than matched tones (paired n=30, single n=31), but the authors stress broadly similar directional effects; single housing enlarged several effects. |
| ParsanaEtAl2012a | Counterweight | Frequency-matched tones reproduced most amygdala firing differences between natural call types: the neural distinction is largely a frequency code, not a natural-call code. |
| BlumsteinArmitage1997 | Field anchor | Marmot calls did not map onto predator species; call rate and some acoustic parameters tracked risk, and receivers used call rate as risk information. Clean case of urgency coding rather than predator labels. |
| BlumsteinRecapet2009 | Field | Adding noisy nonlinear components to marmot alarm calls reduced subsequent foraging: specific acoustic features raise responsiveness. |
| SwanHare2008 | Field anchor | Primary syllables of repeated Richardson's ground squirrel calls have especially strong alerting effects. |
| SloanEtAl2005 | Field anchor | Chirps, whistles, and chucks carry different information and alter vigilance differently. |
| KiriazisSlobodchikoff2006 | Field anchor | Gunnison's prairie dogs (two colonies): 11-s playbacks of alarm calls elicited by humans, dogs, or coyotes (45 dB at 50 m; rubber-toy control matched in rhythm, frequency range, and amplitude) reproduced the escape responses to the live predators. Hawk calls were not played back. Wording: calls carry information sufficient for predator-specific escape, not lexical labels (the authors call it referential). |
| VielleEtAl2021, WarrenEtAl2025 | Supporting | Caller identity is carried by rat 50-kHz calls and prairie vole calls (details in Q5). |
| BlumsteinDaniel2004 | Field | Marmots responded more to juvenile than adult-female calls: caller class carries meaning. Caller familiarity had no effect (Z = −0.30, p = .767). |
| SchmidtEtAl2008 | Caution | Chipmunks changed foraging more to titmouse mobbing calls than to hawk calls: an indirect social cue can outweigh a direct predator sound, so relevance cannot be ranked by source alone. |
| EvansHammond1983a | Caveat | Natural distress squeal exceeded the mimic at 100 dB but not 80 dB: significance interacts with intensity. |
| MongeauEtAl2003 | Boundary case | Stimulus was a standardized synthetic sweep (17–20 kHz FM, 85 dB), not a natural call, and acoustic structure was not compared. Cite in Q4 for context-dependent defense; in Q1 only as an example of a non-vocal aversive sound. |

**Evidence status:** Natural calls often outperform matched controls, but naturalness is neither necessary nor sufficient, and "natural" is not a single causal variable. Frame Q1 around which acoustic dimensions carry information for the receiver; field data show urgency and caller identity are among them.

**Gap:** Acoustically matched synthetic-versus-natural comparisons in field species.

### Q2. Are responses innate or learned?

| Key | Role | Takeaway |
|---|---|---|
| HendrieNeill1991 | Conflict (positive) | Male DBA/2 mice (n=10 per group, calls at 60–70 dB after a human-voice baseline): barn and tawny owl calls increased self-oriented, call-oriented, and defensive behavior, and the tawny owl call roughly halved food intake. Kestrel and gull calls also increased defense; the authors attribute the gull effect to attention. Kindermann et al. note that the same group later found no fear in untreated DBA/2 mice. The strongest challenge to a universal "no innate recognition" claim, but a fragile one. |
| KindermannEtAl2009 | Conflict (negative) | Predator-naïve C57BL/6J mice, Sprague-Dawley rats, and pallid gerbils (calls at 70–80 dB) showed no defense to owl or raptor calls versus non-predator calls, with power to detect a 12% change in freezing. In rats, all calls were conditionable with no predator advantage; one-trial conditioning occurred only for tawny owl, goshawk, and mallard. Different mouse strain from Hendrie & Neill: present a strain, species, and paradigm discrepancy. |
| HendrieEtAl1998 | Field-experienced contrast | Wild voles, dormice, and jerboas changed behavior to owl calls; spiny mice responded less. |
| EilamEtAl1999 | Field-experienced contrast | Voles froze or fled and raised corticosterone; spiny mice raised cortisol with no detectable behavioral change. Receiver ecology changes which endpoint is expressed. |
| HernandezEtAl2021 | Field contrast | Free-living rodents changed feeding, movement, and vigilance in predator- and species-specific ways; moonlight and cover also mattered. |
| EndresEtAl2007 | Supporting | 59 rats. Naïve rats showed no call-specific defense to natural 22-kHz calls; pooled 22-kHz-range stimuli increased freezing. Preparedness lies in the persistence of learned 22-kHz fear, not in faster acquisition. |
| ParsanaEtAl2012a | Supporting | Naïve rats did not freeze to 22-kHz calls, yet amygdala firing differed between call types (largely reproduced by tones). |
| KimEtAl2010 | Anchor (rat) | 22-kHz calls from a distressed partner caused freezing only in receivers with prior aversive experience; auditory thalamus required. The sender showed a range of fear behaviors, so calls were not isolated from other cues. |
| ParsanaEtAl2012b | Superseded mechanism | Proposed autoconditioning (rats learn from their own 22-kHz calls). |
| CalubEtAl2018 | Correction | Recurrent laryngeal nerve transection prevented self-vocalization during shock, yet later call-evoked freezing remained: experience dependence is robust, strict autoconditioning is not. |
| Mateo1996 | Developmental | Juvenile Belding's ground squirrels discriminate alarm calls by heart rate before behavioral discrimination matures. |
| Mateo2010 | Supporting | Terrestrial-predator trills raised cortisol; aerial-predator whistles were linked to slowed heart rate. |
| Shriner1998 | Eavesdropping | Marmots and golden-mantled ground squirrels distinguished alarms from control birdsong and responded similarly to conspecific and heterospecific alarms. |
| AschemeierMaher2011 | Eavesdropping | Woodchucks increased vigilance to conspecific and heterospecific alarms, more strongly to conspecific; chipmunk data limited by sample size. |
| WatermanMai2020 | Eavesdropping | Cape ground squirrels were as vigilant to crowned-lapwing alarms as to conspecific alarms. |
| GetschowEtAl2013 | Eavesdropping (learning vs generalization) | Gray squirrels responded more to familiar robin alarms and acoustically similar unfamiliar blackbird alarms than to a dissimilar unfamiliar alarm (χ² = 19.68, p = .0014). Robin *song* was not distinguished from alarms, so the clean familiar-versus-unfamiliar contrast is weaker than first summarized. |
| SchmidtEtAl2008 | Eavesdropping | Chipmunks perceived higher predation risk under titmouse mobbing calls (giving-up densities). |
| LillyEtAl2019 | Safety information | After a hawk call, gray squirrels hearing ordinary bird chatter relaxed vigilance faster than with ambient noise: receivers use heterospecific *safety* cues too. |
| SchiavoEtAl2020, TasakaEtAl2020 | Mechanistic | Maternal experience calibrates cortical tuning to pup calls on top of intrinsic biases. |
| MagrathEtAl2015, Blumstein2006 | Framework | Eavesdropping; relaxed selection. |

**Evidence status:** Predator-call recognition in naïve lab rodents is a documented conflict (Hendrie positive, Kindermann negative), dependent on species, strain, and paradigm. Experience dependence of 22-kHz *freezing* is strong. Eavesdropping is well documented in sciurids, with both learning and acoustic generalization contributing. Working model: innate acoustic bias, then developmental and associative calibration, then ecological experience.

**Gap:** Population comparisons with and without a given predator (direct test of the multipredator hypothesis).

## Part II — Assessment and behavioral response

### Q3. What can neural measures reveal about how receivers assess a sound?

Keep short. Core citations are marked; optional ones support single sentences or can be dropped.

| Key | Priority | Takeaway |
|---|---|---|
| FuruyamaEtAl2026 | Core | Head-fixed mice, noise bursts 45–105 dB. The same noise lowered nucleus accumbens dopamine in all animals, and the decrease grew with intensity; 6 of 15 also showed an onset increase on the first burst (novelty); tail-of-striatum dopamine rose. Responses tracked ramped and damped intensity envelopes. Intensity scaling conflicts with GoedhoopEtAl2022 (freely moving rats); the authors note head fixation removes the option to escape. |
| WilluhnEtAl2014 | Core | Appetitive 50-kHz calls transiently raised accumbens dopamine; 22-kHz calls did not. |
| GoedhoopEtAl2022 | Core | Accumbens core dopamine fell during aversive noise and its predictive cue, tracking occurrence, prediction, and duration. It did not scale with noise intensity (70–96 dB; p = .88) even though behavior did: against a scalar aversive-value code. Unexpected noise slowed recovery. |
| ParsanaEtAl2012a | Core | Amygdala discrimination of call types without freezing (127 units); most of it reproduced by frequency-matched tones. |
| FreemanEtAl2020 | Core (field species) | Richardson's ground squirrels (n=29): chirp playback *reduced* c-Fos in medial amygdala and superior colliculus relative to no-call controls; most regions did not differ. Do not describe as "greater activation to high-threat calls." Behavior was constrained in the chamber. |
| SadanandaEtAl2008 | Optional | 50-kHz playback activated frontal cortex, accumbens, and thalamus; 22-kHz playback preferentially activated perirhinal cortex, amygdala, and periaqueductal gray. |
| MoriyaEtAl2018 | Optional | VTA dopamine neurons responded transiently to acute aversive stimuli, including ultrasound; not evidence of a fear code. |
| KutluEtAl2025 | Optional | Novelty altered accumbens dopamine responses to aversive stimuli over windows extending beyond the novel event. |
| GeisslerEtAl2016, TasakaEtAl2020 | Optional | Cortical representation of calls depends on state and experience. |
| GreenstreetEtAl2025 | Background | Tail-striatum dopamine encoded value-free action prediction errors during auditory learning. |
| ChenEtAl2022, NardociEtAl2022 | Background | Tail-striatum dopamine and neurons in auditory discrimination. |
| ValdesBaizabalEtAl2020 | Background | Dopamine modulates subcortical responses to surprising sounds. |
| BonautoEtAl2023 | Background | Review of 22-kHz playback neural and behavioral effects. |

**Evidence status:** Strong evidence against a single "dopamine means reward" or "dopamine means fear" reading, and for regional specialization. Neural discrimination can occur without behavior and need not be call-specific. Dopamine evidence for natural threat calls is sparse; most work uses noise, 50-kHz calls, or non-acoustic aversive stimuli.

### Q4. What determines orienting, vigilance, freezing, flight, or approach?

| Key | Role | Takeaway |
|---|---|---|
| MongeauEtAl2003 | Anchor (lab) | Mice heard trains of 17–20 kHz sweeps; home cage versus unfamiliar cage and prior foot shock shifted flight versus freezing. |
| KiriazisSlobodchikoff2006 | Anchor (field) | Different alarm-call categories evoke different escape actions: burrow diving (humans), running to the burrow and standing at the rim (coyotes), alert posture in place (dogs). |
| BaackSwitzer2000 | Anchor (field) | Chipmunk alarm calls increased vigilance, shortened the run to cover, delayed re-emergence, and reduced food intake. |
| JayneEtAl2015 | Field (escape economics) | Gray squirrel predator-call playback increased vigilance, suppressed foraging, and delayed its resumption; distance to refuge did not change across acoustic conditions. |
| BlumsteinArmitage1997, BlumsteinRecapet2009 | Field | Marmots scale responses to call rate and acoustic nonlinearity. |
| KittendorfDantzer2021 | Adjacent only | Fox squirrel playbacks were paired with an approaching human, so the acoustic effect cannot be isolated. Mention, do not use as evidence. |
| Davis1970 | Boundary | Acoustic startle is a reflex; not evidence of sustained threat assessment. |
| OlszynskiEtAl2020, KimEtAl2010, ParsanaEtAl2012a | Rat dissociations | 50-kHz approach versus 22-kHz slowing or freezing; no freezing does not mean no processing. |
| EilamEtAl1999, HernandezEtAl2021 | Field | Response type varies with species, predator, habitat, moonlight, and cover; physiology can respond without behavior. |
| Mateo2010 | Field physiology | Predator class maps onto different physiological strategies. |
| Hare1998 | Field vocabulary | Posture, vigilance duration, escape, and burrow entry, depending on caller and call structure. |
| YdenbergDill1986, Helfman1989, DillHoutman1989 | Framework | Cost-benefit, graded-risk, and refuge-distance predictions. |

**Evidence status:** Strong support for measuring several outcomes rather than freezing alone: short-latency orienting or startle, locomotion, approach or avoidance, vigilance, autonomic and endocrine measures, and recovery latency. Field studies supply the costs (lost food, delayed re-emergence) that laboratory assays lack.

**Gaps:** Flight initiation distance with acoustic-only cues (JayneEtAl2015 is the closest); state dependence of acoustic responses (hunger, body condition).

## Part III — Updating responses over time

### Q5. How do experience and signal reliability change meaning?

| Key | Role | Takeaway |
|---|---|---|
| HareAtkins2001 | Anchor | Juvenile females heard ten exemplars each of a reliable caller (paired with a stuffed badger) and an unreliable caller (no predator). Postural responses to the unreliable caller declined and differed from the reliable caller by the fifth (P = .014) and tenth playback (P = .007); vigilance duration showed only a trend (P = .075). Small samples (n = 9–18). Published in *Behav Ecol Sociobiol*. |
| BlumsteinEtAl2004 | Anchor (direction corrected) | Marmot responses depended on caller reliability, simulated distance, and number of callers. Marmots responded *more*, not less, to unreliable callers, apparently investing in independent assessment. Contrast with discounting in HareAtkins2001. |
| Hare1998 | Anchor | Juvenile females heard five calls about 3 min apart (each a repeated call of five chirps, 84–91 dB). Vigilance fell by the second call; a new exemplar from the same caller did not restore it, a different caller did. Neighbours' calls evoked longer vigilance than strangers' only as a trend (P = 0.06). |
| BlumsteinDaniel2004 | Supporting | Marmots habituated to repeated calls from one individual and recovered when caller identity changed; familiar and unfamiliar callers were treated alike. |
| HareWarkentin2012 | Nuance | No preference for the mother's or own-colony calls: discrimination does not mean every social category changes behavior. |
| VielleEtAl2021 | Lab rodent identity | Rats self-administered playback of stranger over cagemate 50-kHz calls, and only stranger calls reduced cocaine intake; subthalamic lesions abolished the effect. Stranger exemplars were partly repeated (author-acknowledged limitation). |
| WarrenEtAl2025 | Lab rodent identity | Female prairie voles discriminated partner from stranger male calls, even calls produced toward another female. |
| LillyEtAl2019 | Extension | Receivers also update on heterospecific safety cues. |
| KimEtAl2010, ParsanaEtAl2012b, CalubEtAl2018 | Lab parallel | Prior aversive experience makes 22-kHz calls consequential; mechanism unresolved. |
| SchiavoEtAl2020 | Lab parallel | Meaning acquired at the level of sensory coding. |
| Nesse2005 | Framework | When receivers should keep responding despite false alarms. |

**Evidence status:** Caller *identity* discrimination is now shown in sciurids, lab rats, and prairie voles. Caller *reliability* learning from acoustic signals remains a field-sciurid finding with no lab rat or mouse test, and its direction differs between systems (discounting in ground squirrels, heightened assessment in marmots). The bridge is reliability, not identity.

### Q6. Does ecological significance change habituation or recovery?

| Key | Role | Takeaway |
|---|---|---|
| EvansHammond1983a | Anchor | Male rats, orienting measured by lick suppression; mimic matched to the squeal's burst timing. All stimuli habituated. After 1- and 7-day rests, orienting recovered more to the 100-dB natural squeal (n = 120); 24-h spacing slowed habituation to it (n = 32). Lab rat orienting, not field alarm behavior. |
| EvansHammond1983b | Supporting | Generalization of habituation across contexts depended on stimulus significance. |
| Hare1998 | Field anchor | Identity-specific habituation: exemplar novelty was not enough, caller change was. |
| BlumsteinDaniel2004 | Field anchor | Habituation and recovery to caller identity in marmots (calls about one per 10 s). |
| BerzEtAl2022 | Counterexample | Rat approach to 50-kHz playback habituated even when playback predicted social interaction: significance does not automatically prevent habituation. |
| BlumsteinRecapet2009 | Interpretation only | Nonlinear components raise immediate responsiveness; the proposed anti-habituation function was not tested with repeated exposure. |
| HareAtkins2001 | Contrast | Decline can be informational discounting rather than habituation. |
| WilluhnEtAl2014 | Modern parallel | 50-kHz approach and dopamine declined rapidly (22-kHz dopamine was never elevated); design cannot separate habituation from falling motivation. |
| RankinEtAl2009 | Framework | Formal habituation criteria. |

**Evidence status:** Field evidence for stimulus-specific habituation and recovery is strong. Evidence that ecological significance changes habituation *rate* against an acoustically matched control rests on Evans & Hammond alone, and BerzEtAl2022 shows a meaningful social call habituating quickly. A falling response can reflect sensory habituation, learned unreliability, reduced motivation, or active prediction.

**Gap:** Natural-versus-matched-synthetic habituation comparisons, ideally in field rodents and with neural measures.

### Q7. How does temporal predictability influence responses?

| Key | Role | Takeaway |
|---|---|---|
| LimaBednekoff1999 | Framework (lead) | Risk allocation predictions; no rodent acoustic implementation exists. |
| BlumsteinArmitage1997, SloanEtAl2005, SwanHare2008 | Natural temporal structure | Call rate, repetition, and call structure alter vigilance. |
| SloanHare2006 | Age-dependent null | Adults ignored manipulated rate and bout length in juvenile calls, although juveniles use rate as an urgency cue: temporal structure is not decoded the same way across ages. |
| Davis1970 | Anchor (lab) | At the same 8-s mean interval, regular timing produced more startle habituation than variable timing (Exp II, n=144). In Exp I (n=72), 16-s spacing gave lower startle at retest than 2-s spacing: short- and long-term habituation differ. |
| HerryEtAl2007 | Anchor (lab) | Temporal jitter of neutral tone pulses (85 dB) prevented rapid basolateral amygdala habituation and produced avoidance. Two regimes: 5-Hz trains (interval SD 140 ms) for behavior and c-Fos; 0.7 Hz (mean 1429 ms, SD 1368 ms) for electrophysiology. Do not call the jitter uniform or exponential. Non-ecological stimuli. |
| GoedhoopEtAl2022 | Bridge | Predicted versus unpredicted noise changed dopamine recovery. |
| KutluEtAl2025 | Supporting | Novelty effects on dopamine persist beyond the current trial. |
| EvansHammond1983a | Supporting | Significance interacts with long spacing. |
| ValdesBaizabalEtAl2020 | Background | Dopamine and subcortical surprise responses. |

**Evidence status:** Unpredictable timing slows habituation for artificial sounds. Field evidence concerns call rate, repetition, sequence, identity, and reliability, not stochastic schedules. No study compares interval distributions with natural rodent calls; present Q7 as an open question.

## Integrative synthesis

- Organize the synthesis around the four levels (detection, interpretation, action selection, updating) and use the functional costs as the linking currency. Report E's hierarchical inference model maps onto these levels.
- Each exposure may update three quantities: expected timing, expected threat or reward value, and expected signal reliability. This is an inference across RankinEtAl2009, HerryEtAl2007, HareAtkins2001, and BlumsteinEtAl2004, not a demonstrated result.
- The reliability results point two ways (discounting versus more independent assessment). Treat this as a prediction question: when should unreliable information be ignored rather than checked?
- A draft equation framework (responsiveness as a function of acoustic evidence, meaning, context, reliability, habituation state, and temporal expectation) is in report E. Use it as a proposal only, possibly in a box or the supplement.

## Conclusion and future directions

Candidate experiments, each to be phrased as a testable hypothesis:

1. **Significance × schedule:** natural call, matched synthetic reconstruction, and broadband control under fixed, bounded-uniform, and exponential schedules; the key measure is the recovery function, not the first response (builds on EvansHammond1983a, BerzEtAl2022).
2. **Hazard function:** match event count and mean interval across fixed, uniform, and shifted-exponential timing (motivated by Davis1970 and HerryEtAl2007, which varied timing variability but not distribution shape).
3. **Caller reliability in lab rodents:** identity is already discriminated (VielleEtAl2021, WarrenEtAl2025); test whether rats or voles discount or scrutinize unreliable callers (builds on HareAtkins2001, BlumsteinEtAl2004).
4. **Accumbens versus tail-striatum dopamine with ecological calls:** dual-site recording during 22-kHz, 50-kHz, predator, synthetic, and noise stimuli (builds on FuruyamaEtAl2026, WilluhnEtAl2014).
5. **Risk allocation with acoustic cues:** vary the long-term probability structure of alarm playback in a field sciurid population (no existing implementation; LimaBednekoff1999).
6. **Field-to-lab translation:** reproduce field receiver computations (reliability, eavesdropping, safety cues, predator-specific physiology) in tractable lab species.

## Claim guardrails

Apply in every section:

| Do not claim | Say instead |
|---|---|
| Natural calls elicit stronger responses than synthetic ones. | Responses depend on which acoustic dimensions carry information for the receiver; naturalness is neither necessary nor sufficient (WohrSchwarting2007, SchiavoEtAl2020, ParsanaEtAl2012a). |
| Predator-naïve rodents do not recognize predator calls. | Evidence conflicts: positive in an inbred mouse strain (HendrieNeill1991), negative in mice, rats, and gerbils (KindermannEtAl2009); species, strain, and paradigm matter. |
| Naïve rats do not respond to 22-kHz calls. | Selective *freezing* depends on prior aversive experience; other effects (locomotor and cardiac slowing) occur without prior fear conditioning (OlszynskiEtAl2020). |
| Autoconditioning explains 22-kHz meaning. | Strict autoconditioning was rejected by CalubEtAl2018; experience dependence remains robust, mechanism unresolved. |
| Amygdala neurons encode natural call meaning. | They separate call types largely by frequency; matched tones reproduce most effects (ParsanaEtAl2012a). |
| High-threat calls activate more neurons. | Chirps reduced c-Fos in two regions in ground squirrels (FreemanEtAl2020). |
| Mongeau et al. compared acoustic structures. | They used one standardized 17–20 kHz sweep and manipulated context and prior experience. |
| Caller identity is a sciurid finding. | Identity discrimination is also shown in lab rats and prairie voles; *reliability* learning is shown only in sciurids. |
| Receivers ignore unreliable callers. | Ground squirrels discount them (HareAtkins2001); marmots respond more to them (BlumsteinEtAl2004). |
| Familiar callers are trusted more. | Familiarity had no effect in marmots (BlumsteinDaniel2004). |
| Ecological habituation evidence is thin. | Field habituation and identity-specific recovery are well documented; what is thin is evidence that significance changes habituation *rate* against matched controls. |
| Meaningful calls resist habituation. | Social 50-kHz calls habituate even when they predict interaction (BerzEtAl2022). |
| Herry et al. used uniform (or exponential) timing. | They used temporal jitter with two regimes (SD 140 ms at 5 Hz; SD 1368 ms at 0.7 Hz); the distribution shape is not the variable tested. |
| Davis shows longer intervals reduce habituation. | Regularity increased habituation at a matched mean interval; short- and long-term habituation respond differently. |
| A dopamine response indicates fear or reward. | Dopamine responses differ by region, timing, prediction, and valence. Whether accumbens dopamine scales with noise intensity depends on preparation: yes in head-fixed mice (FuruyamaEtAl2026), no in freely moving rats (GoedhoopEtAl2022). |
| Prairie dog calls label predators. | They carry information sufficient for predator-specific escape; marmot calls code urgency (BlumsteinArmitage1997). |
| Risk allocation has been shown in rodents with acoustic cues. | It has not been implemented with acoustic cues in rodents; use it as theory. |
| An optimal deterrent schedule exists. | Constant-hazard timing is theoretically motivated but untested with natural calls. |

## Documented gaps (content for the review)

Three search rounds found no rodent study of: risk allocation with acoustic cues; the multipredator hypothesis with acoustic cues; interval-distribution comparisons with natural calls; natural-versus-matched-synthetic habituation rates; caller-reliability learning in lab rodents; dopamine responses to natural threat calls. Present these as a review-search conclusion, not proof of absence.

Leads not added (no verified citation yet): a 2026 auditory-deviance study of accumbens dopamine (Q7); a 2026 accumbens D2-agonism escape study (Q3); Blumstein's 2025 synthesis of nonlinear phenomena in marmot calls (Q1, Q5); Grafelman et al. 2025, *Neuropsychopharmacology* 50:1376–1384, aversion-induced dopamine reductions (Q3 background).

## Must-haves before drafting

None outstanding. All anchor papers have now been checked against the full text (see the index's full-text-check column); details are in `manuscript/tables/evidence_matrix.csv`.

Deferred until a target journal is chosen: how to describe the search method (the three rounds used web search without database hit counts; a database strategy is proposed in S2, Task E).
