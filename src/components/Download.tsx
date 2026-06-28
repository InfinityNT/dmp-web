"use client";

import { Github, Download as DownloadIcon, Copy, Check } from "lucide-react";
import { useState } from "react";
import { downloads, site } from "@/lib/content";
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
          <h2>Free, open, and yours to run.</h2>
          <p>
            Grab the source and install on any of the three. There&apos;s no sign-up and
            nothing phones home.
          </p>
        </Reveal>

        <div className="dl-grid">
          {downloads.map((d, i) => (
            <Reveal key={d.os} delay={i * 0.06}>
              <a className="dl-card" href={site.repo} target="_blank" rel="noreferrer">
                <span className="dl-card__icon"><Icon name={d.icon} size={26} /></span>
                <span className="dl-card__os">{d.os}</span>
                <span className="dl-card__note mono">{d.note}</span>
                <span className="tag" style={{ marginTop: "auto" }}>{d.tag}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="dl-actions">
            <a href={`${site.repo}/archive/refs/heads/main.zip`} className="btn btn-accent">
              <DownloadIcon size={18} /> Download ZIP
            </a>
            <a href={site.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Github size={18} /> View on GitHub
            </a>
            <button className="clone mono" onClick={copyClone} aria-label="Copy git clone command">
              <span>{clone}</span>
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
