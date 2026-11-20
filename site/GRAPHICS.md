# Artwork for the companion site

Every file below ships as a labeled placeholder in `public/graphics/` (made by `scripts/make_placeholders.py`). To replace one, give ChatGPT the prompt, then save its output **under the same filename and at the same pixel size**. The script never overwrites existing files, so real artwork is safe if you rerun it.

Style for all of them: the look of `docs/COMPANION.jpg` (calm, warm paper background `#F7F5EE`, soft naturalistic illustration, muted greens and ochres, no text, no logo, no border).

The logo is **not** generated. It is `brand/AcousticRisk_logoMark.svg`, already used in the header, hero, and footer.

## Where each one appears

| File | Size | Transparent | Used now? |
| --- | --- | --- | --- |
| `hero-field.png` | 2400 x 900 | no | Yes, behind the hero (faded). |
| `scene-field.png` | 2400 x 700 | no | After you set `ART_READY.scenes = true`. |
| `scene-lab.png` | 1200 x 700 | no | After you set `ART_READY.scenes = true`. |
| `rodent-forage.png` | 800 x 600 | yes | After you set `ART_READY.rodentPoses = true`. |
| `rodent-vigilant.png` | 800 x 600 | yes | After you set `ART_READY.rodentPoses = true`. |
| `rodent-freeze.png` | 800 x 600 | yes | After you set `ART_READY.rodentPoses = true`. |
| `rodent-flee.png` | 800 x 600 | yes | After you set `ART_READY.rodentPoses = true`. |
| `og-image.png` | 1200 x 630 | no | Yes, as the social share card (link previews). |
| `species-rat.png`, `species-spinymouse.png`, `species-vole.png`, `species-groundsquirrel.png` | 600 x 600 | yes | Yes, as row portraits in the lab-vs-field matrix (Section 04). |
| `species-chipmunk.png` | 600 x 600 | yes | Yes, as the chipmunk row portrait in the lab-vs-field matrix (Section 04). |
| `species-graysquirrel.png` | 600 x 600 | yes | Yes, as the gray squirrel row portrait in the lab-vs-field matrix (Section 04). |

Both `ART_READY` flags are on. If you need to drop back to the drawn fallback (ground, burrow, seeds, and a rodent sprite taken from the logo mark), set them to `false` in `src/content/graphics.ts`.

All listed graphics are in place. If another is added later, put its prompt here first.

## Prompts

**hero-field.png** (2400 x 900)
> A wide, soft illustration of a small rodent sitting on a rock in open grassland at dawn, seen from the side, in the style of COMPANION.jpg. Keep the left 55% calm and uncluttered (the title goes there). Warm paper tones, no text, no logo. Export 2400 x 900 px.

**rodent-forage.png, rodent-vigilant.png, rodent-freeze.png, rodent-flee.png** (800 x 600 each, transparent)
> The same small rodent, drawn identically in each image, in four poses: (1) head down, foraging; (2) upright on hind legs, scanning; (3) motionless and low, frozen; (4) mid-run, stretched out. Side view, facing right, feet resting at the bottom center of the frame, transparent background, flat soft shading, no ground, no shadow, no text. Export each as 800 x 600 px PNG named rodent-forage.png, rodent-vigilant.png, rodent-freeze.png, rodent-flee.png.

**scene-field.png** (2400 x 700)
> A wide, empty field scene for an animal to be placed on: a burrow entrance at the far left edge, open grass and ground across the middle, and a small patch of seeds near the right. A pale sky above, horizon about 70% down. No animals, no text. Warm paper palette as in COMPANION.jpg. Export 2400 x 700 px.

**scene-lab.png** (1200 x 700)
> A plain laboratory enclosure seen from the side: clear walls, a bare floor, nowhere to hide, a faint hint of a speaker at the upper right. No animals, no text, same warm palette and drawing style as the field scene. Export 1200 x 700 px.

**species-rat.png, species-spinymouse.png, species-vole.png, species-groundsquirrel.png** (600 x 600 each, transparent)
> Four small portraits in one consistent style: a laboratory rat, a spiny mouse, a vole, and a Belding's ground squirrel. Three-quarter view, head and shoulders, calm expression, transparent background, flat soft shading, no text. Export 600 x 600 px PNGs named species-rat.png, species-spinymouse.png, species-vole.png, species-groundsquirrel.png.

**species-chipmunk.png** (600 x 600, transparent)
> One small portrait matching the existing species portraits exactly in style: an eastern chipmunk, three-quarter view, head and shoulders, calm expression, transparent background, flat soft shading, no text. Export a 600 x 600 px PNG named species-chipmunk.png.

**species-graysquirrel.png** (600 x 600, transparent)
> One small portrait matching the existing species portraits exactly in style (same line weight, soft shading, palette, and framing as species-rat.png, species-vole.png, species-spinymouse.png, and species-groundsquirrel.png): an eastern gray squirrel (Sciurus carolinensis), three-quarter view, head and shoulders, alert but calm expression, gray-brown fur with a paler belly and a hint of the bushy tail edge, transparent background, flat soft shading, no text. Export a 600 x 600 px PNG named species-graysquirrel.png.

**og-image.png** (1200 x 630)
> A social share card in the style of COMPANION.jpg: a quiet grassland scene with a small rodent on the right third and a soft sound-wave motif fading in from the left. Keep a clear area on the left (about 40%) empty for the logo and title, which will be added afterward. No text. Export 1200 x 630 px.

## Switching to the real art

1. Save the files over the placeholders (same names and sizes).
2. In `src/content/graphics.ts`, set `scenes: true` and/or `rodentPoses: true` when the scene and sprite images are in place.
3. Check the decision scene in the browser. The sprite is positioned in code from its feet at the bottom center of the frame, so keep the feet there. If a pose sits too high or low, adjust `LOGO_FEET_X`, `LOGO_FEET_Y`, and the `<image>` offsets in `src/components/Scene.tsx`.
4. For `og-image.png`, composite the mark and title onto the clear area before publishing.
