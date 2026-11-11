# Figure prompts (placeholders)

Prompts for generating **placeholder PNGs** with ChatGPT image generation. They exist to make the argument visible while drafting; final figures will be redrawn as vector art. Content follows `docs/OUTLINE.md` (Proposed figures) and the claim guardrails in `docs/LITERATURE_MAP.md`; captions follow `agents/WRITER.md`.

## How to use

1. Run `make pdf`, attach `build/SoundDanger.pdf` to ChatGPT, and start with: *"Read the section 'Integrative synthesis' in the attached manuscript; Figures 1 and 2 there are placeholders. Using that text and caption as context, create the figure described below."* Then paste one prompt block, unchanged.
2. Check the image against the checklist under that figure. Image generators often misspell labels or add extra text; ask for a corrected version naming the specific error rather than rewriting the prompt.
3. Save to `manuscript/figures/` with the filename given. Do not cite anything from a placeholder image.
4. All papers cited in the draft captions have been checked against the full text.

---

## Figure 1. Receiver-centered framework

**Save as:** `manuscript/figures/fig1_framework_placeholder.png`

```text
Create a clean scientific conceptual diagram for a biology review article. Flat vector style, white background, sans-serif font, thin dark-gray lines, a muted colorblind-safe palette (blue, orange, gray). No photographs, no 3D, no decorative textures, no extra text beyond the labels listed below. Landscape layout, 16:10.

PANEL A (left, about two-thirds of the width), labeled "A".
Four rounded boxes in a left-to-right row, connected by solid arrows:
  Box 1: "Acoustic detection"   (small subtitle: "frequency, modulation, timing")
  Box 2: "Biological interpretation"   (small subtitle: "innate bias + experience")
  Box 3: "Action selection"   (small subtitle: "orient, vigilance, freeze, flee, approach")
  Box 4: "Updating"   (small subtitle: "habituation, reliability, timing")
A curved solid arrow returns from Box 4 back to Box 2, labeled "feedback".
Above Box 2, three small gray input tags with thin arrows pointing down into it: "Prior experience", "Ecological context", "Caller identity & reliability".
Below Box 3, one small orange tag with an arrow pointing up into it: "Costs: missed threat vs false alarm".
Inside Box 4, the word "timing" is connected to the feedback arrow by a DASHED line; all other arrows are solid.
Between Box 1 and Box 2, and between Box 2 and Box 3, place a small vertical double bar symbol (like "||") on the arrow, each with a tiny label beneath: "can dissociate".
Bottom-left legend: solid line = "established"; dashed line = "hypothesized"; "||" = "levels can dissociate".

PANEL B (right, about one-third of the width), labeled "B", titled "Meaning depends on experience".
Four stacked horizontal cards, each with a simple flat rodent silhouette on the left and two short text lines on the right:
  Card 1: "Predator-naive lab rodents" / "owl calls: conflicting results"
  Card 2: "Shock-experienced rats" / "22-kHz calls: freezing"
  Card 3: "Mother mice" / "pup calls: broader tuning"
  Card 4: "Wild ground squirrels, marmots" / "alarm calls: caller reliability"
Card 1 has a gray outline with a small question mark; Cards 2-4 have blue outlines.

Spell every label exactly as written. Leave generous white space; text must be legible at journal column width.
```

**Check before saving**
- All labels spelled exactly; no invented labels, numbers, or citations.
- Only the "timing" link is dashed (temporal expectation with natural calls is untested; Q7).
- Card 1 reads "conflicting results", not "no recognition" (Hendrie & Neill vs Kindermann et al.).
- Card 4 says "reliability", which is shown only in sciurids; identity alone is not the point.

**Draft caption**

