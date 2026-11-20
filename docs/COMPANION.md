Interpreting Acoustic Risk

## Interactive Manuscript Companion

### Project Overview

Build an engaging, interactive web companion to the manuscript **Interpreting Acoustic Risk: Integrating Field Ethology and Laboratory Neuroscience in Rodents**.

The website should help readers intuitively understand the manuscript's central concepts through interactive visualizations, exploratory controls, and short explanations.

**This is a learning companion, not a scientific simulator.** Its purpose is to make complex ideas accessible and memorable, not to predict biological outcomes or introduce new scientific claims.

The manuscript and should use it as the authoritative source for terminology, conceptual framing, examples, and references.

### Core Philosophy

Organize the experience around a central insight:

**The same sound can produce different responses, and the same response can emerge from different processes.**

Section 6.2 provides the conceptual foundation:

1. **React** — Rapid acoustic defense driven by stimulus properties.
2. **Predict** — Learned evaluation of what acoustic information signals.
3. **Decide** — Flexible action selection based on ecological context and costs.
4. **Update** — Experience and temporal history reshape subsequent responses.

These are interacting demands, not necessarily sequential processing stages or distinct neural circuits.

The interface should encourage exploration, comparison, and discovery rather than passive reading.

---

## Primary Interactive Experiences

### 1. Acoustic Decision Playground — Highest Priority

Build the flagship interactive experience around the organizing equation in §6.2.

Allow visitors to explore how predicted danger, ecological context, and action costs influence the relative appeal of different responses.

Potential controls:

- Predicted danger
- Distance to refuge
- Value of continued feeding
- Available defensive actions
- Prior experience or caller reliability

Potential outputs:

- Real-time visualization of relative action scores
- A simple rodent/environment illustration
- An interactive rendering of the equation, highlighting relevant terms
- Brief, dynamically updated interpretations of changes

**Key lesson:** Two receivers can evaluate the same sound similarly but choose different actions because their circumstances differ.

Rapid, stimulus-locked defensive responses must remain conceptually separate from the evaluated decision described by the equation.

The equation is heuristic, not a fitted model. Any numerical examples must be clearly illustrative. The user should develop a sense of how that equation works: the UI/UX should interact with the equation to show what terms are being modified/altered/affected.

### 2. Many Roads to the Same Curve

Use the manuscript's discussion of response decline and Figure 4 to illustrate how superficially similar behavioral patterns can reflect different underlying processes.

Explore:

- Sensory habituation
- Caller-specific updating and reliability learning
- Temporal expectation
- Motivational changes and ecological risk allocation

Let visitors manipulate conditions such as repetition, caller identity, rest periods, danger association, or stimulus timing.

Real-time plots should make it easy to compare hypothetical trajectories and discover which experimental interventions help distinguish competing explanations.

**Key lesson:** A declining response curve does not identify its underlying mechanism.

Avoid presenting a single intervention, such as changing callers, as definitive proof of reliability learning.

### 3. The Invisible Response

Explore dissociations between acoustic recognition, physiological state, and overt behavior.

Allow users to investigate scenarios where an animal exhibits physiological changes without obvious freezing, flight, or other defensive actions.

Potential visualizations include synchronized behavioral and physiological timelines, animated state indicators, or comparisons between observable endpoints.

Ground examples in the manuscript.

**Key lesson:** Absence of an overt behavioral response does not imply absence of acoustic processing or physiological change.

---

## Secondary Experiences

Implement these if they strengthen the overall experience without compromising the primary modules.

**Same Sound, Different Context:** Compare two receivers exposed to the same sound but differing in experience, environment, or response opportunities. Highlight the limits of translating laboratory findings directly to field settings.

**Evidence Lens:** An interactive interpretation of the neural pathways in Figure 3. Let visitors distinguish causal evidence, neural activity evidence, and conceptual extrapolation, particularly across natural versus synthetic or conditioned sounds.

**Design an Experiment:** A lightweight interactive challenge where readers select manipulations and measurements to distinguish competing interpretations. Connect this experience to the outstanding questions in §7.

