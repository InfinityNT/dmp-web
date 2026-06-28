# dmp-web — scope note

This is the **public marketing / landing page** for DMP (Device Management Platform).
It is a **separate project** from the DMP application, which lives in the sibling
`it/` directory.

- **Do not** modify the `it/` app from here. Only **read** from `it/` when copying
  assets (screenshots live in `it/_design_review/ppt/`).
- **Do not** scan or read anything else under the parent code/Documents tree — it
  contains unrelated, sensitive projects. Work only inside `dmp-web/` and read-only
  in `it/`.
- This project is hosted on the user's own server, outside the `it/` company
  constraints — modern tooling (npm/Node) is fine here.

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Static export
(`next build` → `out/`), deployable to any static host (own server / GitHub Pages /
Vercel).

## Design
Dark-first "Clinical Petrol" / "instrument panel" identity, brand-continuous with the
app. Signature detail: monospace "asset-tag" labels. Centerpiece: 3D hover-tilt
screenshot showcase. See `.impeccable.md` for the full Design Context.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```
