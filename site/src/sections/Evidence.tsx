import { useState } from 'react';
import { Section } from '../components/Section';
import { Switch } from '../components/Controls';
import { Callout } from '../components/Callout';
import { Cite, ManuscriptLink, Sources } from '../components/Refs';
import { CORE_EDGES, CORE_NODES, PathwayMap, type Selection } from '../components/PathwayMap';
import { CLASSES, displayClass, type EvidenceClass } from '../content/pathways';

const ALL: Record<EvidenceClass, boolean> = { C1: true, C2: true, C3: true, C4: true, C5: true };
/** Causal or activity evidence that used a natural sound (a call or another natural sound). */
const NATURAL: Record<EvidenceClass, boolean> = { C1: true, C2: true, C3: false, C4: true, C5: false };

const nodeLabel = (id: string) => CORE_NODES.find((n) => n.id === id)!.label;

const SOURCES = [...new Set([...CORE_EDGES.flatMap((e) => e.refs), ...CORE_NODES.flatMap((n) => n.evidence?.refs ?? [])])];

function Sample({ stroke, width, dash }: { stroke: string; width: number; dash: string }) {
  return (
    <svg width="34" height="10" aria-hidden="true">
      <line x1="2" x2="32" y1="5" y2="5" stroke={stroke} strokeWidth={width} strokeDasharray={dash} />
    </svg>
  );
}

export function Evidence() {
  const [natural, setNatural] = useState(false);
  const [sel, setSel] = useState<Selection>({ kind: 'edge', id: 'mgb-freeze' });

  const edge = sel?.kind === 'edge' ? CORE_EDGES.find((e) => e.id === sel.id) : undefined;
  const node = sel?.kind === 'node' ? CORE_NODES.find((n) => n.id === sel.id) : undefined;
  const cls = edge && edge.classes.length ? displayClass(edge.classes)! : null;

  return (
    <Section
      id="evidence"
      index="05"
      eyebrow="Explore the evidence"
      title="What does each connection rest on?"
      lead="The route from sound to response is pieced together across species and preparations. Heavier lines carry stronger evidence; dashed and dotted lines mean the sound was synthetic, or the evidence only shows activity. Select a line to read it."
    >
      <div className="evidence-stage">
        <div className="evidence-top">
          <ul className="legend" aria-label="Line styles">
            {CLASSES.map((c) => (
              <li key={c.id}>
                <Sample stroke={c.stroke} width={c.width} dash={c.dash} /> {c.short}
              </li>
            ))}
          </ul>
          <div className="evidence-filter">
            <Switch label="Only natural sounds" checked={natural} onChange={setNatural} />
          </div>
        </div>

        <PathwayMap active={natural ? NATURAL : ALL} selection={sel} onSelect={setSel} />

        <aside className="detail" aria-live="polite" aria-label="Evidence details">
          {edge && (
            <>
              <p className="detail-kicker">
                <span className="detail-tag">Selected connection</span>
                {nodeLabel(edge.from)} <span aria-hidden="true">{'\u2192'}</span>
                <span className="sr-only">to</span> {nodeLabel(edge.to)}
              </p>
              <h3>{edge.title}</h3>
              <p className="detail-class">
                {cls ? (
                  <>
                    <Sample stroke={cls.stroke} width={cls.width} dash={cls.dash} /> {cls.label}
                  </>
                ) : (
                  'Background anatomy, not coded as evidence.'
                )}
              </p>
              <p>
                {edge.text}
                {edge.limit && <> <strong>Limit:</strong> {edge.limit}</>}
              </p>
              {edge.refs.length > 0 && (
                <p className="hint">
                  <Cite keys={edge.refs} />
                </p>
              )}
            </>
          )}
          {node && (
            <>
              <p className="detail-kicker">
                <span className="detail-tag">Selected structure</span>
              </p>
              <h3>
                {node.label}
                {node.sub ? ` (${node.sub})` : ''}
              </h3>
              {node.note && <p>{node.note}</p>}
              {node.evidence && (
                <>
                  <p>{node.evidence.text}</p>
                  <p className="hint">
                    <Cite keys={node.evidence.refs} />
                  </p>
                </>
              )}
              {!node.note && !node.evidence && <p>Select one of its connections to see the evidence.</p>}
            </>
          )}
          <p className="detail-hint">Select any line or box on the map to read its evidence.</p>
        </aside>
      </div>

      <Callout tone="lesson" title="The point">
        Most causal pathway work used conditioned or synthetic sounds. A result with a tone does not by itself describe how a natural
        alarm call is processed; extending it is a conceptual step.
      </Callout>

      <div className="module-foot">
        <ManuscriptLink section="mechanisms" />
        <Sources keys={SOURCES} />
      </div>
    </Section>
  );
}
