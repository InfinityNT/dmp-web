import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div>
          <div className="wordmark" style={{ marginBottom: "0.6rem" }}>
            <span className="wordmark__mark mono">D</span>
            {site.name}
          </div>
          <p className="footer__tag mono">{site.full} · {site.version}</p>
        </div>

        <nav className="footer__links">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#download">Download</a>
          <a href={site.repo} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
      <div className="shell footer__base mono">
        <span>Self-hosted IT asset management.</span>
        <span>Runs on your machine. No cloud.</span>
      </div>
    </footer>
  );
}
