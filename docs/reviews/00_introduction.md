# Review: 00_introduction.tex

## Assessment

The introduction sets up the review clearly. The opening contrast between field and laboratory literatures is well motivated, the four theoretical frameworks are each tied to specific questions, and the scope and the four-level distinction follow the outline closely. Most claims are framed within the guardrails. The main weaknesses are a few overstated empirical sentences in the opening paragraph (now fixed), prose that later sections repeat nearly verbatim, and an unaddressed disclosure obligation in the review-approach subsection.

## Changes made

- Para 1, Kim et al. sentence: rewritten to the guardrail wording ("selective freezing … depends on prior aversive experience"). The previous "freeze … only after" wording conflicted with naïve-rat effects reported in OlszynskiEtAl2020 and EndresEtAl2007.
- Para 1, Willuhn et al. sentence: "rapidly stop approaching" changed to "approach … declines rapidly", which matches the map's takeaway. In the closing sentence, "nothing" became "little overt response", because the guardrail notes that naïve rats show cardiac and locomotor effects.
- Framework lead-in: "antipredator theory" changed to "functional theory". Nesse's smoke detector principle concerns defenses in general, and eavesdropping is not antipredator theory as such.
- Para 2 and framework para 2: `\citep{SloanEtAl2005,BlumsteinArmitage1997}` reordered to chronological order, as the journal requires. natbib is loaded without `sort`.
- Added two `% VERIFY` markers: one above para 2 (papers not full-text checked) and one above framework para 2 (DillHoutman1989).

## Needs author decision

1. **Location:** Framework para 3 (risk allocation) vs. `07_q7_temporal_expectation.tex` para 1 and `08_synthesis.tex` (updating paragraph). **Issue:** Q7 restates the hypothesis with nearly the same wording ("brief and rare … reduce antipredator effort … in order to forage"; "not, to our knowledge, been tested … use it as theory"), and the synthesis states it a third time. **Recommendation:** Keep the full statement in one place, either the introduction or Q7, and cross-reference it from the others.
2. **Location:** Para 1 closing sentence and the central-question sentence in the framework vs. `08_synthesis.tex` para 1. **Issue:** The synthesis opens with the same "same acoustic event … depending on who hears it, what that receiver has experienced" formulation and the same "when receivers revise meaning rather than whether they respond" pivot. **Recommendation:** Vary or shorten one of the two passages so the synthesis reads as a conclusion, not an echo.
3. **Location:** Framework para 2 vs. `04_q4_behavioral_expression.tex` (economics-of-escape paragraph). **Issue:** Ydenberg & Dill and the visual-cue gray squirrel result appear in both places with the same caveat. **Recommendation:** Leave the full statement in the introduction and give Q4 a one-clause reference, or the reverse.
4. **Location:** Review approach. **Issue:** The outline requires a statement on AI-tool use beyond copy editing, and the literature map notes that all three evidence reports were AI-assisted. The section does not mention this. The existing TODO covers only the search method. **Recommendation:** Add a TODO, or a disclosure sentence, about AI-assisted literature searching.
5. **Location:** Para 2, "Laboratory work on mice and rats … assay of affective state \citep{BonautoEtAl2023}". **Issue:** The map describes Bonauto as a rat-focused review of 22-kHz playback, so it supports the claim for rats only. **Recommendation:** Either narrow the sentence to rats or add a mouse citation (e.g., the maternal pup-call literature already cited in Q2).
6. **Location:** Framework para 4, "Eavesdropping is well documented in rodents". **Issue:** The map's evidence status limits this to sciurids. **Recommendation:** Consider "in sciurids", or point to Q2 for the evidence.
7. **Location:** Throughout. **Issue:** The journal requires full genus names at first mention. Laboratory rats and mice are never given binomials, while gray squirrels and Richardson's ground squirrels are. **Recommendation:** Decide on a convention, either here or in Q1.

## Needs human verification

- KimEtAl2010: check whether the freezing result came from live 22-kHz calls of a fear-conditioned partner (the matrix notes other sender cues were present) or also from playback. If it rests only on live calls, "freezing to … calls" may need qualifying.
- SolajaGustison2026: check that the review concentrates on call structure and production. Its title refers to "functions" and "mechanisms", which may overlap with our receiver focus and weaken the "not synthesized" claim.
- Open `% VERIFY` markers: BlumsteinArmitage1997, SloanEtAl2005, Shriner1998 (para 2); BonautoEtAl2023 and SolajaGustison2026 scope (para 2); DillHoutman1989 (framework para 2).

## Missing literature

None verified. Suggested search: a recent review on heterospecific eavesdropping or risk assessment in mammals that postdates MagrathEtAl2015, to support the positioning claim.