These are suggestions, not rigid requirements. The agent may combine, replace, or reinterpret modules when doing so improves clarity and engagement.

---

## Experience and Design Principles

### Exploratory, not instructional

Prefer intuitive controls and immediate visual feedback over lengthy tutorials. Visitors should understand a concept by manipulating it.

### Progressive disclosure

Start with accessible examples and progressively reveal equations, terminology, scientific explanations, and supporting references.

### Counterfactual reasoning

Encourage users to change one factor while holding others constant. Make the resulting conceptual differences obvious.

### Visual storytelling

Use thoughtful illustrations, motion, graphs, and subtle transitions to connect abstract ideas with animal behavior.

### Scientific integrity

Distinguish among:

- Findings supported by empirical evidence
- Theoretical interpretations
- Hypothetical or illustrative scenarios
- Outstanding research questions

The website must not imply that its hypothetical numerical outputs are biologically calibrated predictions.

### Connected to the manuscript

Provide unobtrusive links or expandable references to relevant manuscript sections and cited studies. The companion should encourage reading the paper rather than attempt to replace it.

### Approachable but intellectually serious

Aim for an experience that is engaging to students and accessible to scientists outside neuroethology, while retaining enough depth to reward experienced researchers.

---

## Visual Direction

Create a distinctive, polished scientific-editorial aesthetic.

The website should feel more like an interactive scientific feature or digital museum exhibit than a conventional academic website or engineering dashboard.

General preferences:

- Clean typography and generous whitespace
- Thoughtful, restrained color palette
- Elegant live plots and responsive controls
- Subtle, purposeful animation
- Occasional rodent, acoustic, or ecological imagery
- Minimal UI clutter
- Excellent desktop and mobile usability

Avoid excessive decorative neuroscience imagery, generic dashboards, and walls of explanatory text.

**The agent has creative freedom over layout, component design, visual language, navigation, and implementation technology.**

---

## Technical Expectations

- Build a fast, responsive, self-contained web experience.
- Prefer client-side interaction without requiring a backend.
- Use a maintainable component architecture.
- Ensure plots and visualizations respond smoothly to user input.
- Include sensible default states and reset functionality.
- Support keyboard navigation, accessible controls, and reduced-motion preferences.
- Avoid unnecessary dependencies or complex infrastructure.
- Organize references, scenario descriptions, and illustrative model assumptions so they can be updated as the manuscript evolves.

The agent may select the framework, charting libraries, visualization techniques, and deployment approach.

The most important outcome is improved intuition about the manuscript's framework—not mastery of an arbitrary simulation.

### Creative Freedom

Treat this specification as a design brief, not a prescribed implementation.

Use the manuscript to identify particularly compelling examples, relationships, or conceptual contrasts. Make independent decisions about presentation, interactivity, narrative structure, and technical implementation.

Feel free to introduce better visual metaphors, combine related concepts, or devise new interactions that make the material more engaging.

**Prioritize scientific fidelity, intuitive exploration, and exceptional design.**

# DESIGN.md — Brand & Design Guidelines
## Interpreting Acoustic Risk
*An Interactive Field Guide*

### 1. Brand Identity

**Core concept:** One sound. Many possible responses.

The website is an interactive learning companion to a scientific manuscript connecting field ethology and laboratory neuroscience.

Its visual identity should communicate curiosity, discovery, scientific rigor, and the complexity of biological interpretation.

**Creative direction: Field naturalist meets modern scientific visualization.**

Imagine the elegance of an illustrated natural-history publication combined with the interactivity of a contemporary data journalism feature.

The experience should feel:
- **Exploratory**, not instructional
- **Scientific**, not clinical
- **Organic**, not rustic
- **Sophisticated**, not institutional
- **Playful**, not childish
- **Precise**, without feeling like engineering software

Avoid generic neuroscience aesthetics, laboratory dashboard conventions, and excessive biological clip art.

### 2. Visual Language

The defining visual metaphor is **one acoustic input branching into multiple possible interpretations and responses**.

