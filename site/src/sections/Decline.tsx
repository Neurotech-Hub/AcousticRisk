import { useRef, useState } from 'react';
import { Section } from '../components/Section';
import { ResultPlot } from '../components/ResultPlot';
import { Callout, Illustrative } from '../components/Callout';
import { Cite, ManuscriptLink, Sources } from '../components/Refs';
import { EXPERIMENTS, EXPLANATIONS, SOURCES } from '../content/experiments';

const SETTING_LABEL = { field: 'Field', lab: 'Lab' } as const;

export function Decline() {
  const [id, setId] = useState(EXPERIMENTS[0].id);
  const exp = EXPERIMENTS.find((e) => e.id === id)!;
  const stage = useRef<HTMLDivElement>(null);
  const jump = (eid: string) => {
    setId(eid);
    stage.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Section
      id="decline"
      index="03"
      eyebrow="Interpret a decline"
      title="Why did the response fade?"
      lead="Play an alarm call to a ground squirrel and it looks up. Play it again and again and it goes back to feeding. The fade itself is ordinary. What it means depends on what brings the response back, and that is what these playback experiments tested. Each curve is a behavior that was measured, redrawn as a schematic."
    >
      <div className="decline-stage" ref={stage}>
        <div className="exp-tabs" role="tablist" aria-label="Experiment">
          {EXPERIMENTS.map((e) => (
            <button
              key={e.id}
              type="button"
              role="tab"
              aria-selected={e.id === id}
              className={`exp-tab ${e.id === id ? 'on' : ''}`}
              onClick={() => setId(e.id)}
            >
              <span className="exp-tab-title">{e.title}</span>
              <span className="exp-tab-sub">{e.species}</span>
              <span className={`setting-tag setting-${e.setting}`}>{SETTING_LABEL[e.setting]}</span>
            </button>
          ))}
        </div>

        <dl className="exp-setup">
          <div>
            <dt>Sound</dt>
            <dd>{exp.sound}</dd>
          </div>
          <div>
            <dt>Measured</dt>
            <dd>{exp.measure}</dd>
          </div>
        </dl>

        <ResultPlot
          key={exp.id}
          conditions={exp.conditions}
          xLabel={exp.xLabel}
          yLabel={exp.measure}
          splitAfter={exp.splitAfter}
          splitLabel={exp.splitLabel}
          description={`${exp.species}: ${exp.measure.toLowerCase()} across ${exp.conditions[0].values.length} ${exp.xLabel.toLowerCase()}s. ${exp.shows}`}
        />

        <div className="exp-verdict">
          <p>
            <span className="exp-tag">What it shows</span>
            {exp.shows} <Cite keys={exp.refs} />
          </p>
          <p>
            <span className="exp-tag">What it leaves open</span>
            {exp.open} <Illustrative />
          </p>
        </div>
      </div>

      <h3 className="decline-sub">Four explanations for a fade, and what has been tested</h3>
      <div className="explain-wrap">
        <table className="explain">
          <thead>
            <tr>
              <th scope="col">Explanation</th>
              <th scope="col">Response should return when</th>
              <th scope="col">Tested with sound?</th>
            </tr>
          </thead>
          <tbody>
            {EXPLANATIONS.map((x) => (
              <tr key={x.name} className={x.evidence.length ? '' : 'untested'}>
                <th scope="row">
                  {x.name}
                  <span className="explain-idea">{x.idea}</span>
                </th>
                <td>{x.returnsWhen}</td>
                <td>
                  {x.tested}
                  {x.evidence.length > 0 && (
                    <span className="explain-links">
                      {x.evidence.map((eid) => {
                        const e = EXPERIMENTS.find((q) => q.id === eid)!;
                        return (
                          <button key={eid} type="button" className="link-btn" onClick={() => jump(eid)}>
                            {e.title}
                          </button>
                        );
                      })}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout tone="lesson" title="The point">
        A fading response fits all four explanations. Only what restores it tells them apart. The field experiments so far have changed the
        caller; the cost of reacting has never been changed in a sound experiment, so the fourth explanation is untested, not ruled out.
      </Callout>

      <div className="module-foot">
        <ManuscriptLink section="persistence" />
        <Sources keys={SOURCES} />
      </div>
    </Section>
  );
}
