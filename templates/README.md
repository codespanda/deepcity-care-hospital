# Templates

Starter boilerplate for extending DeepCity Care Hospital with new pages, dialogs and
components, matching the conventions used throughout `src/`. These files live **outside**
`src/` on purpose — they are not part of the app build (see `tsconfig.app.json`'s
`"include": ["src"]`), so you can leave them here for reference or copy one into `src/`
and start editing.

## What's here

| File | Use it for |
| --- | --- |
| [`page-list.template.tsx`](./page-list.template.tsx) | A new "list" page: stat cards, filter bar, table, right-column widgets, bottom charts. Matches `src/pages/Doctors.tsx`, `src/pages/Pharmacy.tsx`, etc. |
| [`page-detail.template.tsx`](./page-detail.template.tsx) | A new "detail/profile" page: header with actions, info cards, tabs, right-column summary. Matches `src/pages/patients/PatientProfile.tsx`, `src/pages/appointments/AppointmentDetails.tsx`. |
| [`dialog-form.template.tsx`](./dialog-form.template.tsx) | Wiring a new "Add/Create" popup to a page header button using `EntityFormDialog`. |
| [`component.template.tsx`](./component.template.tsx) | A new reusable shared component (card wrapper + typed props). |

## How to use a template

1. Copy the file into the right place under `src/` (e.g. `src/pages/MyNewPage.tsx`).
2. Search for `TODO` comments and replace the placeholder names, icons, mock data and copy.
3. Register the page: add a route in [`src/App.tsx`](../src/App.tsx) and a nav entry in
   [`src/lib/nav.ts`](../src/lib/nav.ts). See [`docs/adding-pages.md`](../docs/adding-pages.md)
   for the full walkthrough.
4. Run `npm run dev` and check the page renders, then `npx tsc -b --noEmit` before committing.

## Shared components these templates lean on

All of these live in `src/components/shared/` — see [`docs/components.md`](../docs/components.md)
for the full prop reference:

- `PageHeader` — breadcrumb + title + description + right-aligned actions
- `StatCard` — icon, label, value, delta (optional sparkline)
- `FilterBar` / `SearchInput` / `FilterSelect` — the search + filters row above a table
- `StatusBadge` — auto-colors a status string (green/amber/red/blue/violet/gray)
- `TablePagination` — "Showing X to Y of Z" footer with page controls
- `DonutCard` / `TrendChartCard` / `BarListCard` — the three chart card shapes used everywhere
- `QuickActionsGrid` / `ActionList` / `ActivityFeed` — the right-column widget shapes
- `EntityFormDialog` — generic popup form (see `src/lib/formFields.ts` for existing field sets)
