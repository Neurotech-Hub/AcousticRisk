import type { ReactNode } from 'react';
import { PREPRINT_URL, SECTIONS, ref, type SectionKey } from '../content/manuscript';
import { Icon } from './Icon';

function formatRef(key: string) {
  const r = ref(key);
  if (!r) return { text: key, doi: '' };
  const authors = r.authors.length > 3 ? `${r.authors[0].split(',')[0]} et al.` : r.authors.map((a) => a.split(',')[0]).join(', ');
  const where = [r.venue, r.volume, r.pages].filter(Boolean).join(' ');
  return { text: `${authors} (${r.year}). ${r.title}. ${where}.`, doi: r.doi };
}

/** Inline short citation, e.g. (Hare 1998; Blumstein & Daniel 2004), each linked to its DOI. */
export function Cite({ keys }: { keys: string[] }) {
  return (
    <span className="cite">
      (
      {keys.map((k, i) => {
        const r = ref(k);
        const label = r?.short ?? k;
        return (
          <span key={k}>
            {i > 0 && '; '}
            {r?.doi ? (
              <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noreferrer">
                {label}
              </a>
            ) : (
              label
            )}
          </span>
        );
      })}
      )
    </span>
  );
}

/** Expandable source list; works without hover. */
export function Sources({ keys, label = 'Sources' }: { keys: string[]; label?: string }) {
  const uniq = [...new Set(keys)];
  return (
    <details className="sources">
      <summary>
        {label} <span className="count mono">{uniq.length}</span>
      </summary>
      <ul>
        {uniq.map((k) => {
          const f = formatRef(k);
          return (
            <li key={k}>
              {f.text}{' '}
              {f.doi && (
                <a href={`https://doi.org/${f.doi}`} target="_blank" rel="noreferrer">
                  doi:{f.doi}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/** Pointer back to the manuscript. The preprint has no stable section anchors, so this names the section. */
export function ManuscriptLink({ section, children }: { section: SectionKey; children?: ReactNode }) {
  const s = SECTIONS[section];
  return (
    <a className="mslink" href={PREPRINT_URL} target="_blank" rel="noreferrer">
      <Icon name="external" size={14} />
      <span>
        {children ?? 'In the manuscript'}: <span className="mono">§{s.n}</span> {s.title}
      </span>
    </a>
  );
}
