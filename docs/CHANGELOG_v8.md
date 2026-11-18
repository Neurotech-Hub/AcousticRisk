# Change log — v7 → v8 (physiology literature integration)

Source: `SoundDanger_v7_Physiology_Literature_Integration_Spec.md` + `docs/LITERATURE_SUPP03.pdf` (literature map).

## Direction preserved

- Scholarly review identity retained (no playback recipes, optimization, ACORN, or design pipelines).
- Seven-section storyline unchanged; §3 expanded as the main scientific addition.

## Section 3 rewrite

Retitled **From acoustic information to neural and physiological responses** with six subsections:

1. Auditory pathways and access to defensive systems  
2. Amygdala circuitry for learned significance and response selection  
3. Midbrain and brainstem: startle, freezing, and escape  
4. Autonomic and endocrine channels and extended amygdala  
5. Context, learning, and neuromodulatory state  
6. What has been demonstrated with natural acoustic signals?

Plain-language framing for mixed neuroscience / field-biology readers; stimulus class and causal-vs-correlational limits stated throughout.

## New references (by subsection)

| Key | Primary placement | Stimulus class |
|---|---|---|
| LeDouxEtAl1984 | §3.1 | C conditioned acoustic |
| QuirkEtAl1995; TsvetkovEtAl2002 | §3.1–3.2 | C |
| PereiraEtAl2020 | §3.1, §3.6 | B natural non-vocal acoustic |
| FadokEtAl2017; TovoteEtAl2016 | §3.2–3.3 | C |
| DavisEtAl1982; LeeEtAl1996 | §3.3 | C / reflex |
| XiongEtAl2015; LiEtAl2021 | §3.3 | C synthetic / loud sound / looming |
| LeDouxEtAl1988 | §3.4 | C |
| GoodeEtAl2019 | §3.4 | C unpredictable threat |
| DemaestriEtAl2019; GranataEtAl2024; OudaEtAl2016 | §3.4–3.6 | A natural USV (correlational) |
| MarlinEtAl2015 | §3.5 | A natural social (non-threat) |
| DuanEtAl2025 | §3.5 | C conditioned auditory |
| Fanselow1994 | §3.3 / §4 | Theory |

Retained Tier A anchors already in v7 (Kim, Parsana, Sadananda, Olszyński, Mateo, Eilam, Willuhn, Freeman, etc.).

## Outside §3 (minimal)

- Abstract: one clause on parallel pathways and direct vs extrapolated evidence.
- Intro / §2 / §4 / §5 / §6 / §7.2: targeted bridges only; §7.2 reframed to natural-signal→circuit gap.
- Table 1: two added comparison rows (natural non-vocal cue; conditioned vs natural inference).
- Supplementary matrix: new studies added; caption/section codes now use S6 = integrated account (was “design”); S4 labeled as action.

## Figures

- Removed `scripts/make_figures.py` and `scripts/make_placeholders.py`.
- Figures 1–4 now use LaTeX `\figplaceholder` boxes + captions only (no generated artwork).
- Figure 3 caption rewritten for parallel-pathway schematic with evidence-class legend.

## Unresolved / flagged

- `% VERIFY` retained for Mateo 1996/2010 and selected field papers not re-checked in this pass.
- DuanEtAl2025 cited as conditioned acoustic LC/NE integration; full methods skimmed via secondary sources—treat as verified at abstract/methods summary level.
- Cao et al. 2026 (IC shell→dPAG) **not cited** pending stronger primary confirmation (per spec).
- Fanselow citation set to 1994 Psychonomic Bulletin & Review (PMID 24203551), not a 2018 COBS note.
- Legacy PNG placeholder files under `manuscript/figures/` are unused by the build after the LaTeX-box switch.
