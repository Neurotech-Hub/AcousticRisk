import { useMemo } from 'react';
import { useInView } from '../hooks';

/** One acoustic input branching into several possible responses: the page's visual motif. */
export function Motif({ className = '' }: { className?: string }) {
  const [ref, seen] = useInView<SVGSVGElement>();

  const wave = useMemo(() => {
    const pts: string[] = [];
    const n = 90;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const env = Math.sin(Math.PI * Math.min(1, t * 1.05)) ** 0.8;
      const y = 100 + env * (Math.sin(t * 38) * 24 + Math.sin(t * 91 + 1) * 11 + Math.sin(t * 17) * 9);
      pts.push(`${i === 0 ? 'M' : 'L'}${(14 + t * 150).toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }, []);

  const branches = [
    { d: 'M170 100 C 250 100 270 38 372 38', color: 'var(--rapid)', label: 'React', y: 38 },
    { d: 'M170 100 C 250 100 290 100 372 100', color: 'var(--learned)', label: 'Predict', y: 100 },
    { d: 'M170 100 C 250 100 270 162 372 162', color: 'var(--action)', label: 'Decide', y: 162 },
  ];

  return (
    <svg
      ref={ref}
      className={`motif ${seen ? 'in' : ''} ${className}`}
      viewBox="0 0 470 200"
      role="img"
      aria-label="A sound wave on the left branches into three possible responses: react, predict, and decide."
    >
      <path d={wave} className="motif-wave" pathLength={1} />
      {branches.map((b, i) => (
        <g key={b.label}>
          <path d={b.d} className="motif-branch" style={{ stroke: b.color, animationDelay: `${0.5 + i * 0.18}s` }} pathLength={1} />
          <circle cx="376" cy={b.y} r="6.5" style={{ fill: b.color, animationDelay: `${1.1 + i * 0.18}s` }} className="motif-node" />
          <text x="392" y={b.y + 4.5} className="motif-label" style={{ animationDelay: `${1.2 + i * 0.18}s` }}>
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
