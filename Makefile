# Sound Danger manuscript build
# Usage (from repository root):
#   make pdf    → build/SoundDanger.pdf
#   make docx   → build/SoundDanger.docx
#   make all    → both
#   make clean  → remove build artifacts

ROOT        := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
MS          := $(ROOT)/manuscript
BUILD       := $(ROOT)/build
MAIN        := main
TEX         := $(MS)/$(MAIN).tex

PDF_OUT     := $(BUILD)/SoundDanger.pdf
DOCX_OUT    := $(BUILD)/SoundDanger.docx

LATEXMK     := latexmk
PANDOC      := pandoc

# Pandoc reads the same multi-file sources via a temporary concatenated input
# assembled from main.tex's \input/\include tree (see scripts/export_docx.sh).
EXPORT_DOCX := $(ROOT)/scripts/export_docx.sh

.PHONY: all pdf docx clean dirs

all: pdf docx

dirs:
	@mkdir -p $(BUILD)

pdf: dirs
	$(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error \
		-outdir=$(BUILD) -cd $(TEX)
	@cp -f $(BUILD)/$(MAIN).pdf $(PDF_OUT)
	@echo "Wrote $(PDF_OUT)"

docx: dirs
	@$(EXPORT_DOCX) $(DOCX_OUT)
	@echo "Wrote $(DOCX_OUT)"

clean:
	$(LATEXMK) -C -outdir=$(BUILD) -cd $(TEX) || true
	rm -f $(PDF_OUT) $(DOCX_OUT)
	rm -f $(BUILD)/$(MAIN).* $(BUILD)/sections/*
	@echo "Cleaned build/"
