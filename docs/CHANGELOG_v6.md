# Change log — v5 → v6 (targeted revision)

Source: targeted revision specification. Seven-section architecture retained; no broad reorg.

## P0 — Computational design (§6)

- Expanded feature vector by timescale (within syllable / bout / sessions), with confound notes.
- Distinguished naturalistic resynthesis from optimization.
- Added worked hypothetical sciurid vigilance experiment (proposed, not reported).
- Added illustrative multi-objective \(J(\mathbf{x})\) with Pareto note; weights not empirical.
- Algorithm discussion: factorial/RSM vs sequential/Bayesian vs constrained generative; holdout/validation.
- Deployment limits: ACORN as example device capability only; ultrasonic vs audible hardware.

## P0 — Selection matrices (former cramped Table 2)

- Rebuilt as two landscape longtables: `tab:practical-lab`, `tab:practical-field`.
- Columns: species, outcome, stimulus/comparison, acoustic params (NR if missing), receiver, endpoint, status, citation.
- Status vocabulary: **positive / null / mixed / proposed** (replaces ambiguous “demonstrated” in the matrix).
- Added “How to interpret” paragraph (detection vs particular response vs lasting ecological impact).
- Updated `tables/practical_matrix.csv` to match.

## P1 — Mechanisms (§3)

- Added conceptual stages (at-ear → feature coding → valuation/state → action → ecology).
- Clarified what physiology adds to stimulus design; separated natural-playback, synthetic/other aversive, and indirect hypotheses.
- Expanded measurement-selection guide (variable, timescale, warranted claim, overinterpretation).
- Updated Figure 3 caption and artwork.

## P1 — Attraction / predator scope (§4)

- Explicit rodent-receiver attraction paragraph (rat 50-kHz); not sciurid field attraction.
- Scope note: predator calls for prey ≠ prey calls for predators; latter out of scope.
- Optimization targets (attraction vs vigilance vs escape vs deterrence) not interchangeable.

## P1 — Figures 1–4

- Replaced gray placeholders with readable schematics (`scripts/make_figures.py`).
- Fig 1: outcome-first workflow + redesign loop + claim types.
- Fig 2: reference + FM/AM/NL/rate/schedule panels + feature→outcome inset (illustrative, not recordings).
- Fig 3: stages, readouts, dissociations, design uses.
- Fig 4: durability panels with measured-vs-hypothesis labeling.

## P1 — Supplementary matrix

- Legacy **Q** column recoded to **Sec.** (S2–S6) in `evidence_matrix.csv`.
- Regenerated `supplement/table_evidence_matrix.tex` via `scripts/make_table.py`.

## P2 — Synthesis experiments (§7)

- Sharpened Experiment 1 into optimization + held-out confirmatory test against best natural comparator.
- Explicit competing explanations, physiology optional, null informative.

## Evidence discipline

- No invented SPL, effect sizes, or sample sizes; NR where unreported.
- No new unverified bibliography entries for this pass.
- Existing `% VERIFY` markers retained where full text was not re-checked.

## Still deferred

- Journal search-method disclosure; COI/AI disclosure sentences.
- Resolving remaining `% VERIFY` markers against full texts.
- Vector redraw of figures for final journal submission (current PNGs are submission-ready schematics, not gray boxes).
