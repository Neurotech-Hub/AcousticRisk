import type { ReactNode } from 'react';

interface Props {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lead: ReactNode;
  children: ReactNode;
}

export function Section({ id, index, eyebrow, title, lead, children }: Props) {
  return (
    <section id={id} className="module" aria-labelledby={`${id}-title`}>
      <header className="module-head">
        <p className="eyebrow">
          <span className="mono">{index}</span> {eyebrow}
        </p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="lead">{lead}</p>
      </header>
      {children}
    </section>
  );
}
