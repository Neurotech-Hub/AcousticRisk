# Sound Danger Manuscript

Question-driven neuroethology review: *When Does a Sound Mean Danger?*  
Planning source of truth: [`docs/OUTLINE.md`](docs/OUTLINE.md).

## Decision: multi-file LaTeX (not one large `.tex`)

The outline is structured as seven independent questions plus synthesis and conclusion. Those sections will be drafted and revised on different schedules, so the manuscript is split under `manuscript/` with one root driver (`main.tex`) and one file per section.

| Approach | Why not / why yes |
|---|---|
| Single large `.tex` | Harder to review diffs, parallel editing, and selective rebuilds. |
| **Multi-file (chosen)** | Maps 1:1 to outline parts (Q1–Q7, synthesis, conclusion); supports `\includeonly` while drafting. |

Writable prose lives only under `manuscript/`. `docs/` holds planning materials (outline, evidence notes), `agents/` holds instructions for AI drafting and review, and `literature/` holds reference PDFs; none of these are compiled. `literature/` is gitignored so published articles are not distributed.

## Repository layout

```
SoundDangerManuscript/
├── README.md                 ← this file
├── Makefile                  ← pdf / docx / clean
├── scripts/
│   ├── export_docx.sh        ← pandoc LaTeX → DOCX
│   ├── make_placeholders.py  ← labeled placeholder PNGs for undrawn figures
│   └── make_table.py         ← Table 1 LaTeX from tables/evidence_matrix.csv
├── agents/
│   ├── WRITER.md             ← drafting rules, inputs, output conventions
│   ├── REVIEWER.md           ← peer-review rules and report format
│   └── STYLE.md              ← exemplar reviews, page pointers, paragraph architectures
├── literature/               ← reference PDFs (not compiled; gitignored, not distributed)
│   ├── Magrath 2014.pdf      ← style exemplar: comparative synthesis (Biol Rev 2015)
│   ├── Blumstein 2006.pdf    ← style exemplar: theory and prediction
│   ├── Watabe-Uchida 2017.pdf ← style exemplar: mechanistic neuroscience
│   └── (six anchor papers)   ← full-text checks: Hendrie & Neill 1991, Kindermann 2009, Hare 1998, Hare & Atkins 2001, Evans & Hammond 1983a, Kiriazis & Slobodchikoff 2006
├── docs/
│   ├── OUTLINE.md            ← conceptual plan (do not compile)
│   ├── LITERATURE_MAP.md     ← references organized by section; keys match references.bib
│   ├── FIGURE_PROMPTS.md     ← image-generation prompts and draft captions for placeholder figures
│   ├── EVIDENCE.pdf          ← evidence report, round one
│   ├── LITERATURE_SUPP01.pdf ← evidence report, round two
│   └── LITERATURE_SUPP02.pdf ← evidence report, round three (full-text checks)
├── manuscript/
│   ├── main.tex              ← root document (compile this)
│   ├── preamble.tex          ← packages and macros
│   ├── frontmatter/
│   │   └── abstract.tex
│   ├── sections/
│   │   ├── 00_introduction.tex
│   │   ├── 01_q1_biological_meaning.tex
│   │   ├── 02_q2_innate_vs_learned.tex
│   │   ├── 03_q3_neural_encoding.tex
│   │   ├── 04_q4_behavioral_expression.tex
│   │   ├── 05_q5_learning_reliability.tex
│   │   ├── 06_q6_habituation_recovery.tex
│   │   ├── 07_q7_temporal_expectation.tex
│   │   ├── 08_synthesis.tex
│   │   └── 09_conclusion.tex
│   ├── figures/              ← figure assets (PDF/PNG)
│   ├── tables/
│   │   ├── evidence_matrix.csv  ← Table 1 source of truth (one row per study)
│   │   └── table1_evidence.tex  ← generated; do not edit
│   └── refs/
│       └── references.bib
└── build/                    ← generated PDF/DOCX and aux files (gitignored)
```

Section numbering matches the outline:

| File | Outline part |
|---|---|
| `00_introduction` | Scope, functional framework, review approach, positioning |
| `01`–`02` | Part I — Recognition and ecological meaning (Q1–Q2) |
| `03`–`04` | Part II — Assessment and behavioral response (Q3–Q4) |
| `05`–`07` | Part III — Updating responses over time (Q5–Q7) |
| `08_synthesis` | Integrative synthesis; figures/table framing |
| `09_conclusion` | Conclusion and future directions |

## Prerequisites

