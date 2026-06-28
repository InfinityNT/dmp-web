"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { site } from "@/lib/content";
import { TiltCard } from "./TiltCard";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <header id="top" className="hero">
      <div className="shell hero__grid">
        {/* left: copy */}
        <div>
          <motion.div className="eyebrow" {...rise(0)}>
            Self-hosted · IT asset management
          </motion.div>

          <motion.h1 {...rise(0.08)}>{site.tagline}</motion.h1>

          <motion.p className="hero__sub" {...rise(0.16)}>
            {site.sub}
          </motion.p>

          <motion.div className="hero__cta" {...rise(0.24)}>
            <a href="#download" className="btn btn-accent">
              <Download size={18} /> Download
            </a>
            <a href={site.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Github size={18} /> View on GitHub
            </a>
          </motion.div>

          <motion.div className="hero__chips" {...rise(0.32)}>
            {site.specChips.map((c) => (
              <span key={c} className="tag">{c}</span>
            ))}
          </motion.div>
        </div>

        {/* right: tilted dashboard shot */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          style={{ perspective: 1200 }}
        >
          <TiltCard max={7}>
            <figure className="shot-frame" style={{ margin: 0 }}>
              <div className="shot-frame__bar">
                <span className="shot-frame__dot" />
                <span className="shot-frame__dot" />
                <span className="shot-frame__dot" />
                <span className="shot-frame__addr mono">dmp.local · Dashboard</span>
                <span className="tag tag--accent" style={{ marginLeft: "auto" }}>
                  {site.version}
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/screenshots/dashboard.png" alt="DMP dashboard" />
            </figure>
          </TiltCard>
        </motion.div>
      </div>
    </header>
  );
}
