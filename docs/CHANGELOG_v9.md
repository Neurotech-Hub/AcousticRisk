# Change log — v8 → v9 (integration and clarity pass)

Editorial and integrative pass in response to review of v8. Structure and nearly all of §3 retained; no broad literature expansion.

## Writer guidance (`agents/WRITER.md`)

- Role rewritten for the scholarly, receiver-centered review and mixed audience (removed the stimulus-selection orientation left over from v5–v6).
- New sections: **Voice and storytelling** (lead with the simple idea; reasoning as observation → why it matters → what experiments show → what remains open; define terms on first use; qualify once), **Evidence classification** (single two-axis scheme), **Field-to-circuit integration**.
- Rhetorical questions remain banned; genuine scientific questions that the paragraph answers are allowed.
- Added a line in the inputs table: if `docs/OUTLINE.md` conflicts with the current receiver-centered framing, follow the manuscript and flag the conflict. `docs/OUTLINE.md` itself was not changed and still describes the v6 stimulus-selection plan.

## Evidence classification (consistent throughout)

- Stimulus: natural vocalizations / other natural sounds / synthetic or conditioned sounds / non-acoustic.
- Method: causal / activity (correlational) / physiology or behavior only / theory.
- Removed mixed "stimulus-class C" and "Tier A/B/C" labels from §3; Fig. 3 legend aligned to the same scheme.

## Section changes

- **§3** Plain-language rewrite with fewer repeated caveats. Selective depth added:
  - §3.4: sympathetic vs parasympathetic control, HPA timescale, CeA → lateral hypothalamus vs central gray dissociation, heart-rate ambiguity (Iwata & LeDoux 1988), freezing bradycardia (Roelofs 2017), BNST and cue predictability.
  - §3.5: prefrontal and hippocampal control of generalization and extinction (Concina 2018; Quinn 2009; Sierra-Mercado 2011).
  - §3.6: evidence re-sorted by stimulus and method.
- **§4** New §4.3 *What defensive circuits suggest about field responses*: three hypotheses with field tests (harsh/abrupt calls and graded vigilance; predator-specific escape and action selection; vigilance, freezing, and cardiac signature). Mongeau 2003 reframed as flight–freezing competition. Other subsections clarified.
- **§6** Determinants grounded in circuit evidence; new §6.2 *Three demands on the receiver* (rapid acoustic defense, learned threat evaluation, flexible action selection) with distinct predictions; propositions 3 and 4 revised accordingly.
- **§1, §2, §5, §7, abstract** Clarity rewrite; claims and citations preserved. §5 synthesis links reliability updating to extinction and generalization as analogy. §7.2 tied to the three demands.

## New references (verified against PubMed/Crossref)

| Key | Placement | Stimulus / method |
|---|---|---|
| IwataLeDoux1988 | §3.4 | Conditioned / causal (autonomic blockade) |
| UlrichLaiHerman2009 | §3.4 | Review |
| Roelofs2017 | §3.4, §4.3 | Review |
| ConcinaEtAl2018 | §3.5, §5, §6 | Conditioned / causal + activity |
| QuinnEtAl2009 | §3.5, §5, §6 | Conditioned / causal |
| SierraMercadoEtAl2011 | §3.5, §5 | Conditioned / causal |

The four primary studies were added to `evidence_matrix.csv`, and the supplement table was regenerated.

## Bibliography verification

- Every entry with a DOI was checked against Crossref (title, year, authors); new entries were also checked against PubMed.
- Corrected: PereiraEtAl2020 second author **Matheus** Farias (was "Marta"); QuirkEtAl1995 second author **J. Christopher** Repa (was "Chris"); LeeEtAl1996 **López** (accent).
- SolajaGustison2026: Crossref lists the issue year as 2027; the entry already notes online-first 2026 / print 2027.

## Unresolved

- **Figure 3 artwork not produced.** The caption and legend specify the schematic, but the figure is still a placeholder. This follows the earlier instruction not to generate figures.
- `% VERIFY` flags remain for Mateo 1996/2010, DuanEtAl2025 details, and field papers not checked against full text.
- The §4.3 hypotheses are explicitly untested; no circuit has been studied in free-living sciurids.
