export interface PlotCondition {
  label: string;
  color: string;
  dash: string;
  values: number[];
}

interface Props {
  conditions: PlotCondition[];
  xLabel: string;
  yLabel: string;
  /** Draw a marker after this presentation (1-based). */
  splitAfter?: number;
  splitLabel?: string;
  description: string;
}

const W = 680;
const H = 320;
const M = { l: 56, r: 24, t: 34, b: 50 };

/** Schematic result of one experiment: relative response per presentation, one line per condition. */
export function ResultPlot({ conditions, xLabel, yLabel, splitAfter, splitLabel, description }: Props) {
  const n = Math.max(...conditions.map((c) => c.values.length));
  const x = (i: number) => M.l + ((i - 1) / Math.max(1, n - 1)) * (W - M.l - M.r);
  const y = (v: number) => M.t + (1 - v) * (H - M.t - M.b);
  const path = (vals: number[]) => vals.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i + 1).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const xTicks = Array.from({ length: n }, (_, i) => i + 1).filter((t) => n <= 10 || t === 1 || t % 5 === 0);

  return (
    <figure className="plot">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={description}>
        {[0, 0.5, 1].map((t) => (
          <g key={t}>
            <line x1={M.l} x2={W - M.r} y1={y(t)} y2={y(t)} className="plot-grid" />
            <text x={M.l - 10} y={y(t) + 4} textAnchor="end" className="plot-tick">
              {t}
            </text>
          </g>
        ))}
        {xTicks.map((t) => (
          <text key={t} x={x(t)} y={H - M.b + 20} textAnchor="middle" className="plot-tick">
            {t}
          </text>
        ))}
        <line x1={M.l} x2={W - M.r} y1={y(0)} y2={y(0)} className="plot-axis" />
        <text x={(M.l + W - M.r) / 2} y={H - 8} textAnchor="middle" className="plot-axis-label">
          {xLabel}
        </text>
        <text transform={`translate(14 ${(M.t + H - M.b) / 2}) rotate(-90)`} textAnchor="middle" className="plot-axis-label">
          {yLabel}
        </text>

        {splitAfter && (
          <>
            <line x1={x(splitAfter + 0.5)} x2={x(splitAfter + 0.5)} y1={M.t - 8} y2={y(0)} className="plot-split" />
            <text x={x(splitAfter + 0.5) + 6} y={M.t - 12} className="plot-split-label">
              {splitLabel}
            </text>
          </>
        )}

        {conditions.map((c) => (
          <g key={c.label} className="plot-series">
            <path d={path(c.values)} className="plot-line" style={{ stroke: c.color }} strokeDasharray={c.dash}>
              <title>{c.label}</title>
            </path>
            {c.values.map((v, i) => (
              <circle key={i} cx={x(i + 1)} cy={y(v)} r="4.5" style={{ fill: c.color }} className="plot-dot" />
            ))}
          </g>
        ))}
      </svg>
      <figcaption className="plot-key">
        {conditions.map((c) => (
          <span key={c.label} className="plot-key-item">
            <svg width="30" height="10" aria-hidden="true">
              <line x1="2" x2="28" y1="5" y2="5" stroke={c.color} strokeWidth="3" strokeDasharray={c.dash} strokeLinecap="round" />
            </svg>
            <span>{c.label}</span>
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
