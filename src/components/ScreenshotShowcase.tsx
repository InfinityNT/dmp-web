"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { shots, type Shot } from "@/lib/content";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

export function ScreenshotShowcase() {
  const [active, setActive] = useState<Shot | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="screenshots" className="section section--alt">
      <div className="shell">
        <Reveal className="section__head">
          <div className="eyebrow">A closer look</div>
          <h2>Designed to be lived in.</h2>
          <p>Hover to tilt, click to enlarge. Every screen is the real product.</p>
        </Reveal>

        <div className="showcase">
          {shots.map((s, i) => (
            <Reveal key={s.tag} delay={(i % 3) * 0.06}>
              <TiltCard max={8}>
                <button className="shot" onClick={() => setActive(s)} aria-label={`Enlarge ${s.title}`}>
                  <figure className="shot-frame" style={{ margin: 0 }}>
                    <div className="shot-frame__bar">
                      <span className="shot-frame__dot" />
                      <span className="shot-frame__dot" />
                      <span className="shot-frame__dot" />
                      <span className="tag" style={{ marginLeft: "auto" }}>{s.tag}</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.title} loading="lazy" />
                  </figure>
                  <div className="shot__meta">
                    <span className="shot__title">{s.title}</span>
                    <span className="shot__blurb">{s.blurb}</span>
                  </div>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.figure
              className="lightbox__inner shot-frame"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shot-frame__bar">
                <span className="shot-frame__dot" />
                <span className="shot-frame__dot" />
                <span className="shot-frame__dot" />
                <span className="shot-frame__addr mono">dmp.local · {active.title}</span>
                <span className="tag tag--accent" style={{ marginLeft: "auto" }}>{active.tag}</span>
                <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.src} alt={active.title} />
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
