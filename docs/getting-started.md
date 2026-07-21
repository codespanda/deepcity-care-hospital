# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (ships with Node)

## Install

```bash
git clone https://github.com/codespanda/deepcity-care-hospital.git
cd deepcity-care-hospital
npm install
```

## Run the dev server

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`). Hot Module Replacement is on —
edits to any file under `src/` update the browser without a full reload.

## Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally, to sanity-check it before deploying |
| `npm run lint` | Run [Oxlint](https://oxc.rs/) over the codebase |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch (see [Deployment](./deployment.md)) |

## Type-checking

The build script runs `tsc -b --noEmit` as part of `npm run build`, but you can run it on
its own while iterating:

```bash
npx tsc -b --noEmit
```

Treat a clean `tsc` run as a hard requirement before committing — this project has no test
suite, so the type checker is the main safety net.

## Project conventions at a glance

- **No backend.** Every page reads from static fixtures in `src/data/*.ts`. Forms in
  `EntityFormDialog` close on submit without persisting anything — see
  [Components Reference](./components.md#entityformdialog) for why, and how to change it.
- **Path alias.** `@/` resolves to `src/` (configured in `vite.config.ts` and every
  `tsconfig*.json`). Always import via `@/...`, never relative `../../..` paths.
- **Styling.** Tailwind CSS v4 with [shadcn/ui](https://ui.shadcn.com/) primitives in
  `src/components/ui/`. Use the semantic tokens (`bg-card`, `text-foreground`,
  `border-border`, ...) rather than raw colors so components work in both themes — see
  [Theming](./theming.md).
- **Routing.** `react-router-dom` with `HashRouter` (not `BrowserRouter`) — required for
  static hosting on GitHub Pages, where there's no server to rewrite unknown paths back to
  `index.html`.
