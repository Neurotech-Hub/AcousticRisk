import { RodentGlyph } from './Logo';
import { ART_READY, graphic } from '../content/graphics';
import type { ActionId } from '../model/decision';

interface Props {
  winner: ActionId;
  /** 0 = refuge at hand, 1 = no refuge. */
  refuge: number;
  food: number;
  abrupt: boolean;
  label: string;
}

const POSE: Record<ActionId, 'forage' | 'vigilant' | 'freeze' | 'flee'> = {
  feed: 'forage',
  vigilance: 'vigilant',
  freeze: 'freeze',
  flee: 'flee',
};

const POSE_WORD: Record<ActionId, string> = {
  feed: 'feeding',
  vigilance: 'scanning upright',
  freeze: 'frozen in place',
  flee: 'running toward the burrow',
};

// Fixed pseudo-random grass so the scene does not shimmer between renders.
const GRASS = [42, 118, 196, 263, 331, 402, 477, 540, 596, 160, 365].map((x, i) => ({
  x,
  h: 12 + ((i * 7) % 11),
  l: (i % 3) - 1,
}));

const LOGO_FEET_X = 737; // bottom-center of the rodent inside the logo's coordinate space
const LOGO_FEET_Y = 500;
const SPRITE_SCALE = 0.2;

/** A small ecological scene: where the animal stands relative to refuge, how much food there is, and what it is doing. */
export function Scene({ winner, refuge, food, abrupt, label }: Props) {
  const lab = refuge >= 1;
  const burrowX = 78;
  const groundY = 178;
  const x = lab ? 330 : 170 + refuge * 390;
  const pose = POSE[winner];
  const fleeing = winner === 'flee';
  const spriteX = fleeing ? (lab ? x - 90 : burrowX + 70 + (x - burrowX - 70) * 0.35) : x;
  const seeds = Math.max(1, Math.round(food * 8));

  // Logo glyph needs a tilt to suggest pose; the illustrated sprites already carry it.
  const rot: Record<typeof pose, string> = ART_READY.rodentPoses
    ? { forage: 'rotate(0deg)', vigilant: 'rotate(0deg)', freeze: 'rotate(0deg)', flee: 'rotate(0deg)' }
    : {
        forage: 'rotate(7deg)',
        vigilant: 'rotate(-22deg)',
        freeze: 'rotate(0deg)',
        flee: 'rotate(-3deg)',
      };
  const origin = pose === 'vigilant' ? '640px 500px' : '737px 500px';
  // Scene-space size of the illustrated sprite; feet sit at the bottom center of the frame.
  const SPRITE_W = 168;
  const SPRITE_H = 126;

  return (
    <figure className="scene" aria-label={`${label}: ${POSE_WORD[winner]}, ${lab ? 'no refuge available' : 'refuge ' + (refuge < 0.35 ? 'close' : refuge < 0.7 ? 'at moderate distance' : 'far away')}`}>
      <svg viewBox="0 0 640 230" role="img" aria-hidden="true" focusable="false">
        {ART_READY.scenes && (
          <image href={graphic(lab ? 'scene-lab.png' : 'scene-field.png')} x="0" y="0" width="640" height="230" preserveAspectRatio="xMidYMid slice" />
        )}
        {!ART_READY.scenes && (
          <>
            {/* ground */}
            <path d={`M0 ${groundY} C 120 ${groundY - 7} 260 ${groundY + 4} 400 ${groundY - 3} S 600 ${groundY + 3} 640 ${groundY - 2} V230 H0Z`} className="scene-ground" />
            {GRASS.map((g, i) => (
              <path
                key={i}
                d={`M${g.x} ${groundY + 3} q -1 ${-g.h * 0.5} -6 ${-g.h} M${g.x} ${groundY + 3} q 1 ${-g.h * 0.6} ${g.l * 2} ${-g.h * 1.15} M${g.x} ${groundY + 3} q 2 ${-g.h * 0.45} 6 ${-g.h * 0.85}`}
                className="scene-grass"
              />
            ))}
            {lab ? (
              <g>
                <rect x="40" y="46" width="560" height={groundY - 46 + 30} rx="10" className="scene-glass" />
                <path d={`M40 ${groundY + 10} H600`} className="scene-glass-line" />
                <text x="320" y="72" textAnchor="middle" className="scene-note">
                  enclosure: nowhere to run to
                </text>
              </g>
            ) : (
              <g>
                {/* burrow */}
                <path d={`M20 ${groundY + 8} C 24 ${groundY - 34} 130 ${groundY - 34} 136 ${groundY + 8}Z`} className="scene-mound" />
                <ellipse cx={burrowX} cy={groundY + 3} rx="26" ry="15" className="scene-hole" />
                <text x={burrowX} y={groundY + 36} textAnchor="middle" className="scene-note">
                  burrow
                </text>
              </g>
            )}
          </>
        )}

        {/* food: seeds scattered around where the animal stands */}
        {!ART_READY.scenes &&
          Array.from({ length: seeds }, (_, i) => (
            <ellipse key={i} cx={x + 46 + ((i * 17) % 52)} cy={groundY + 9 + ((i * 5) % 14)} rx="3.2" ry="2" className="scene-seed" />
          ))}

        {/* sound arriving from the upper right */}
        <g className={`scene-sound ${abrupt ? 'abrupt' : ''}`} transform={abrupt ? 'translate(612 46)' : 'translate(598 38)'}>
          {abrupt ? (
            <>
              <path d="M0 0 l-16 -6 l6 10 l-18 -2 l14 10 l-14 4 l20 2 l-8 8" className="scene-burst" />
              <circle r="4" className="scene-source" />
            </>
          ) : (
            <>
              <circle r="21" className="scene-badge" />
              {/* speaker with sound waves (Lucide "volume-2", 24-unit grid, centered) */}
              <g className="scene-speaker" transform="translate(-12 -12)">
                <path d="M11 5 6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </g>
            </>
          )}
        </g>

        {/* animal */}
        <g className="sprite-pos" style={{ transform: `translate(${spriteX}px, ${groundY + 39}px)` }}>
          <g key={abrupt ? 'flinch' : 'calm'} className={`sprite ${abrupt ? 'flinch' : ''}`}>
            {ART_READY.rodentPoses ? (
              <g transform={fleeing ? 'scale(-1 1)' : undefined}>
                <g className="sprite-pose" style={{ transform: rot[pose], transformOrigin: `0px 0px` }}>
                  <image
                    href={graphic(`rodent-${pose}.png`)}
                    x={-SPRITE_W / 2}
                    y={-SPRITE_H}
                    width={SPRITE_W}
                    height={SPRITE_H}
                    preserveAspectRatio="xMidYMax meet"
                  />
                </g>
              </g>
            ) : (
              <g transform={`${fleeing ? 'scale(-1 1)' : ''} scale(${SPRITE_SCALE}) translate(${-LOGO_FEET_X} ${-LOGO_FEET_Y})`}>
                <g className="sprite-pose" style={{ transform: rot[pose], transformOrigin: origin }}>
                  <RodentGlyph />
                </g>
              </g>
            )}
            {abrupt && <path d="M26 -62 l8 -9 M38 -56 l12 -4 M20 -68 l-2 -12" className="scene-startle" />}
          </g>
        </g>
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
