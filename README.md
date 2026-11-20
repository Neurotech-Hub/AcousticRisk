# AcousticRisk

*From Sound to Action: Selecting and Designing Acoustic Stimuli for Rodent Behavior*

**Preprint:** [https://www.preprints.org/manuscript/202611.2187](https://www.preprints.org/manuscript/202611.2187)

Sources live under `manuscript/`. Planning notes are in `docs/`. Published PDFs in `literature/` are gitignored.

## Prerequisites

- TeX with `pdflatex`, `bibtex`, and `latexmk` (MacTeX / TeX Live)
- [Pandoc](https://pandoc.org/) ≥ 2.x (for DOCX)

## Build

From the repository root:

```bash
make pdf    # → build/AcousticRisk.pdf
make docx   # → build/AcousticRisk.docx
make all
make clean
```

| Path | Role |
|---|---|
| `manuscript/main.tex` | Root document |
| `manuscript/sections/` | Section files |
| `manuscript/refs/references.bib` | Bibliography |
| `manuscript/figures/` | Figure assets |
| `manuscript/tables/` | Tables and CSV sources |
| `build/` | Generated output (gitignored) |

Edit `.tex` / CSV sources under `manuscript/`, then rebuild. Do not edit files in `build/`.

## Companion site

An interactive companion, *Interpreting Acoustic Risk*: **https://neurotech-hub.github.io/AcousticRisk/**

It lives in `site/` (Vite + React + TypeScript). It reads `manuscript/refs/references.bib` for its citations and `brand/` for the logo, so rebuild picks up changes to either.

```bash
cd site
npm install
npm run dev     # local dev server
npm test        # model and citation checks
npm run build   # production build in site/dist
```

Pushes to `main` that touch `site/`, `brand/`, or the bibliography deploy through GitHub Actions (`.github/workflows/pages.yml`). One-time setup: repository **Settings → Pages → Source: GitHub Actions**. Artwork placeholders and the prompt for each are in `site/GRAPHICS.md`.
