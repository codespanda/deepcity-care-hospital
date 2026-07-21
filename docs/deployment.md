# Deployment

This app is deployed as a static site to **GitHub Pages**, served from the `gh-pages`
branch of [`codespanda/deepcity-care-hospital`](https://github.com/codespanda/deepcity-care-hospital),
currently live at **https://deepcity-care.codespanda.com/**.

## How it's wired up

- **Router:** `src/main.tsx` uses `HashRouter`, not `BrowserRouter`. GitHub Pages has no
  server to rewrite unknown paths back to `index.html`, so a `BrowserRouter` URL like
  `/appointments` would 404 on refresh. `HashRouter` keeps all routing client-side after
  `#`, e.g. `/#/appointments`, which always resolves to `index.html`.
- **Base path:** `vite.config.ts` sets `base: '/'`. This must match how the site is
  actually served — see the base-path section below before changing it.
- **Custom domain:** `public/CNAME` contains `deepcity-care.codespanda.com`. Vite copies
  everything in `public/` into `dist/` verbatim, so this file ships with every build and
  keeps the custom domain association alive across deploys (see the "wiped CNAME" gotcha
  below for what happens if this file goes missing).

## Redeploying

```bash
npm run deploy
```

This runs `npm run build` (type-check + Vite build to `dist/`) and then
[`gh-pages -d dist`](https://www.npmjs.com/package/gh-pages), which force-pushes the
contents of `dist/` to the `gh-pages` branch. GitHub Pages picks up the new commit and
rebuilds automatically, usually within a minute or two.

There is **no CI/CD auto-deploy on push** — the GitHub OAuth token used for this repo
doesn't have the `workflow` scope needed to push a `.github/workflows/*.yml` file (pushing
one gets rejected with *"refusing to allow an OAuth App to create or update workflow...
without workflow scope"*). To switch to auto-deploy-on-push instead of running
`npm run deploy` by hand:

1. Run `gh auth refresh -s workflow` (opens a browser prompt to grant the scope).
2. Add a workflow that runs `npm ci && npm run build`, then uses
   `actions/configure-pages` + `actions/upload-pages-artifact` + `actions/deploy-pages` to
   publish `dist/`.
3. In the repo's Settings → Pages, switch the source from "Deploy from a branch" to
   "GitHub Actions".

## The base-path gotcha (read this before touching `vite.config.ts`)

Vite's `base` config controls the prefix every built asset URL gets
(`<script src="{base}assets/index-xxxx.js">`). It **must match the URL path the site is
actually served from**, or every JS/CSS file 404s and you get a blank page:

| Serving URL | Correct `base` |
| --- | --- |
| `https://<user>.github.io/<repo>/` (default, no custom domain) | `/<repo>/` |
| `https://your-custom-domain.com/` (a `CNAME` file is present) | `/` |

This app hit exactly this bug once already: it was originally deployed without a custom
domain (`base: '/deepcity-care-hospital/'`), then someone added a `CNAME` file directly via
GitHub's web UI to point it at `deepcity-care.codespanda.com` — which moved the serving
root to `/` but left the build still requesting assets under `/deepcity-care-hospital/`,
so every asset 404'd. Fixed by changing `base` to `/'` and adding `public/CNAME` so the
domain association survives future `npm run deploy` runs. If you ever add or remove a
custom domain, update `base` to match in the same commit.

## Other gotchas worth knowing about

- **Browser/CDN caching after a fix.** If you (or a user) load the site while it's broken,
  their browser may cache the broken `index.html` for a while even after you redeploy the
  fix. A hard refresh (Ctrl/Cmd+Shift+R) clears it instantly; otherwise it self-heals as
  the cache expires (GitHub's CDN typically caches Pages content for a few minutes).
- **`gh-pages` doesn't clean dotfiles.** The very first deploy left a few stray dotfiles
  (`.claude/`, `.gitignore`, `.oxlintrc.json`) sitting in the `gh-pages` branch root,
  inherited from the branch being based on `master`'s tree rather than starting empty —
  `gh-pages`'s clean step skips dotfiles by default. They're harmless (not referenced by
  `index.html`) but you'll see them if you `git ls-tree origin/gh-pages`.
- **Verify with `git ls-tree origin/gh-pages --name-only`** (after `git fetch origin
  gh-pages`) if a deploy ever looks wrong — it's the fastest way to see exactly what's
  live without waiting on the browser/CDN cache.
