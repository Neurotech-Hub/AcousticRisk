import { useState } from 'react';
import { Section } from '../components/Section';
import { Equation } from '../components/Equation';
import { Slider } from '../components/Controls';
import { Bars } from '../components/Bars';
import { Scene } from '../components/Scene';
import { Callout, Illustrative } from '../components/Callout';
import { ManuscriptLink, Sources } from '../components/Refs';
import { ACTIONS, ASSUMPTION_NOTES, IGNORED_LOSS } from '../content/assumptions';
import {
  DEFAULT_SOUND,
  EXPOSED_CONTEXT,
  FIELD_CONTEXT,
  LAB_CONTEXT,
  costBreakdown,
  evaluate,
  type ActionId,
  type Context,
} from '../model/decision';

const f2 = (x: number) => x.toFixed(2);
const sign = (x: number) => (x >= 0 ? '+' : '\u2212') + Math.abs(x).toFixed(2);

const PRESETS: { id: string; label: string; danger?: number; ctx: Context }[] = [
  { id: 'field', label: 'Near the burrow', danger: 0, ctx: FIELD_CONTEXT },
  { id: 'exposed', label: 'Exposed and hungry', ctx: EXPOSED_CONTEXT },
  { id: 'lab', label: 'Lab enclosure', ctx: LAB_CONTEXT },
];

const NAME: Record<ActionId, string> = { feed: 'keeps feeding', vigilance: 'scans', freeze: 'freezes', flee: 'flees' };

const SOURCES = ['LimaDill1990', 'YdenbergDill1986', 'DayanEtAl2006', 'RigoliEtAl2016', 'MongeauEtAl2003', 'BaackSwitzer2000', 'LimaBednekoff1999'];

export function Decision() {
  const [danger, setDanger] = useState(0.3);
  const [ctx, setCtx] = useState<Context>({ ...FIELD_CONTEXT, refuge: 0.85, food: 0.6, actions: { ...FIELD_CONTEXT.actions } });
  const [hover, setHover] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);

  const sound = { ...DEFAULT_SOUND, danger };
  const result = evaluate(sound, ctx);
  const s = result.scores.find((x) => x.id === result.winner)!;
  const parts = costBreakdown(ctx, result.winner);
  const runnerUp = [...result.scores].sort((a, b) => b.net - a.net)[1];
  const lab = ctx.refuge >= 1;

  const set = (patch: Partial<Context>) => setCtx((c) => ({ ...c, ...patch }));

  return (
    <Section
      id="decision"
      index="02"
      eyebrow="Explore a decision"
      title="Same sound. Different circumstances. Different choice?"
      lead="Recognizing danger and deciding what to do about it are separate problems. Move the animal’s circumstances and watch its choice change."
    >
      <div className="stage">
        <div className="stage-visual">
          <Scene winner={result.winner} refuge={ctx.refuge} food={ctx.food} abrupt={false} label="The receiver" />
          <div className="stage-presets presets" role="group" aria-label="Starting circumstances">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`btn-quiet ${
                  ctx.refuge === p.ctx.refuge &&
                  ctx.food === p.ctx.food &&
                  (p.danger === undefined || danger === p.danger)
                    ? 'on'
                    : ''
                }`}
                onClick={() => {
                  setCtx({ ...p.ctx, actions: { ...p.ctx.actions } });
                  if (p.danger !== undefined) setDanger(p.danger);
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="stage-controls">
          <Slider
            label="How dangerous does the sound seem?"
            value={danger}
            onChange={setDanger}
            low="harmless"
            high="almost certainly dangerous"
            tone="var(--learned)"
          />
          <Slider
            label="Distance to refuge"
            value={ctx.refuge}
            onChange={(v) => set({ refuge: v })}
            low="at the burrow"
            high="no refuge"
            tone="var(--action)"
          />
          <Slider
            label="How much is the food worth?"
            value={ctx.food}
            onChange={(v) => set({ food: v })}
            low="little"
            high="a great deal"
            tone="var(--action)"
          />
        </div>

        <div className="stage-body">
          <p className="stage-verdict" aria-live="polite">
            The animal <strong>{NAME[result.winner]}</strong>
            {result.winner !== 'feed' && runnerUp && (
              <span className="hint">
                {' '}
                · next best: {runnerUp.label.toLowerCase()} ({sign(runnerUp.net)})
              </span>
            )}
          </p>
          <Bars scores={result.scores} winner={result.winner} />
          <p className="scene-caption">
            <span className="mono">p = {f2(result.p)}</span>
            <span>
              {lab ? 'Nowhere to run.' : ctx.refuge < 0.35 ? 'Refuge is close.' : ctx.refuge < 0.7 ? 'Refuge is some way off.' : 'Refuge is far.'}
            </span>
            <Illustrative />
          </p>
        </div>
      </div>

      <Callout tone="lesson" title="The point">
        The sound did not change. What changed was whether acting was worth it. A behavioral response is therefore not a direct
        measure of how threatening a sound is.
      </Callout>

      <details className="formulation">
        <summary>The rule behind the choice (Equation 1)</summary>
        <Equation active={hover ?? pin} pinned={pin} onHover={setHover} onPin={setPin} pulse={null} />
        <p className="arith mono">
          <span className="arith-name">{s.label}</span>
          {s.id === 'feed' ? (
            <>
              {' '}
              food {f2(parts.foodValue)} − {f2(result.p)} × {f2(IGNORED_LOSS)} (loss if danger is real) = {sign(s.net)}
            </>
          ) : (
            <>
              {' '}
              {f2(result.p)} × {f2(parts.avoided)} − ({f2(parts.base)}
              {parts.foodWeight > 0 && ` + ${f2(parts.foodWeight)} × ${f2(parts.foodValue)}`}
              {parts.refugeWeight > 0 && ` + ${f2(parts.refugeWeight)} × ${f2(ctx.refuge)}`}) = {sign(s.net)}
            </>
          )}
        </p>
        <p className="hint">Arithmetic for the highest-scoring action. Rapid, stimulus-locked defense (startle) sits outside this expression.</p>
        <div className="table-wrap">
          <table>
            <caption>Illustrative constants (arbitrary units)</caption>
            <thead>
              <tr>
                <th scope="col">Action</th>
                <th scope="col">ΔL (at p = 1)</th>
                <th scope="col">Base cost</th>
                <th scope="col">Cost per food value</th>
                <th scope="col">Cost per refuge distance</th>
              </tr>
            </thead>
            <tbody>
              {ACTIONS.filter((a) => a.id !== 'feed').map((a) => (
                <tr key={a.id}>
                  <th scope="row">{a.label}</th>
                  <td className="mono">{f2(a.avoided)}</td>
                  <td className="mono">{f2(a.baseCost)}</td>
                  <td className="mono">{f2(a.foodCost)}</td>
                  <td className="mono">{f2(a.refugeCost)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="hint">
          {ASSUMPTION_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </details>

      <div className="module-foot">
        <ManuscriptLink section="demands" />
        <Sources keys={SOURCES} />
      </div>
    </Section>
  );
}
