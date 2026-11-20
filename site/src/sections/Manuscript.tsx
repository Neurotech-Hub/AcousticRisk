import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { Cite } from '../components/Refs';
import { AUTHOR, OUTSTANDING_QUESTIONS, PREPRINT_URL, REPO_URL, TITLE } from '../content/manuscript';

export function Manuscript() {
  return (
    <Section
      id="manuscript"
      index="06"
      eyebrow="Read the manuscript"
      title="Open questions"
      lead="The manuscript closes with four questions that remain unresolved."
    >
      <div className="paper">
        <ol className="open-questions">
          {OUTSTANDING_QUESTIONS.map((q) => (
            <li key={q.question}>
              <p className="oq-question">{q.question}</p>
              <p className="oq-why">{q.why}</p>
              <details className="oq-experiments">
                <summary>Key Experiments</summary>
                <ul>
                  {q.experiments.map((x) => (
                    <li key={x.text}>
                      <span className="oq-setting">{x.setting}</span>
                      <span>
                        {x.text} <Cite keys={x.refs} />
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ol>
        <div className="paper-ref">
          <p className="paper-title">{TITLE}</p>
          <p className="paper-author">{AUTHOR}. Preprint.</p>
          <div className="hero-cta">
            <a className="btn-primary" href={PREPRINT_URL} target="_blank" rel="noreferrer">
              Download the PDF <Icon name="external" size={14} />
            </a>
            <a className="btn-quiet" href={REPO_URL} target="_blank" rel="noreferrer">
              Source on GitHub <Icon name="external" size={14} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
