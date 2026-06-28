"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { site } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="shell nav__inner">
        <a href="#top" className="wordmark" aria-label={`${site.name} home`}>
          <span className="wordmark__mark mono">D</span>
          {site.name}
        </a>
        <div className="nav__links">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#install">Install</a>
          <a href="#download">Download</a>
        </div>
        <a
          href={site.repo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
          style={{ padding: "0.5rem 0.85rem" }}
        >
          <Github size={17} /> GitHub
        </a>
      </div>
    </nav>
  );
}