- TeX distribution with `pdflatex`, `bibtex`, and `latexmk` (MacTeX / TeX Live)
- [Pandoc](https://pandoc.org/) ≥ 2.x (DOCX export; citeproc for bibliography)

On this machine both are expected at:

- `/Library/TeX/texbin/latexmk`, `pdflatex`, `bibtex`
- `pandoc` on `PATH` (Homebrew)

## Build pipeline

All commands run from the **repository root**.

| Target | Output | Engine |
|---|---|---|
| `make pdf` | `build/SoundDanger.pdf` | `latexmk` → `pdflatex` + `bibtex` |
| `make docx` | `build/SoundDanger.docx` | `pandoc` (via `scripts/export_docx.sh`) |
| `make all` | both | |
| `make clean` | removes `build/` products | |

```bash
make pdf    # primary review format
make docx   # Word-compatible export for coauthors / journals
make all
make clean
```

### How the pipeline works

1. **PDF** — `latexmk` compiles `manuscript/main.tex` with `-outdir=build`, resolving `\input` / `\include` relative to `manuscript/`. Aux files stay in `build/`; a stable copy is written as `build/SoundDanger.pdf`.
2. **DOCX** — `pandoc` reads the same `main.tex` tree, applies `--citeproc` against `refs/references.bib`, and writes `build/SoundDanger.docx`. Figures resolve via `--resource-path` (`figures/`, `tables/`).

### Selective drafting (PDF only)

In `main.tex`, temporarily add before `\begin{document}`:

```latex
\includeonly{sections/01_q1_biological_meaning}
```

Then `make pdf` rebuilds only that included section (and still needs prior aux files for cross-refs).

### Bibliography

- Add entries to `manuscript/refs/references.bib`.
- Cite in section files with `\citep{Key}` (parenthetical) or `\citet{Key}` (textual).
- Key convention: `Author2001`, `AuthorAuthor2001`, or `AuthorEtAl2001` (three or more authors), with `a`/`b` for collisions.
- Current entries were generated from Crossref records, so authors, journal, volume, pages, and DOI are registry data. The *interpretation* of each study in `docs/LITERATURE_MAP.md` still needs checking against the article before it is cited in the text; the map's master index records which papers have had a full-text check.

### Figures and tables

- Place assets in `manuscript/figures/` (preferred) or `manuscript/tables/`.
- Include with `\includegraphics{...}` ( `\graphicspath{{figures/}}` is set in the preamble).
- Proposed conceptual pieces from the outline: Figure 1 (receiver-centered framework), Figure 2 (temporal dynamics), Table 1 (comparative evidence matrix — may later live as an open companion).
- **Table 1** is generated: edit `manuscript/tables/evidence_matrix.csv`, then run `python3 scripts/make_table.py` before `make`. The CSV also holds limitations and each study's full-text-check status, which the printed table omits. The table is a landscape longtable (`pdflscape`) input after the conclusion in `main.tex`; Word shows it in portrait.
- Figures 1–2 sit in `08_synthesis.tex` as `manuscript/figures/fig1_framework_placeholder.png` and `fig2_temporal_placeholder.png`. `python3 scripts/make_placeholders.py` writes labeled stand-ins (it never overwrites existing files). To replace them, generate images from `docs/FIGURE_PROMPTS.md` and save under the same filenames. Final figures will be redrawn as vector art (PDF for LaTeX, PNG for DOCX).
- Include images with the `.png` extension so the DOCX export finds them.

## Drafting with agents

Each agent file is self-contained and names the inputs it needs.

| Step | Instruction file | Reads | Produces |
|---|---|---|---|
| Draft a section | `agents/WRITER.md` | `OUTLINE.md`, `LITERATURE_MAP.md`, `STYLE.md` (+ PDF pages in `literature/`), `references.bib` | LaTeX in `manuscript/sections/NN_*.tex` |
| Review it | `agents/REVIEWER.md` | The section plus the same planning files | Structured report (major/minor concerns, priority revisions) |
| Revise | `agents/WRITER.md` (revision rules) | Section plus review report | Updated section file |

Example prompt: *"Following `agents/WRITER.md`, draft `manuscript/sections/01_q1_biological_meaning.tex`."* Then: *"Following `agents/REVIEWER.md`, review that section."*

Agents leave two LaTeX comment markers (invisible in PDF and DOCX):

- `% VERIFY: …` — detail not yet confirmed against the article (always used for papers whose full-text check is incomplete).
- `% MISSING: …` — claim that needs a source not yet in `references.bib`.

Find open items with `rg "% (VERIFY|MISSING)" manuscript/sections`.

## Working conventions

1. **Outline first** — change structure in `docs/OUTLINE.md`, then mirror section files / headings if needed.
2. **Literature map before citing** — assign references to sections in `docs/LITERATURE_MAP.md`, verify them, then add them to `references.bib`. Agents never edit `references.bib`.
3. **Write in section files** — do not paste long prose into `main.tex`.
4. **No writing in `build/`** — generated only.
5. **Coauthor Word edits** — prefer merging substantive edits back into the `.tex` sources rather than treating the DOCX as canonical.
6. **Resolve markers before circulating** — no `% VERIFY` or `% MISSING` comments in a section shared with coauthors.

## Status

- Outline, literature map (three evidence rounds), bibliography (66 entries), and agent instructions are in place.
- First drafts: `00_introduction.tex` (about 1,150 words) and `08_synthesis.tex` (about 1,350 words, Figures 1–2 as placeholders). Other section files are still placeholders.
- Table 1 (49 studies) is built from `manuscript/tables/evidence_matrix.csv`.
- All anchor papers are checked against the full text; the drafts have no open `% VERIFY` markers. The search-method description is deferred (end of `docs/LITERATURE_MAP.md`).
- Target journal is undecided; journal-specific formatting is deferred.
