# Adding a Page

Walkthrough for adding a brand new section to the dashboard, using a hypothetical
"Ambulances" page as the example. See [`templates/page-list.template.tsx`](../templates/page-list.template.tsx)
for the copy-paste starting point this walkthrough assumes.

## 1. Add mock data

Create `src/data/ambulances.ts`:

```ts
export type Ambulance = {
  id: string
  vehicleNo: string
  driver: string
  status: 'Available' | 'On Trip' | 'Maintenance'
}

export const ambulances: Ambulance[] = [
  { id: 'AMB-01', vehicleNo: 'PB65 AB 1234', driver: 'Rakesh Verma', status: 'Available' },
  // ...
]
```

Keep it a plain exported array/object — every page in this app imports data straight from
`src/data/`, no fetching layer to wire up.

## 2. Build the page

Copy `templates/page-list.template.tsx` to `src/pages/Ambulances.tsx` and work through the
`TODO`s: swap the icon imports, point the table at `ambulances`, adjust the columns, and
replace the stat cards/donut/chart mock numbers with whatever's meaningful for this data.
Lean on [Components Reference](./components.md) for prop shapes.

If the page needs its own "Add New" popup, add a field set to `src/lib/formFields.ts`:

```ts
export const ambulanceFields: FormField[] = [
  { name: 'vehicleNo', label: 'Vehicle Number', type: 'text', span: 2 },
  { name: 'driver', label: 'Driver', type: 'text' },
  { name: 'status', label: 'Status', type: 'select', options: ['Available', 'On Trip', 'Maintenance'] },
]
```

## 3. Register the route

In `src/App.tsx`, add a lazy import next to the others and a `<Route>` inside the
`<AppLayout>` route group (not the standalone `/signin`-style routes below it):

```tsx
const Ambulances = lazy(() => import('@/pages/Ambulances').then((m) => ({ default: m.Ambulances })))

// ...inside <Route element={<AppLayout />}>
<Route path="/ambulances" element={<Ambulances />} />
```

## 4. Add the sidebar link

In `src/lib/nav.ts`, add an entry to `navItems` (or `authNavItems` if it's an
auth-adjacent page that should live outside the dashboard shell):

```ts
import { Ambulance } from 'lucide-react'

// ...
{ label: 'Ambulances', href: '/ambulances', icon: Ambulance },
```

Order in this array is the order it renders in the sidebar.

## 5. Verify

```bash
npm run dev
```

Click through to the new page in the browser, check the console for errors, then:

```bash
npx tsc -b --noEmit
```

Both should be clean before you commit — see [Getting Started](./getting-started.md#type-checking).

## Adding a detail/profile page instead

If the new section needs a "click a row → see a detail page" flow (like Patients →
Patient Profile), copy [`templates/page-detail.template.tsx`](../templates/page-detail.template.tsx)
instead, and register it with a `:id` route param:

```tsx
<Route path="/ambulances/:id" element={<AmbulanceDetails />} />
```

Then link to it from the list page's table rows with `<Link to={`/ambulances/${row.id}`}>`.
