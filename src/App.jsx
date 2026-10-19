import { useState } from "react";

const starterSteps = [
  {
    number: "01",
    title: "Edit your app",
    description: "Start in src/App.jsx and make this page your own.",
  },
  {
    number: "02",
    title: "Style it",
    description: "Your global styles live in src/styles.css.",
  },
  {
    number: "03",
    title: "Build for production",
    description: "Run npm run build when you’re ready to ship.",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="React starter home">
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>Starter project</span>
        </a>
        <span className="stack-label">
          <span className="status-dot" />
          React <span className="label-divider">/</span> JavaScript
        </span>
      </header>

      <section className="hero" id="home">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          YOUR NEW PROJECT STARTS HERE
        </div>
        <h1>
          A fresh start.
          <br />
          <span>Built with React.</span>
        </h1>
        <p className="hero-copy">
          Your JavaScript app is ready. Make a change, save the file, and see it
          come to life.
        </p>

        <div className="counter-card">
          <div className="counter-copy">
            <span className="counter-kicker">A little React in action</span>
            <span className="counter-number" aria-live="polite">
              {count}
            </span>
            <span className="counter-hint">Click the button to try state</span>
          </div>
          <button
            className="counter-button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
            type="button"
          >
            <span aria-hidden="true">+</span>
            Count up
          </button>
        </div>
      </section>

      <section className="getting-started" aria-labelledby="getting-started-title">
        <div className="section-heading">
          <h2 id="getting-started-title">Get started</h2>
          <span>Three quick ways to make it yours</span>
        </div>
        <div className="steps-grid">
          {starterSteps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>JavaScript only. No TypeScript setup.</span>
        <span className="footer-stack">Vite + React</span>
      </footer>
    </main>
  );
}

export default App;
