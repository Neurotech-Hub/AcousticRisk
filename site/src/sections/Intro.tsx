import { Logo } from '../components/Logo';
import { Motif } from '../components/Motif';
import { Icon, type IconName } from '../components/Icon';
import { PREPRINT_URL } from '../content/manuscript';
import { graphic } from '../content/graphics';

const DEMANDS: { icon: IconName; name: string; tone: string; lede: string; body: string }[] = [
  {
    icon: 'react',
    name: 'React',
    tone: 'rapid',
    lede: 'Rapid acoustic defense',
    body: 'Driven by the sound itself: loudness, abrupt onset. Fast, present without experience, and it still fades with repetition.',
  },
  {
    icon: 'predict',
    name: 'Predict',
    tone: 'learned',
    lede: 'Learned threat evaluation',
    body: 'What this sound, from this caller, has come to predict. Shaped by experience and by the source’s reliability.',
  },
  {
    icon: 'decide',
    name: 'Decide',
    tone: 'action',
    lede: 'Flexible action selection',
    body: 'Whether acting is worth it given refuge, food, and state. The same prediction can lead to different actions.',
  },
  {
    icon: 'update',
    name: 'Update',
    tone: 'history',
    lede: 'Experience and history',
    body: 'Repetition, rest, a change of caller, and timing reshape everything that follows.',
  },
];

export function Intro() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" style={{ backgroundImage: `url(${graphic('hero-field.png')})` }} aria-hidden="true" />
        <div className="hero-inner">
          <Logo className="hero-mark" title="Interpreting Acoustic Risk logo: a sound wave resolving into a rodent" />
          <h1 id="hero-title">Interpreting Acoustic Risk</h1>
          <p className="subtitle">An Interactive Field Guide</p>
          <p className="hero-lede">
            <em>When does a sound mean danger?</em> A companion to the manuscript on how rodents turn sound into action.
          </p>
          <div className="hero-cta">
            <a className="btn-quiet" href={PREPRINT_URL} target="_blank" rel="noreferrer">
              Download the PDF <Icon name="external" size={14} />
            </a>
          </div>
        </div>
      </section>

      <section id="intro" className="module intro" aria-labelledby="intro-title">
        <header className="module-head">
          <p className="eyebrow">
            <span className="mono">01</span> Introduction
          </p>
          <h2 id="intro-title" className="pull">
            The same sound can produce different responses, and the same response can emerge from different processes.
          </h2>
        </header>

        <div className="intro-grid">
          <Motif />
          <div className="intro-copy">
            <p>
              A rat that hears an alarm call may slow its heart, stop moving, freeze, or do nothing visible at all. If acoustic
              significance were a single internal “fear” variable, those responses would rise and fall together. They often do not.
            </p>
            <p>The manuscript organizes the problem around four demands on a receiver. They interact; they are not stages.</p>
          </div>
        </div>

        <ol className="demands">
          {DEMANDS.map((d) => (
            <li key={d.name} className={`demand tone-${d.tone}`}>
              <Icon name={d.icon} size={26} className="demand-icon" />
              <h3>{d.name}</h3>
              <p className="demand-lede">{d.lede}</p>
              <p>{d.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
