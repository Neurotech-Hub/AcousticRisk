import type { ReactElement } from 'react';

export type IconName =
  | 'react'
  | 'predict'
  | 'decide'
  | 'update'
  | 'context'
  | 'experience'
  | 'risk'
  | 'refuge'
  | 'reset'
  | 'play'
  | 'pause'
  | 'info'
  | 'external';

const P: Record<IconName, ReactElement> = {
  // five vertical bars: an acoustic burst
  react: (
    <>
      <path d="M4 12v0M8 8v8M12 4v16M16 8v8M20 12v0" />
    </>
  ),
  // a curve that continues as a dashed forecast
  predict: (
    <>
      <path d="M3 17c3 0 4-9 8-9 2 0 3 2 4 4" />
      <path d="M15 12c1.5 3 3 4 6 4" strokeDasharray="2 2.4" />
      <circle cx="11" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // a fork
  decide: (
    <>
      <path d="M12 21v-7" />
      <path d="M12 14c0-4-6-4-6-9M12 14c0-4 6-4 6-9" />
      <path d="M4 7l2-2 2 2M16 7l2-2 2 2" />
    </>
  ),
  // a cycle
  update: (
    <>
      <path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </>
  ),
  // grass blades
  context: (
    <>
      <path d="M5 21c0-6 1-9 3-12M12 21c0-7-1-11-3-15M12 21c0-7 1-10 4-13M19 21c0-5-1-8-3-10" />
    </>
  ),
  // a clock
  experience: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  // a warning triangle
  risk: (
    <>
      <path d="M12 3.5 21.5 20h-19z" />
      <path d="M12 10v4.5M12 17.6v.2" />
    </>
  ),
  // a burrow entrance
  refuge: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20v-5a6 6 0 0 1 12 0v5" />
      <path d="M10 20v-3a2 2 0 0 1 4 0v3" />
    </>
  ),
  reset: (
    <>
      <path d="M4 12a8 8 0 1 0 2.5-5.8" />
      <path d="M4 4v5h5" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  pause: <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" stroke="none" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.6v.2" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5H5V6h5" />
    </>
  ),
};

interface Props {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {P[name]}
    </svg>
  );
}
