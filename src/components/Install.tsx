"use client";

import { installSteps, cli } from "@/lib/content";
import { Icon } from "@/lib/icons";
import { Reveal } from "./Reveal";

export function Install() {
  return (
    <section id="install" className="section">
      <div className="shell">
        <Reveal className="section__head">
          <div className="eyebrow">Up and running in a minute</div>
          <h2>Download, run, done.</h2>
          <p>
            Self-contained installers for Windows, macOS and Linux — no Python,
            no dependencies, no terminal required. DMP installs itself as a
            background service that starts at boot.
          </p>
        </Reveal>

        <div className="steps">
          {installSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="step">
              <div className="step__head">
                <span className="step__num">{s.n}</span>
                <span className="step__icon"><Icon name={s.icon} size={20} /></span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="install-cta">
          <a href="#download" className="btn btn-accent">Get the installer</a>
          <span className="install-cta__note mono">
            or build from source / manage via CLI ↓
          </span>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="terminal terminal--solo">
            <div className="terminal__tabs">
              <span className="terminal__tab is-active">From source · CLI</span>
              <span className="tag" style={{ marginLeft: "auto" }}>ADVANCED</span>
            </div>
            <pre className="terminal__body mono">
              {cli.map((l, i) => (
                <span
                  key={i}
                  className={`tline${l.startsWith("#") ? " tline--c" : l === "" ? " tline--b" : ""}`}
                >
                  {l === "" ? " " : l}
                </span>
              ))}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
