import { useState } from 'react';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { Cite, ManuscriptLink, Sources } from '../components/Refs';
import { CHANNELS, DIRECTIONS, GROUPS, RECEIVERS, SETTINGS, SOURCES, type ChannelGroup, type Setting } from '../content/measures';
import { graphic } from '../content/graphics';

const SETTING_ORDER: Setting[] = ['lab', 'wild-lab', 'field'];
const GROUP_ORDER: ChannelGroup[] = ['behavior', 'body'];

export function Hidden() {
  const [sel, setSel] = useState(RECEIVERS[0].id);
  const r = RECEIVERS.find((x) => x.id === sel)!;

  return (
    <Section
      id="hidden"
      index="04"
      eyebrow="Compare lab and field"
      title="Each setting sees part of the animal"
      lead="Laboratory studies record the body but remove the costs of acting. Field studies measure the costs but rarely the body. Each row is one receiver; a blank cell is something that study did not report."
    >
      <div className="hidden-stage">
        <p className="matrix-swipe hint">Swipe sideways to see every column.</p>
        <div className="matrix-wrap">
          <table className="matrix">
            <colgroup>
              <col className="matrix-col-who" />
              {CHANNELS.map((c) => (
                <col key={c.id} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="matrix-corner">
                  <span className="sr-only">Receiver</span>
                </th>
                {GROUP_ORDER.map((g) => (
                  <th key={g} scope="colgroup" colSpan={CHANNELS.filter((c) => c.group === g).length} className={`matrix-group matrix-group-${g}`}>
                    {GROUPS[g]}
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="col" className="matrix-corner" />
                {CHANNELS.map((c) => (
                  <th key={c.id} scope="col" className="matrix-ch">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            {SETTING_ORDER.map((s) => (
              <tbody key={s}>
                <tr className="matrix-setting">
                  <th scope="rowgroup" colSpan={CHANNELS.length + 1}>
                    <span className="matrix-setting-label">{SETTINGS[s].label}</span>
                    <span className="matrix-setting-note">{SETTINGS[s].note}</span>
                  </th>
                </tr>
                {RECEIVERS.filter((x) => x.setting === s).map((x) => {
                  const on = x.id === sel;
                  return (
                    <tr key={x.id} className={`matrix-row ${on ? 'sel' : ''}`} onClick={() => setSel(x.id)}>
                      <th scope="row" className="matrix-who">
                        <button type="button" className="matrix-pick" aria-pressed={on} onClick={() => setSel(x.id)}>
                          <span className={`portrait portrait-sm ${x.portrait ? '' : 'portrait-blank'}`} aria-hidden="true">
                            {x.portrait && <img src={graphic(x.portrait)} alt="" />}
                          </span>
                          <span className="matrix-who-text">
                            <span className="matrix-species">{x.species}</span>
                            <span className="matrix-sound">{x.sound}</span>
                          </span>
                        </button>
                      </th>
                      {CHANNELS.map((c) => {
                        const cell = x.cells[c.id];
                        if (!cell) {
                          return (
                            <td key={c.id} className="matrix-cell empty">
                              <span className="sr-only">{c.label}: not reported</span>
                            </td>
                          );
                        }
                        const d = DIRECTIONS[cell.dir];
                        return (
                          <td key={c.id} className={`matrix-cell dir-${cell.dir}`} title={`${c.label}: ${d.label}`}>
                            <span className="cell-glyph" aria-hidden="true">
                              {d.glyph}
                            </span>
                            <span className="cell-text">
                              <span className="sr-only">{c.label}: </span>
                              {cell.text}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ))}
          </table>
        </div>

        <ul className="legend matrix-legend" aria-label="Cell symbols">
          {Object.entries(DIRECTIONS).map(([k, d]) => (
            <li key={k}>
              <span className={`cell-glyph dir-${k}`} aria-hidden="true">
                {d.glyph}
              </span>{' '}
              {d.label}
            </li>
          ))}
          <li>
            <span className="cell-glyph empty-swatch" aria-hidden="true" /> not reported
          </li>
        </ul>

        <aside className="detail" aria-live="polite" aria-label="Study details">
          <p className="detail-kicker">
            <span className="detail-tag">Selected receiver</span>
            {SETTINGS[r.setting].label}
          </p>
          <h3>{r.title}</h3>
          <p>{r.finding}</p>
          <p>
            <strong>Does not show:</strong> {r.limit}
          </p>
          <p className="hint">
            <Cite keys={r.refs} />
          </p>
        </aside>
      </div>

      <Callout tone="lesson" title="The point">
        No visible response does not mean no response, and a strong response in a bare cage does not show what acting would cost in
        the field. The body can be recorded in free-living animals now; almost no acoustic study has done it.
      </Callout>

      <div className="module-foot">
        <ManuscriptLink section="action" />
        <Sources keys={[...SOURCES, 'GaidicaDantzer2020']} />
      </div>
    </Section>
  );
}
