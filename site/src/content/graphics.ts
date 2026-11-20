// AI-generated artwork manifest. See site/GRAPHICS.md for the ChatGPT prompt
// that produces each file.
//
// Every file in public/graphics/ ships as a labeled placeholder. To replace
// one, save the generated image under the same filename. Assets that have an
// in-code fallback (the decision scene and rodent sprites) stay on the
// fallback until you flip their flag below to true.

const BASE = import.meta.env.BASE_URL;

export const graphic = (file: string) => `${BASE}graphics/${file}`;

export const ART_READY = {
  /** scene-field.png and scene-lab.png replace the drawn ground, burrow, and food. */
  scenes: true,
  /** rodent-{forage,vigilant,freeze,flee}.png replace the sprite drawn from the logo mark. */
  rodentPoses: true,
};
