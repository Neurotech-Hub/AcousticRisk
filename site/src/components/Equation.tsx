import { useEffect, useMemo, useRef, useState } from 'react';
import katex from 'katex';

export interface TermInfo {
  id: string;
  tex: string;
  name: string;
  meaning: string;
  demand: string;
  /** Names of the controls that feed this term. */
  controls: string;
}

export const TERMS: TermInfo[] = [
  {
    id: 'p',
    tex: 'p_t(D\\mid x_t,k)',
    name: 'Predicted danger',
    meaning:
      'The receiver’s current prediction that danger will follow this sound. It is not a measurable ground truth. Learned threat evaluation lives here, and experience revises it.',
    demand: 'Predict',
    controls: 'Predicted danger, Caller history',
  },
  {
    id: 'k',
    tex: 'k',
    name: 'Caller or source',
    meaning:
      'Who is calling, when the receiver can tell. A caller’s reliability history revises the prediction, in opposite directions in different species.',
    demand: 'Predict',
    controls: 'Caller history',
  },
  {
    id: 'dl',
    tex: '\\Delta L(a)',
    name: 'Loss avoided',
    meaning: 'What an action saves relative to doing nothing. Fleeing can avoid more than scanning, if danger is real.',
    demand: 'Decide',
    controls: 'Fixed in this model (see assumptions)',
  },
  {
    id: 'c',
    tex: 'C(a\\mid e_t,H_t)',
    name: 'Cost of acting',
    meaning:
      'What the action costs in current conditions and given recent history: lost feeding, exposure on the way to refuge. Flexible action selection lives here.',
    demand: 'Decide',
    controls: 'Refuge, Feeding value, Recent alarms',
  },
  {
    id: 'e',
    tex: 'e_t',
    name: 'Current conditions',
    meaning: 'Food, refuge, social setting, and energetic state at this moment.',
    demand: 'Decide',
    controls: 'Distance to refuge, Value of feeding',
  },
  {
    id: 'h',
    tex: 'H_t',
    name: 'Recent history',
    meaning: 'The recent history of danger and feeding. Frequent alarms change how costly it is to keep stopping.',
    demand: 'Update',
    controls: 'Recent alarms',
  },
  {
    id: 'A',
    tex: '\\mathcal{A}',
    name: 'Available actions',
    meaning: 'The set of feasible responses, from orienting and vigilance to freezing, escape, or continued feeding.',
    demand: 'Decide',
    controls: 'Available actions',
  },
];

const EQ_TEX =
  'a_t^{*}\\in\\arg\\max_{\\htmlClass{eq eq-A}{a\\in\\mathcal{A}}}\\Big[\\,' +
  '\\htmlClass{eq eq-p}{p_t(D\\mid x_t,\\htmlClass{eq eq-k}{k})}\\,' +
  '\\htmlClass{eq eq-dl}{\\Delta L(a)}\\;-\\;' +
  '\\htmlClass{eq eq-c}{C(a\\mid \\htmlClass{eq eq-e}{e_t},\\htmlClass{eq eq-h}{H_t})}\\Big]';

const render = (tex: string, display: boolean) =>
  katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    trust: (c) => c.command === '\\htmlClass',
    output: 'htmlAndMathml',
  });

function termOf(el: EventTarget | null): string | null {
  const node = (el as HTMLElement | null)?.closest?.('.eq');
  if (!node) return null;
  const c = [...node.classList].find((x) => x.startsWith('eq-'));
  return c ? c.slice(3) : null;
}

interface Props {
  active: string | null;
  pinned: string | null;
  onHover: (t: string | null) => void;
  onPin: (t: string | null) => void;
  pulse: { term: string; n: number } | null;
}

export function Equation({ active, pinned, onHover, onPin, pulse }: Props) {
  const html = useMemo(() => render(EQ_TEX, true), []);
  const [pulsing, setPulsing] = useState<string | null>(null);
  const timer = useRef<number>(0);

  useEffect(() => {
    if (!pulse) return;
    setPulsing(pulse.term);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPulsing(null), 1100);
    return () => window.clearTimeout(timer.current);
  }, [pulse]);

  const info = TERMS.find((t) => t.id === active);

  return (
    <div className="equation-block">
      <div className="equation-head">
        <span className="eyebrow">Equation 1</span>
        <span className="mono small">a heuristic, not a fitted model</span>
      </div>
      <div
        className="equation"
        data-active={active ?? undefined}
        data-pulse={pulsing ?? undefined}
        role="img"
        aria-label="Equation 1. The chosen action a star at time t is any action a in the set of available actions that maximizes predicted danger p t of D given x t and k, times the loss avoided Delta L of a, minus the cost C of a given current conditions e t and recent history H t."
        onMouseOver={(e) => onHover(termOf(e.target))}
        onMouseLeave={() => onHover(null)}
        onClick={(e) => {
          const t = termOf(e.target);
          if (t) onPin(pinned === t ? null : t);
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="term-chips" role="group" aria-label="Terms of Equation 1">
        {TERMS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`term-chip term-${t.id} ${active === t.id ? 'on' : ''}`}
            aria-pressed={pinned === t.id}
            onMouseEnter={() => onHover(t.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(t.id)}
            onBlur={() => onHover(null)}
            onClick={() => onPin(pinned === t.id ? null : t.id)}
          >
            <span dangerouslySetInnerHTML={{ __html: render(t.tex, false) }} aria-hidden="true" />
            <span className="sr-only">{t.name}</span>
          </button>
        ))}
      </div>
      <div className="term-note" aria-live="polite">
        {info ? (
          <>
            <p>
              <strong>{info.name}</strong> <span className="demand-tag">{info.demand}</span>
            </p>
            <p>{info.meaning}</p>
            <p className="hint">Fed by: {info.controls}</p>
          </>
        ) : (
          <p className="hint">Hover, focus, or tap a term to see what it means and which controls move it.</p>
        )}
      </div>
    </div>
  );
}
