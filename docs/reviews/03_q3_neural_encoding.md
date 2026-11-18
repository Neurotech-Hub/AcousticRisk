# Review: 03_q3_neural_encoding.tex (Q3)

## Assessment

A short, disciplined section that does what the outline asks: it uses a few contrasts (amygdala firing without freezing, accumbens versus tail-of-striatum dopamine, reduced c-Fos in a field sciurid) to show what neural measures can and cannot license, and it respects every relevant guardrail (Parsana frequency code, Freeman c-Fos reduction, preparation-dependent intensity scaling). Its main weaknesses are a forward-looking reliability prediction that does not discriminate reliability from caller-specific habituation, and substantial overlap with the synthesis section.

## Changes made

- Paragraph 2 (Parsana): "the recorded activity reflects" → "the difference largely reflects", matching the map's "largely a frequency code" (tones reproduced *most*, not all, of the difference).
- Final paragraph (gap statement): the claim that no dopamine recordings exist during natural alarm calls contradicted the section's own report of Willuhn et al. recording during 22-kHz calls; added "apart from the 22-kHz calls of \citet{WilluhnEtAl2014}".

## Needs author decision

1. **Location:** Final paragraph, reliability prediction. **Issue:** "should change with the history of a specific caller and recover when the caller changes" is also predicted by caller-specific habituation; Q6 (paragraph 2) states identity-specific recovery cannot separate the two, and Q5 adds "renewal when a call is again followed by danger." **Recommendation:** Make the neural signature depend on the caller's call–danger pairing history (e.g., recovery when a discounted caller's call is again followed by danger), not on caller change.
2. **Location:** This section versus `08_synthesis.tex` ("Neural measures do not map neatly onto a single level" paragraph and the following Freeman sentence). **Issue:** Furuyama/Goedhoop intensity conflict, the "not a scalar measure of threat" conclusion, and Freeman c-Fos reduction are restated nearly verbatim. **Recommendation:** Keep the evidence here; have the synthesis refer back to Q3 in one sentence.
3. **Location:** Paragraph 3 (dopamine). **Issue:** The valence contrast the outline asks for (appetitive calls versus aversive noise) is implicit only: 50-kHz calls raise accumbens dopamine, noise lowers it, and 22-kHz calls simply fail to raise it. Whether 22-kHz calls produced any decrease is not stated, which matters for the claim that aversive sounds lower accumbens dopamine. **Recommendation:** If Willuhn et al. report the 22-kHz trace, state whether it decreased; otherwise note that an aversive natural call has not been shown to reproduce the noise-evoked decrease.
4. **Location:** Paragraph 2, "Physiological measures lead to the same conclusion at the level of interpretation." **Issue:** Cortisol and heart rate are not neural measures, and an endocrine response shows that something was assessed, not that a biological interpretation was assigned. **Recommendation:** Either state why these count as interpretation-level evidence or call them assessment without overt behavior.
5. **Location:** Whole section, cross-section repetition. **Issue:** ParsanaEtAl2012a is described in Q1, Q2, Q3, Q4, and synthesis; EilamEtAl1999 in Q2, Q3, Q4, synthesis; Mateo1996 in Q2 and Q3 with near-identical wording. **Recommendation:** Pick one home for each full description and use brief back-references elsewhere.
6. **Location:** Final paragraph. **Issue:** The outline asks which signatures would be expected for tracking *risk* as well as reliability and timing; risk is not addressed. **Recommendation:** Optional one-sentence prediction, or leave as is given the "keep short" instruction.

## Needs human verification

- WilluhnEtAl2014: whether 22-kHz calls produced any accumbens dopamine decrease (bears on item 3).
- FuruyamaEtAl2026: "fell in all animals" vs. matrix wording (9 decrease-type mice plus 6 with an additional onset increase); confirm that the 6 also showed the decrease.
- Open `% VERIFY` markers: EilamEtAl1999 and Mateo1996 (endocrine response without behavior; heart-rate discrimination preceding behavior); SadanandaEtAl2008 (region-specific c-Fos by call type).

## Missing literature

- Suggested, not verified: map lists Grafelman et al. 2025 (*Neuropsychopharmacology* 50:1376–1384, aversion-induced dopamine reductions) as a Q3 background lead with no BibTeX entry. Optional map entries MoriyaEtAl2018 and KutluEtAl2025 (novelty effects on accumbens dopamine) could support the Furuyama novelty interpretation in one clause if desired.
