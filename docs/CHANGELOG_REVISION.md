# Change log — danger recognition → stimulus design revision

Source of architectural requirements: revision specification (round 4). Prior outline archived as [`OUTLINE_v1_danger.md`](OUTLINE_v1_danger.md). Prior section drafts archived under `manuscript/sections/_archive_v1/`.

## Retained (remapped)

- Core empirical claims and citations from v1 Q1–Q7 (naturalness limits; 22-kHz experience dependence; predator-call conflict; DA region/preparation limits; sciurid rate/identity/reliability; Evans/Berz habituation; Davis/Herry timing; foraging costs).
- Claim guardrails from [`LITERATURE_MAP.md`](LITERATURE_MAP.md).
- Study-level evidence matrix (now Supplementary Table; label `tab:evidence-supp`).
- Bibliography (`manuscript/refs/references.bib`); no unverified new entries added for this revision.
- `% VERIFY` discipline for papers not full-text confirmed.

## Moved

| v1 location | New location |
|---|---|
| Q1 biological meaning | §2 Acoustic features |
| Q2 innate vs learned | §2 (learning/hearing subsection) + §4 selection shortlists |
| Q3 neural encoding | §3 Mechanisms / neural subsection |
| Q4 behavioral expression | §3 Mechanisms / behavior + §4 selection |
| Q5 reliability | §5 Persistence (condensed) |
| Q6 habituation | §5 Persistence (condensed) |
| Q7 temporal expectation | §5 Persistence (condensed) |
| Synthesis four-level model | Intro outcomes + §3 ladder + §7 decision framework |
| Conclusion experiments | §7 Priority experiments (reframed) |
| Main-text Table 1 (study matrix) | Supplement |
| Working summary tables Q1–Q7 | Consolidated into Table 1 (practical) + Table 2 (features) |

## Condensed

- Three updating sections (Q5–Q7) → one persistence section.
- Nine per-question working summary tables → two principal tables.
- Long theoretical restatements of risk allocation / economics of escape → brief framing in intro with cross-refs.

## Newly added

- Outcome-first central question and thesis (efficacy vs mechanism vs ecology).
- Major §4 stimulus-selection shortlists (lab/field by desired outcome) with calibrated language.
- Entirely new §6 computational design pipeline, objectives, conceptual algorithms, ACORN application note.
- Table 1 practical evidence matrix (`tables/table_practical.tex` + `practical_matrix.csv`).
- Table 2 feature/control checklist (`tables/table_features.tex`).
- Figures 3–4 placeholders (ladder; design space); Fig 1 retitled as outcome-first framework.
- [`docs/EVIDENCE_GAPS.md`](EVIDENCE_GAPS.md).
- New abstract (200–250 words) and keywords; new title.

## Removed / retired from main flow

- Danger-first title and Q1–Q7 question architecture.
- Active `01_q1_…` through `09_conclusion.tex` section files (archived, not compiled).
- Draft lead-ins (“for later condensation or figure drafting”) from v1 summary tables (tables themselves no longer `\input` in main text).
- Product-oriented framing; ACORN limited to a brief framework application.

## Still deferred

- Journal-specific search-method disclosure (databases/strings/counts).
- Competing-interest / AI-tools disclosure sentences for target journal.
- Resolving open `% VERIFY` markers against full texts.
- Final journal vector art (v6 replaced gray placeholders with PNG schematics; see [`CHANGELOG_v6.md`](CHANGELOG_v6.md)).