Use this idea subtly throughout the experience:
- Waveforms transitioning into branching pathways
- Diverging response trajectories
- Parallel behavioral and physiological timelines
- Simple ecological scenes with changing contextual elements
- Layered information that reveals itself through interaction

The same visual elements should help connect the different sections of the website.

Favor generous whitespace, elegant composition, and focused visualizations.

### 3. Color System

Use a warm, natural foundation with restrained scientific accents.

| Role               | Color              | Hex       |
| ------------------ | ------------------ | --------- |
| Background         | Warm paper         | `#F7F5EE` |
| Surface            | Soft white         | `#FFFFFF` |
| Primary text       | Deep charcoal-teal | `#162A2E` |
| Secondary text     | Slate              | `#55656A` |
| Primary accent     | Forest teal        | `#235B57` |
| Rapid response     | Terracotta         | `#A45139` |
| Learned evaluation | Muted blue         | `#4A71A3` |
| Action selection   | Dusty violet       | `#77609A` |
| History/updating   | Ochre              | `#8A621D` |
| Borders            | Warm gray          | `#D7DDD8` |

**Color principles:**
- The majority of the interface should remain neutral.
- Use accent colors to communicate meaning rather than decorate.
- Maintain consistent conceptual color associations throughout the site.
- Never rely on color alone to distinguish plotted data.
- Ensure accessible contrast, particularly in labels and interactive controls.

The agent may refine the palette for aesthetic cohesion and accessibility, but should preserve its warm, restrained character.

### 4. Typography

Use a deliberate contrast between editorial typography and technical information.

**Recommended fonts:**
- Headlines: **Newsreader** — elegant, scholarly serif
- Body/interface: **Inter** — legible, modern sans-serif
- Numbers/equations/data: **IBM Plex Mono** — technical precision

Typography should establish a clear hierarchy without excessive variation in size, weight, or color.

Use larger editorial headings to introduce conceptual questions, followed by short explanatory text.

Mathematical notation should be typeset cleanly and feel integrated with the design—not pasted in as an image.

Avoid long lines of text and dense academic paragraphs. This site complements the manuscript rather than reproducing it.

### 5. Illustration & Imagery

Illustrations should be scientifically respectful but stylistically simplified.

**Preferred style:**
- Minimal natural-history illustration
- Restrained linework with subtle texture
- Stylized but recognizable rodent anatomy
- Simple environments: burrows, vegetation, open field, laboratory enclosure
- Abstract acoustic waves and response pathways
- Light backgrounds with selective accent colors

Avoid:
- Cartoon mascots or anthropomorphic animals
- Photorealistic AI-generated laboratory scenes
- Generic glowing brains
- Excessive neural-network imagery
- Decorative stock photography
- Unnecessary 3D effects

Illustrations should clarify the environment, available responses, or manipulated experimental conditions.

They should not imply anatomical or behavioral precision beyond what the manuscript supports.

### 6. Interactive Components

Interactions are the heart of the experience.

**Sliders and selectors**
- Comfortable touch targets
- Immediate visual feedback
- Clear labels in accessible language
- Meaningful default values
- Easy reset functionality
- Short contextual explanations when needed

**Plots**
- Visually clean, with minimal gridlines
- Smooth transitions between states
- Clearly labeled axes
- Consistent visual encodings
- Prefer direct labels over complicated legends
- Tooltips should explain biological meaning, not merely report numbers

**Equations**
- Render with high-quality mathematical typography.
- Allow users to select or hover over terms to reveal explanations.
- Visually connect equation terms to relevant controls and plots.
- Distinguish evaluated action selection from rapid stimulus-locked responses.

**Contextual explanations**

Interactions should update a small, nearby explanation describing what has changed and why it matters.

These explanations should be concise, conceptually accurate, and avoid claiming that an illustrative model makes experimentally validated predictions.

### 7. Motion & Animation

Use animation to communicate causality, comparison, or transitions.

Good examples:
- A waveform propagating through a conceptual pathway
- A response curve updating as an input changes
- A behavioral state transitioning between alternatives
- A figure revealing a new explanatory layer

