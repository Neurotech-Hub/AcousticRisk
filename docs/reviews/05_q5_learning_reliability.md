# Review: 05_q5_learning_reliability.tex

## Assessment

The section answers its question, keeps the outline's distinction between caller identity and caller reliability, and stays within every relevant guardrail: identity is shown beyond sciurids, reliability learning only in sciurids, the direction of the effect differs between ground squirrels and marmots, and familiarity had no effect in marmots. Study details agree with the map and the evidence matrix, and the prose is clean, with no banned language. The main weaknesses are conceptual. The habituation-versus-reliability criterion is weaker than the text implies, and the error-management paragraph is internally inconsistent.

## Changes made

- Paragraph 1: added a `% MISSING` marker for the uncited claim that callers differ in age, experience, and tendency to call at harmless events.
- Paragraph 2: moved the existing WarrenEtAl2025 `% VERIFY` marker from below the prairie vole sentence to directly above it. The text is unchanged.
- Paragraph 4: added a `% VERIFY` marker above the Nesse2005 sentence (the paper was not in the full-text check), asking whether the caller and cheaper-information argument is in Nesse or is our extension.

## Needs author decision

1. **Location:** Paragraph 4, first two sentences.
   **Issue:** Sentence 1 says a receiver should keep responding to a false-alarm-prone caller *unless* it has a cheaper source of information. Sentence 2 says discounting is favored when independent checking is *costly*. Taken together, the costly-checking case predicts both continued responding and discounting.
   **Recommendation:** Restate the prediction in three regimes: (a) checking is cheap, so scrutinize; (b) checking is costly and the cost of a miss is high, so keep responding; (c) checking is costly and the cost of responding is high relative to the expected cost of a miss, so discount. Remove the attribution of the extension to Nesse2005.

2. **Location:** Paragraph 1 (the diagnostic criterion) and the last sentence of paragraph 5.
   **Issue:** Caller-specific decline with renewal on caller change is also what stimulus-specific habituation predicts, because different callers are acoustically different stimuli. Section 6 says exactly this about Hare1998 and BlumsteinDaniel2004. A design that "varies the caller while holding acoustic structure constant" is also self-contradictory.
   **Recommendation:** Make the discriminating test explicit. Hold the caller and the acoustic exposure fixed, vary whether calls are followed by danger (as HareAtkins2001 did), and test whether responding renews after a call is again paired with danger. Present caller-change renewal as necessary but not sufficient.

3. **Location:** Paragraph 4, final sentence (LillyEtAl2019).
   **Issue:** The point about safety cues is off-topic for a paragraph on error management. It also repeats section 2 (`02_q2_innate_vs_learned.tex`, gray squirrel paragraph) almost verbatim.
   **Recommendation:** Either move it to the end of paragraph 3 or 5 as an update that does not depend on the caller, or cut it here and cross-reference \secref{sec:q2}.

4. **Location:** Paragraphs 2–3, compared with `08_synthesis.tex` (the reliability paragraphs and Figure C caption).
   **Issue:** The synthesis restates the Hare1998, HareAtkins2001, BlumsteinEtAl2004, and BlumsteinDaniel2004 results and the cost-of-checking prediction. `06_q6_habituation_recovery.tex` (paragraph 2) also re-describes Hare1998 and BlumsteinDaniel2004.
   **Recommendation:** Keep the details in Q5. Have the synthesis and Q6 refer back to them rather than restate them.

5. **Location:** Last sentence of paragraph 2.
   **Issue:** Hare1998 reported longer vigilance to neighbours' calls than to strangers' calls (trend, P = 0.06), which slightly qualifies "familiarity [is] not … reason to respond more strongly."
   **Recommendation:** Consider a short clause noting the trend, or limit the claim to marmots and to mothers and colony members.

## Needs human verification

- BlumsteinEtAl2004: confirm the age class of the marmot receivers. Paragraph 3 lists "receiver age" as a difference between the two designs, but the matrix records only "free-living."
- BlumsteinEtAl2004: confirm how unreliability was established (prior training of receivers versus caller history), because paragraph 4's alternative explanation depends on it.
- Open `% VERIFY` markers: WarrenEtAl2025 (calls toward another female); HareWarkentin2012 (no response difference to mother's or colony members' calls); LillyEtAl2019 (vigilance relaxation with chatter); Nesse2005 (scope of the false-alarm argument).

## Missing literature

- Suggested search: false-alarm rates by caller age or experience in sciurids, to support the opening claim in paragraph 1 (now marked `% MISSING`).
