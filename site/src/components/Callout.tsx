import type { ReactNode } from 'react';
import { Icon } from './Icon';

export function Callout({
  title,
  children,
  live,
  tone = 'plain',
}: {
  title: string;
  children: ReactNode;
  live?: boolean;
  tone?: 'plain' | 'lesson' | 'caution';
}) {
  return (
    <aside className={`callout callout-${tone}`} aria-live={live ? 'polite' : undefined}>
      {tone !== 'lesson' && <Icon name="info" size={18} className="callout-icon" />}
      <div>
        <p className="callout-title">{title}</p>
        <div className="callout-body">{children}</div>
      </div>
    </aside>
  );
}

export type EvidenceKind = 'empirical' | 'conceptual' | 'hypothetical' | 'open';

const KINDS: Record<EvidenceKind, { glyph: string; label: string; help: string }> = {
  empirical: { glyph: '\u25CF', label: 'Empirical finding', help: 'Grounded in published measurements.' },
  conceptual: { glyph: '\u25C6', label: 'Theoretical interpretation', help: 'Designed to explain relationships; not itself a measurement.' },
  hypothetical: { glyph: '\u25B2', label: 'Hypothetical scenario', help: 'Used to explore possible outcomes; not data.' },
  open: { glyph: '?', label: 'Open question', help: 'Not yet resolved experimentally.' },
};

export function EvidenceTag({ kind, children }: { kind: EvidenceKind; children?: ReactNode }) {
  const k = KINDS[kind];
  return (
    <span className={`etag etag-${kind}`} title={k.help}>
      <span aria-hidden="true">{k.glyph}</span>
      <span>{children ?? k.label}</span>
    </span>
  );
}

export const EVIDENCE_KINDS = KINDS;

/** Visible label required on every model output. */
export function Illustrative({ children = 'Illustrative model' }: { children?: ReactNode }) {
  return <span className="illustrative">{children}</span>;
}
