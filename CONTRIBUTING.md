# Contributing

Thanks for taking a look at DeepCity Care Hospital! This is a static, no-backend admin
dashboard, so contributing is mostly about UI: new pages, components and fixtures.

## Setup

```bash
git clone https://github.com/codespanda/deepcity-care-hospital.git
cd deepcity-care-hospital
npm install
npm run dev
```

See [`docs/getting-started.md`](./docs/getting-started.md) for the full rundown of scripts
and conventions.

## Before you start

- **Adding a page or dialog?** Start from [`templates/`](./templates/README.md) rather
  than a blank file — it saves re-deriving the layout conventions every page already
  follows.
- **Not sure how a shared component works?** Check [`docs/components.md`](./docs/components.md)
  before adding a new one — there's a good chance what you need already exists.
- **Changing colors or dark mode?** Read [`docs/theming.md`](./docs/theming.md) first;
  almost everything should use the semantic Tailwind tokens (`bg-card`, `text-foreground`,
  ...), not raw colors.

## Making a change

1. Create a branch: `git checkout -b feature/short-description`
2. Make your change, following the conventions above.
3. Type-check: `npx tsc -b --noEmit` — must be clean.
4. Build: `npm run build` — must succeed.
5. Verify in the browser (`npm run dev`) — click through the affected page(s), check the
   console for errors.
6. Open a PR using the template — fill in the checklist.

## Commit style

Short, imperative subject lines (`Add ambulance tracking page`, not `Added` or `Adding`).
Keep unrelated changes in separate commits/PRs where reasonable.

## Code conventions

- Import via the `@/` alias (`@/components/shared/StatCard`), never relative `../../..`
  paths.
- Prefer composing existing shared components over writing new bespoke markup — see
  [`docs/components.md`](./docs/components.md) for what's available.
- No backend, no real persistence — `EntityFormDialog` submissions just close the dialog.
  Don't add fake "saving..." states or local-storage persistence for mock data unless the
  issue you're working specifically asks for it.
- Every page's dataset lives in `src/data/<entity>.ts` as a plain exported array — keep new
  fixtures in the same shape (a `type`, then an array of a handful of realistic rows).

## Reporting bugs / requesting features

Use the issue templates — they'll prompt you for what's actually useful to include.