> **Figure 1.** Receiver-centered framework. (A) Experiments probe four levels that can dissociate: acoustic detection, biological interpretation, action selection, and updating. Prior experience, ecological context, and caller identity and reliability shape interpretation; the relative costs of missing a threat and of a false alarm shape action selection. Double bars mark documented dissociations: amygdala neurons distinguish call types largely by frequency and without freezing \citep{ParsanaEtAl2012a}, and spiny mice show endocrine but not behavioral responses to owl calls \citep{EilamEtAl1999}. The dashed link (temporal expectation) has not been tested with natural rodent calls. (B) The same class of sound carries different meaning for receivers with different histories \citep{HendrieNeill1991,KindermannEtAl2009,KimEtAl2010,SchiavoEtAl2020,HareAtkins2001,BlumsteinEtAl2004}.

---

## Figure 2. Temporal dynamics of responsiveness (hypotheses)

**Save as:** `manuscript/figures/fig2_temporal_placeholder.png`

```text
Create a 2x2 grid of simple schematic line plots for a biology review article. Flat vector style, white background, sans-serif font, thin axes without tick numbers or gridlines, smooth idealized curves, colorblind-safe colors (blue = natural call, orange = matched synthetic control, gray = other). These are conceptual sketches, NOT data: no numbers, error bars, data points, or scale values anywhere. Put the word "HYPOTHETICAL" in small gray capitals in the top-right corner of every panel. Landscape layout, 16:10.

PANEL A (top-left), labeled "A", title "Within-session decline".
x-axis label: "Presentation number"; y-axis label: "Response".
Four decaying curves starting at the same height:
  solid blue = "Natural, fixed timing"
  dashed blue = "Natural, variable timing"
  solid orange = "Control, fixed timing"
  dashed orange = "Control, variable timing"
Fixed-timing curves fall faster than variable-timing curves; blue curves fall slightly slower than orange curves of the same line style. Small legend inside the panel.

PANEL B (top-right), labeled "B", title "Recovery after rest".
x-axis label: "Time"; y-axis label: "Response".
A blue and an orange curve both decline during a shaded block labeled "Session 1", then a blank gap labeled "Rest", then a second shaded block labeled "Session 2" where both curves restart higher than where they ended; the blue curve restarts higher than the orange curve.

PANEL C (bottom-left), labeled "C", title "Caller reliability".
x-axis label: "Calls from one caller"; y-axis label: "Response".
Three gray curves from a common start: a flat line labeled "Reliable caller"; a declining line labeled "Discount (ground squirrels)"; a rising line labeled "Scrutinize (marmots)". A small vertical arrow near the right end of the declining line points upward with the label "New caller".

PANEL D (bottom-right), labeled "D", title "Risk allocation".
x-axis label: "Frequency of high-risk periods"; y-axis label: "Vigilance per alarm".
One smooth gray curve that starts high on the left and declines to the right. Small italic note under the title: "theory; untested with rodent calls".

Spell every label exactly as written. Keep panels evenly sized, with generous white space and legible text at journal width.
```

**Check before saving**
- "HYPOTHETICAL" appears in every panel; no numbers or data points anywhere.
- Panel A: variable timing declines more slowly than fixed timing (supported only for artificial sounds: Davis 1970, Herry et al. 2007). Natural-versus-control separation is a hypothesis.
- Panel B: natural recovers more than control (Evans & Hammond 1983a, at high intensity only).
- Panel C: discounting and scrutiny point in opposite directions; "New caller" restores response (Hare 1998).
- Panel D carries the "untested" note.

**Draft caption**

> **Figure 2.** Hypothesized temporal dynamics of responses to repeated sounds; curves are schematic, not data. (A) Irregular timing slows within-session decline for artificial sounds \citep{Davis1970,HerryEtAl2007}; whether natural calls and matched controls diverge under each schedule is untested. (B) After rest, orienting recovered more to a loud natural distress call than to its acoustic mimic \citep{EvansHammond1983a}. (C) Receivers track caller reliability, but in opposite directions: juvenile ground squirrels discount unreliable callers \citep{HareAtkins2001}, whereas marmots respond more to them \citep{BlumsteinEtAl2004}; a change of caller restores responding \citep{Hare1998}. (D) Risk allocation predicts less vigilance per alarm when high-risk periods are frequent \citep{LimaBednekoff1999}; no rodent acoustic test exists.
