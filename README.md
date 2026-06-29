# dmp-web

Marketing / landing page for **DMP — Device Management Platform**
(the app lives in the sibling `it/` repo: https://github.com/InfinityNT/it).

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
Dark, "Clinical Petrol" design with a 3D hover-tilt screenshot showcase.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs a fully static site to ./out
```

`out/` is plain static files — no Node server needed at runtime.

## Deploy

Host the `out/` folder anywhere:

- **Your own server** — copy `out/` and serve it with nginx / Caddy / any static host.
- **GitHub Pages** — free, and supports a **custom domain for free** (add a `CNAME`
  file + a DNS record; GitHub issues HTTPS automatically). If you serve from a
  *project* subpath (`username.github.io/dmp-web`), uncomment and set
  `basePath: "/dmp-web"` in `next.config.mjs`. For a custom domain or user/org page
  served at the root, leave `basePath` empty.
- **Vercel / Netlify** — connect the repo; both auto-detect Next.js.

## Notes

- Screenshots in `public/screenshots/` are copied from the app's design assets.
- Download buttons point at the DMP GitHub repo / ZIP today; swap them to GitHub
  Release assets in `src/lib/content.ts` once you publish releases.

## License

Released under the [MIT License](LICENSE) — © 2026 Eduardo Murillo.
