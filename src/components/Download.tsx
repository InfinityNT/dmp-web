"use client";

import { Github, Download as DownloadIcon, Copy, Check, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { downloads, releaseAsset, site, installNote, cli } from "@/lib/content";
import { Icon } from "@/lib/icons";
import { Reveal } from "./Reveal";

export function Download() {
  const [copied, setCopied] = useState(false);
  const clone = `git clone ${site.repo}.git`;

  function copyClone() {
    navigator.clipboard?.writeText(clone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <section id="download" className="section section--alt">
      <div className="shell">
        <Reveal className="section__head">
          <div className="eyebrow">Get DMP</div>
          <h2>Download, run, done.</h2>
          <p>
            Free, open, and self-contained — installers for Windows, macOS and Linux
            with Python bundled in. No sign-up, nothing phones home, and your data
            stays on your network.
          </p>
        </Reveal>

        <div className="get-grid">
          {/* left: heads-up + per-OS installers */}
          <Reveal>
            <div className="callout">
              <span className="callout__icon"><TriangleAlert size={18} /></span>
              <p><strong>Installers are experimental.</strong> {installNote}</p>
            </div>

            <div className="dl-list">
              {downloads.map((d) => (
                <a className="dl-row" key={d.os} href={releaseAsset(d.file)}>
                  <span className="dl-row__icon"><Icon name={d.icon} size={22} /></span>
                  <span className="dl-row__text">
                    <b>{d.os}</b>
                    <small className="mono">{d.note}</small>
                  </span>
                  <span className="tag">{d.tag}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* right: the recommended source / CLI path + repo actions */}
          <Reveal delay={0.08}>
            <div className="terminal">
              <div className="terminal__tabs">
                <span className="terminal__tab is-active">From source · CLI</span>
                <span className="tag tag--accent" style={{ marginLeft: "auto" }}>RECOMMENDED</span>
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

            <div className="dl-actions">
              <a href={`${site.repo}/archive/refs/heads/main.zip`} className="btn btn-ghost">
                <DownloadIcon size={17} /> Download ZIP
              </a>
              <a href={site.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Github size={17} /> GitHub
              </a>
              <button className="clone mono" onClick={copyClone} aria-label="Copy git clone command">
                <span>{clone}</span>
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
