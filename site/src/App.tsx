import { Logo } from './components/Logo';
import { Intro } from './sections/Intro';
import { Decision } from './sections/Decision';
import { Decline } from './sections/Decline';
import { Hidden } from './sections/Hidden';
import { Evidence } from './sections/Evidence';
import { Manuscript } from './sections/Manuscript';
import { AUTHOR, PREPRINT_URL, REPO_URL, TITLE } from './content/manuscript';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Intro />
        <Decision />
        <Decline />
        <Hidden />
        <Evidence />
        <Manuscript />
      </main>

      <footer className="site-footer">
        <Logo className="footer-mark" />
        <div>
          <p>
            Companion to <em>{TITLE}</em>, {AUTHOR}.{' '}
            <a href={PREPRINT_URL} target="_blank" rel="noreferrer">
              PDF
            </a>{' '}
            ·{' '}
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              Repository
            </a>
          </p>
          <p className="hint">
            A learning companion, not a simulator. Curves and numbers here are illustrative; the manuscript is the source for claims,
            evidence, and references.
          </p>
        </div>
      </footer>
    </>
  );
}
