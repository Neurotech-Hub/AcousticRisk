import type { ActionId, ActionScore } from '../model/decision';

interface Props {
  scores: ActionScore[];
  winner: ActionId;
  max?: number;
}

const sign = (x: number) => (x >= 0 ? '+' : '\u2212') + Math.abs(x).toFixed(2);

/** Per-action benefit and cost bars with the net score at right. */
export function Bars({ scores, winner, max = 1.4 }: Props) {
  return (
    <div className="bars" role="list" aria-label="Net score for each action">
      {scores.map((s) => {
        const isWin = s.id === winner;
        return (
          <div
            key={s.id}
            role="listitem"
            className={`bar-row ${isWin ? 'win' : ''} ${s.available ? '' : 'off'}`}
            aria-label={`${s.label}: benefit ${s.benefit.toFixed(2)}, cost ${s.cost.toFixed(2)}, net ${sign(s.net)}${isWin ? ', highest' : ''}${s.available ? '' : ', not available'}`}
          >
            <span className="bar-name">
              {s.label}
              {/* One reserved line, so a row is the same height whether or not it is tagged. */}
              <em className={`bar-tag ${isWin ? 'win-tag' : !s.available ? 'off-tag' : ''}`}>
                {isWin ? 'highest' : !s.available ? 'unavailable' : '\u00a0'}
              </em>
            </span>
            <span className="bar-tracks" aria-hidden="true">
              <span className="bar-line">
                <span className="bar-label">Benefit</span>
                <span className="bar-track">
                  <span className="bar benefit" style={{ width: `${Math.min(100, (s.benefit / max) * 100)}%` }} />
                </span>
              </span>
              <span className="bar-line">
                <span className="bar-label">Cost</span>
                <span className="bar-track">
                  <span className="bar cost" style={{ width: `${Math.min(100, (s.cost / max) * 100)}%` }} />
                </span>
              </span>
            </span>
            <span className="bar-net mono">
              <span className="bar-net-label">net</span>
              {sign(s.net)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
