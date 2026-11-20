import logo from '../content/logo.json';

interface Props {
  className?: string;
  /** Accessible name. Omit when the mark is purely decorative next to text. */
  title?: string;
}

/**
 * The brand mark (brand/AcousticRisk_logoMark.svg), inlined so it can be
 * recolored: the artwork's black is currentColor and its white knockout is the
 * page background (--knockout).
 */
export function Logo({ className, title }: Props) {
  return (
    <svg
      className={className}
      viewBox={logo.viewBox}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={logo.wave} fill="currentColor" />
      {logo.body.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="currentColor"
          stroke="var(--knockout, var(--bg))"
          strokeWidth={6}
          strokeMiterlimit={10}
        />
      ))}
      <path d={logo.eye} fill="var(--knockout, var(--bg))" />
      <circle cx={logo.nose.cx} cy={logo.nose.cy} r={logo.nose.r} fill="var(--knockout, var(--bg))" />
    </svg>
  );
}

/** Rodent only (the brand mark's body, ear, and eye), for the animated scene sprite. */
export function RodentGlyph({ className }: { className?: string }) {
  return (
    <g className={className}>
      {logo.body.map((d, i) => (
        <path key={i} d={d} fill="currentColor" stroke="var(--knockout, var(--bg))" strokeWidth={6} strokeMiterlimit={10} />
      ))}
      <path d={logo.eye} fill="var(--knockout, var(--bg))" />
      <circle cx={logo.nose.cx} cy={logo.nose.cy} r={logo.nose.r} fill="var(--knockout, var(--bg))" />
    </g>
  );
}