Motion should feel smooth, restrained, and purposeful.

Avoid constant background animations, excessive parallax, dramatic bouncing, or effects that distract from the content.

Respect reduced-motion accessibility settings.

### 8. Page Structure & Navigation

Favor a cohesive, editorial experience composed of several self-contained interactive sections.

Suggested progression:

1. **Introduction** — One sound, many possible responses
2. **Explore a Decision** — Equation 1 and the three demands
3. **Interpret a Decline** — Competing explanations for response changes
4. **Discover Hidden Responses** — Physiology versus observable behavior
5. **Explore the Evidence** — Connections between field and laboratory findings
6. **Read the Manuscript** — Direct access to the original work

This is a suggested narrative, not a mandatory layout.

Each experience should be approachable independently, with progressive disclosure for readers who want greater depth.

For desktop, favor generous visualization space and adjacent controls or explanations. For mobile, preserve a clear relationship between controls and their effects.

### 9. Writing & Editorial Voice

Use the tone of a thoughtful scientific guide.

**Voice attributes:** Curious, clear, precise, grounded, inviting.

Prefer questions that encourage investigation:

- "Why did the response fade?"
- "What changes when refuge is farther away?"
- "Can an animal respond without moving?"
- "Does recognizing danger determine what happens next?"

Avoid overly authoritative or dramatic language:

- "The animal computes..."
- "Fear level"
- "The correct defensive response"
- "This proves..."
- "The model predicts real behavior..."

Use scientifically appropriate qualifiers where evidence is incomplete.

Keep explanations short, but never simplify away distinctions central to the manuscript.

### 10. Scientific Visualization Standards

Scientific integrity is a foundational brand attribute.

Every visualization should distinguish appropriately between:

- **Empirical findings** — Grounded in published measurements
- **Conceptual illustrations** — Designed to explain relationships
- **Hypothetical scenarios** — Used to explore possible outcomes
- **Open questions** — Not yet resolved experimentally

Illustrative curves and numerical values must not appear to be empirical measurements.

Use visible but unobtrusive labels such as *Illustrative model* or *Conceptual example*.

Where useful, include expandable references to manuscript sections and supporting studies.

Avoid presenting a single unified neural mechanism for findings that the manuscript explicitly treats as cross-system comparisons.

The website should make uncertainty understandable, rather than hide it.

### 11. Accessibility & Responsiveness

- Support desktop, tablet, and mobile screens.
- Ensure keyboard accessibility for interactive controls.
- Use accessible color contrast.
- Provide labels and explanations for visualized data.
- Avoid color-only encodings.
- Respect reduced-motion preferences.
- Maintain readability without requiring hover interactions.
- Ensure mathematical expressions remain legible on small screens.

### 12. Design Quality Bar

The finished experience should feel like a carefully art-directed scientific publication, not a default component-library demonstration.

Avoid:
- Generic card grids
- Excessive rounded containers and colored badges
- Dashboard-style KPI tiles
- Dense slider panels
- Gratuitous gradients
- Heavy shadows
- Overuse of icons
- Unnecessary explanatory copy

Aim for a small number of visually exceptional, carefully considered interactions.

**The quality of the experience matters more than the quantity of features.**

### 13. Creative Freedom & Implementation

The agent has freedom to refine typography, colors, component treatments, responsive layouts, visual metaphors, animation techniques, and interaction patterns.

These guidelines establish a design identity, not a pixel-perfect specification.

The agent should actively evaluate the interface in a browser, inspect rendered layouts, and iterate rather than assuming that technically functional components are visually complete.

When a guideline conflicts with usability, accessibility, or scientific fidelity, prioritize those requirements.

---

## Final Creative Standard

The site should feel like **exploring a scientific idea rather than operating a scientific instrument**.

A visitor should enjoy manipulating it, discover something unexpected, and come away with a stronger conceptual understanding of how acoustic information becomes biologically significant.

The visual design should make the manuscript more approachable without making its scientific claims appear more certain than they are.