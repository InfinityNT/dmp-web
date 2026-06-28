"use client";

import { features } from "@/lib/content";
import { Icon } from "@/lib/icons";
import { Reveal } from "./Reveal";

export function Features() {
  return (
    <section id="features" className="section">
      <div className="shell">
        <Reveal className="section__head">
          <div className="eyebrow">What it does</div>
          <h2>Everything an IT team needs to track its hardware.</h2>
          <p>
            One place for devices, the people who use them, and the paper trail in
            between — fast enough to actually keep up to date.
          </p>
        </Reveal>

        <div className="bento">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.06}
              className={`feature${f.span ? ` feature--${f.span}` : ""}`}
            >
              <div className="feature__top">
                <span className="feature__icon"><Icon name={f.icon} /></span>
                <span className="tag">{f.tag}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
