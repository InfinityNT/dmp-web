"use client";

import { useState } from "react";
import { install } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Install() {
  const [tab, setTab] = useState(0);
  const active = install[tab];

  return (
    <section id="install" className="section">
      <div className="shell install">
        <Reveal className="section__head">
          <div className="eyebrow">Up and running in minutes</div>
          <h2>Install once. It starts at boot.</h2>
          <p>
            Clone the repo and run one script. DMP registers itself as a native
            service — a Windows service, a launchd daemon, or a systemd unit — so
            it&apos;s always on and survives reboots.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="terminal">
            <div className="terminal__tabs" role="tablist">
              {install.map((t, i) => (
                <button
                  key={t.os}
                  role="tab"
                  aria-selected={tab === i}
                  className={`terminal__tab${tab === i ? " is-active" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {t.os}
                </button>
              ))}
              <span className="tag" style={{ marginLeft: "auto" }}>{active.tag}</span>
            </div>
            <pre className="terminal__body mono">
              {active.lines.map((l, i) => (
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
