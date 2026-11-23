# CHANGELOG v11 — Neuroscience & Biobehavioral Reviews submission revision

Target journal: *Neuroscience & Biobehavioral Reviews*. Figure artwork unchanged; only captions edited.

## Contribution
- **Abstract:** final sentence states the framework's use: deciding which acoustic findings translate between laboratory and field, where evidence is incomplete, and which observations distinguish explanations.
- **§1.3:** contribution paragraph names the framework (three demands, organizing notation, three principles) and how to use it; roadmap updated.
- **§6:** retitled "A receiver-centered framework for acoustic risk", with a new opening paragraph.

## Predictions
- **Table 2 (new, `tables/table_predictions.tex`, `tab:predictions`):** seven processes (three demands, then the four Fig 4 accounts in panel order) × where each acts in Eq. 1, the distinguishing observation, and current evidence. Placed at the end of §6.4.
- **§5:** §5.3 (temporal expectation) and §5.4 (motivational relevance) swapped to match Fig 4C/D; intro list reordered. §5.5 opens with one distinguishing prediction per Fig 4 panel plus the risk-allocation prediction, pointing to Table 2.
- **§6.4:** each principle's second paragraph ends with what it predicts and what would challenge it. Table 2 cited in the §6.4 opener.
- **§7:** opening cites Table 2.

## Limits of cross-species inference
- **§6.5 (new, `sec:account-limits`):** replaces the closing "Cross-species comparison has limits" paragraph with three rules (stimulus class; evidence type; species and setting) and states that no laboratory circuit has been shown to mediate a natural alarm response in a wild sciurid.
- **Audit:** §3, §4.3, §6.2, §6.4 already hedge circuit claims as candidates/hypotheses; no changes needed. Table 1 reliability row: "marmots scrutinize them more closely" → "marmots respond more to them".

## NBR compliance
- **Declarations (`backmatter/declarations.tex`):** generative-AI declaration (figures), competing interests, funding placeholder, CRediT, data availability; placed immediately before the references.
- **Fig 1–4 captions:** each ends with an AI-illustration disclosure sentence.
- **Table of contents** removed.
- **Table captions (1 and 2):** added space between caption and top rule.

## Submission package (`submission/`)
- `highlights.txt`: five highlights, 75–84 characters.
- `cover_letter.md`: draft with placeholders for date, AI text-assistance disclosure, and suggested reviewers.
- `figures/`: copies of the four PNGs.

## v11b — Table 2 review corrections
- **Table 2:** column renamed "Discriminating prediction"; rows grouped into receiver demands and updating processes; caption defines $p_t$ and $C$ and states that convergent tests are required. Evidence cells now say whether each prediction itself has been tested.
  - Habituation: stimulus specificity is part of habituation; caller-specific renewal fits it and no longer "points beyond" it.
  - Reliability learning: reversal flagged as untested; direction may differ between species.
  - Temporal expectation: requires matched mean interval, stimulus properties, and exposure count.
  - Motivational relevance: predicts a change in magnitude or action, not necessarily recovery.
  - Rapid defense: transfer across callers stated as a hypothesis requiring acoustically matched stimuli.
- **§5.1, §5.4, §5.5, §6.2, §6.4 Principle 1:** prose aligned with the same corrections; §5.5 adds that no single test is decisive.

## v11c — Prose pass
- **`agents/WRITER.md`:** added rules for plain words over abstract nouns, idea-bearing openers, subordinate pointers, short thematic paragraphs, and a deletion test.
- **§5:** long single paragraphs split into thematic paragraphs (intro, §5.1, §5.2, §5.3, §5.5); closing transition rewritten to carry content.
- **Openers:** §3 (second paragraph), §4, §6.1, and §7 now lead with a claim; pointers moved into clauses or parentheses.
- **Jargon:** "homology"/"homologous" (§4.3, §6.4, §6.5), "substrates" (§3), "complementary constraints" (§6.3), and "framework for comparison" (§6.2) replaced with plain wording.
- **Long paragraphs split:** §2 control-matching, §6.2 notation (definitions vs. mapping to demands), §6.3 theories, §6.4 Principles 1 and 2.
- **§7.3:** matching now specifies number of calls, mean interval, and acoustic structure.

## v11d — Section 7 restructure
- Former §7.1–7.4 moved into §6 as **§6.6 Outstanding questions** (`sec:outlook`), with bold run-in paragraphs instead of subsections.
- Former Closing is now a standalone **§7 Conclusions** (`sec:conclusions`); text unchanged.
- Introduction roadmap and the §6.4 pointer updated.

## v11e — Narrower sciurid circuit claim
- "No circuit has been recorded or manipulated in a free-living sciurid" replaced everywhere (§4.3, §6.5, §7, highlight 5, cover letter) with: no study has, to our knowledge, causally established the circuits mediating natural alarm-call responses in sciurids; region-specific activation is documented \citep{FreemanEtAl2020}; recordings or manipulations during alarm responses in free-ranging sciurids remain unreported.

## v11f — Author's neurophysiology platform
- **Ref added (Crossref-verified):** GaidicaDantzer2022, *Front. Neural Circuits* 16:940989 (implantable platform; lab rat and captive fox squirrel).
- **§4.3:** after the circuit-gap sentence, notes that such recordings are becoming feasible, citing GaidicaDantzer2022.
- **§6.6 (circuits question):** animal-borne cardiac and neural loggers as field measures of recognition, citing GaidicaDantzer2020 and GaidicaDantzer2022.

## Open items for the author
- ~~Funding statement~~: none to declare.
- ~~AI declaration~~: Claude Opus 5.5 (research, organizing principles, grammatical editing) and ChatGPT image generation (figures) are now named.
- Figure resolution: Figs 2 and 4 (3548 px wide) exceed 300 dpi at full page width; Figs 1 and 3 (~1760 px) reach ~235 dpi at 190 mm and ~320 dpi at 140 mm.
- Line numbers (`lineno`) not added; optional for review copies.
