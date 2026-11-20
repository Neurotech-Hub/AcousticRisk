#!/usr/bin/env bash
# Export manuscript/ to DOCX via pandoc.
# Prefer a single pandoc pass over the root .tex so \include/\input resolve.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MS="${ROOT}/manuscript"
OUT="${1:-${ROOT}/build/AcousticRisk.docx}"
BUILD="${ROOT}/build"

mkdir -p "$(dirname "$OUT")" "${BUILD}"

# Pandoc resolves \input/\include relative to the working directory.
cd "${MS}"

"${PANDOC:-pandoc}" \
  --from=latex \
  --to=docx \
  --bibliography="refs/references.bib" \
  --citeproc \
  --resource-path=".:figures:tables" \
  --output="${OUT}" \
  "${ROOT}/scripts/pandoc_flags.tex" \
  main.tex

# Keep a copy under build/ with a stable name if pandoc wrote elsewhere.
if [[ ! -f "${OUT}" ]]; then
  echo "error: pandoc did not write ${OUT}" >&2
  exit 1
fi
