# From Sound to Action: Selecting and Designing Acoustic Stimuli for Rodent Behavior

**Manuscript type:** Critical integrative review with a practical stimulus-selection framework and an explicitly labeled computational research agenda  
**Prior outline:** Archived as [`OUTLINE_v1_danger.md`](OUTLINE_v1_danger.md) (danger-recognition Q1–Q7 structure)  
**Central question:** Given a target rodent species, desired behavioral outcome, receiver history, and playback context, which acoustic features should we select, how should we measure their effects, and what evidence would justify designing a new stimulus?

## Principal thesis

An acoustic stimulus is useful only relative to a *receiver, context, desired outcome, and exposure history*. Frequency, spectrotemporal structure, biological familiarity, state, ecology, and playback schedule jointly influence responses; naturalness alone does not establish effectiveness. Distinguish **stimulus efficacy**, **mechanistic interpretation**, and **ecological relevance**.

## Practical questions the review answers

1. **Laboratory:** What acoustic stimuli are appropriate for eliciting or measuring specific outcomes, and what would validate the interpretation?
2. **Field:** Which natural or constructed sounds are supported for vigilance, deterrence, attraction, or altered foraging—in which species and contexts, and for how long?
3. **Computational design:** Which features can be parameterized and optimized to create synthetic or modified playback, with clear tests against natural exemplars?

## Scope

- **Taxa:** Laboratory mice and rats; field sciurids (co-primary). Other rodents as targeted contrasts.
- **Stimuli:** Conspecific alarm/distress/social calls (including rat 22- and 50-kHz), heterospecific alarms and safety cues, predator vocalizations, naturalistic/synthetic controls.
- **Outcomes:** Startle/orienting; vigilance; freezing; avoidance/escape; approach; foraging disruption; return-to-activity latency; autonomic/endocrine; neural activity; changes over repeated playback.
- **Boundaries:** No broad bird/other-taxon expansion; no comprehensive auditory-circuit review; ACORN only as a brief application of the framework.

## Section plan

### 1. Introduction — From acoustic stimulus to biological outcome (`00_introduction.tex`)

**Argument:** The same sound can produce different responses depending on receiver experience, state, and setting; organize around outcomes, not danger labels.  
**Define:** detection, recognition/interpretation, action selection, physiological arousal, ecological impact, response persistence (non-equivalent).  
**Retain:** field vs lab contrast; error-management framing as why over-responding is expected.  
**Change from v1:** Drop danger-first framing; lead with stimulus selection.

### 2. What acoustic properties make sounds biologically effective? (`01_acoustic_features.tex`)

**Argument:** Controllable stimulus dimensions explain effects better than “naturalness.”  
**Evidence:** Willuhn, Wöhr, Parsana tones, Schiavo morphs, Evans intensity, Blumstein rate/nonlinearity, Kiriazis, Schmidt; innate vs learned (Hendrie/Kindermann conflict; 22-kHz experience).  
**Add:** Species hearing/sensitivity caveat.  
**End with:** Feature × effect × limitation table (feeds Table 2).  
**Change from v1:** Merge Q1+Q2.

### 3. How do acoustic stimuli produce physiological and behavioral effects? (`02_mechanisms_measures.tex`)

**Argument:** Inferential ladder from detection to ecological consequence; each measure has limits.  
**Evidence:** Furuyama/Goedhoop DA; Freeman c-Fos; Mongeau; Eilam; Mateo; Baack/Jayne.  
**Change from v1:** Merge Q3+Q4; organize by measurement class and design decisions.

### 4. Which sounds should be used for which outcome in the lab or wild? (`03_stimulus_selection.tex`)

**Argument:** Outcome×context shortlists with calibrated language (*demonstrated* / *candidate* / *unsupported*).  
**Must cover:** 22-kHz freezing vs naïve cardiac/locomotor; 50-kHz approach; mouse sweeps; sciurid rate/nonlinearity/identity/predator-specific escape; eavesdropping/safety; predator-call conflict; playback hardware/propagation limits.  
**Change from v1:** Major new synthesis section.

### 5. Why do responses persist, fade, or change with repeated playback? (`04_response_persistence.tex`)

**Argument:** Four decline mechanisms; initial ≠ maintained response.  
**Evidence:** Hare/Atkins vs Blumstein reliability; Evans; Berz; Davis/Herry; risk allocation as theory only.  
**Change from v1:** Condense Q5+Q6+Q7.

### 6. Can computationally designed sounds improve on natural calls? (`05_computational_design.tex`)

**Argument:** Labeled hypotheses + design-and-test pipeline; no efficacy claims without data.  
**Include:** Distinct optimization objectives; conceptual algorithms; ACORN as framework application; critical unknowns.  
**Change from v1:** Entirely new; design ideas must also appear upstream.

### 7. Synthesis and future experiments (`06_synthesis_experiments.tex`)

**Argument:** Decision framework (outcome → stimulus → evidence → controls → readouts → validation → repetition).  
**Include:** 4–6 discriminating experiments (at least one synthetic vs natural; one lab–field translation).  
**Change from v1:** Replaces old synthesis + conclusion.

## Figures

1. Outcome-first stimulus design framework  
2. Acoustic design space  
3. Mechanistic and measurement ladder  
4. (Optional) Response dynamics — hypothetical unless data-backed  

## Tables

1. **Practical evidence matrix** (main text) — by desired outcome / lab vs field  
2. **Acoustic feature and control checklist** (main text)  
S1. Study-by-study evidence matrix (former Table 1; supplement)

## Evidence guardrails (unchanged from v1 map)

Predator-call conflict; reliability direction conflict; thin natural-vs-matched habituation evidence; artificial-only timing; dopamine not a scalar threat readout. Mark recommendations as demonstrated / candidate / unsupported.
