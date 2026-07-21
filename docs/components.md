# Components Reference

All components below live in `src/components/shared/` and are styled with Tailwind's
semantic tokens, so they render correctly in both light and dark mode with no extra work.
Import them via the `@/` alias, e.g. `import { StatCard } from '@/components/shared/StatCard'`.

## PageHeader

The breadcrumb + title + description + right-aligned action buttons block at the top of
every page.

```tsx
<PageHeader
  breadcrumb={['Doctors', 'All Doctors']}
  title="Doctors"
  description="Manage hospital doctors, profiles, schedules and availability."
  actions={<Button>...</Button>}
/>
```

| Prop | Type | Notes |
| --- | --- | --- |
| `breadcrumb` | `string[]` | Rendered with `›` separators; last item is bold |
| `title` | `string` | Page `<h1>` |
| `description` | `string?` | Muted subtitle |
| `actions` | `ReactNode?` | Usually one or more `<Button>`s |

## StatCard

One of the 4–5 metric tiles at the top of every list page.

```tsx
<StatCard icon={Users} color="blue" label="Total Doctors" value="28" delta="12.5%" />
<StatCard icon={Star} color="orange" label="Average Rating" value="4.8 / 5" note="based on 236 reviews" />
```

| Prop | Type | Notes |
| --- | --- | --- |
| `icon` | `LucideIcon` | |
| `color` | `'blue' \| 'green' \| 'purple' \| 'orange' \| 'red' \| 'teal'` | Tints the icon badge |
| `label` / `value` | `string` | |
| `delta` | `string?` | Shows an up/down arrow + colored text; omit for no trend line |
| `deltaDirection` | `'up' \| 'down'` | Default `'up'` |
| `deltaLabel` | `string?` | Default `"from last month"` |
| `note` | `string?` | Plain muted text shown instead of a delta (no arrow) — use when there's nothing to compare against, e.g. a rating |
| `sparkline` | `number[]?` | Renders a small trend line in the card's top-right corner (used on the Dashboard) |

## StatusBadge

Auto-colors a status string — you almost never need to pass `tone` explicitly.

```tsx
<StatusBadge status={doctor.status} />       // "Active" -> green, "On Leave" -> amber, ...
<StatusBadge status={po.status} tone="blue" /> // force a color when the auto-match is wrong
```

`statusTone()` (also exported) matches case-insensitively against these groups:

| Tone | Matches |
| --- | --- |
| `green` | active, available, completed, paid, in stock, confirmed, normal |
| `amber` | pending, on leave, low stock, busy, waiting, partial, scheduled |
| `red` | inactive, out of stock, overdue, cancelled, critical, occupied, unpaid, high, no show |
| `blue` | in progress, in consultation, checked in |
| `violet` | under cleaning, maintenance, re-test, review, follow-up |
| `gray` | anything else (fallback) |

If your new status string doesn't fit an existing group, pass `tone` explicitly rather than
editing the regex list — keeps the shared matcher predictable for every other page using it.

## FilterBar / SearchInput / FilterSelect

The search + filters row above a table.

```tsx
<FilterBar>
  <SearchInput placeholder="Search doctor by name, specialty..." />
  <FilterSelect placeholder="Department" options={['All Departments', 'Cardiology', 'Orthopedics']} />
  <Button variant="outline" size="sm">Reset</Button>
</FilterBar>
```

`FilterBar` is just a styled flex-wrap container — put whatever inputs/buttons you need
inside it. `FilterSelect` always defaults to `options[0]` unless you pass `defaultValue`.

## TablePagination

The "Showing X to Y of Z entries" footer under a table.

```tsx
<TablePagination showingFrom={1} showingTo={8} totalCount={1245} totalPages={156} />
```

Note: this is presentational. Since every table in this app is a static mock array, page
number clicks update the highlighted button but don't re-slice any data — see
[Getting Started](./getting-started.md) for why there's no backend. If you wire up real
data, you'll want to lift `page` state to the parent and re-slice your rows.

## DonutCard

```tsx
<DonutCard
  title="Department Distribution"
  data={[{ name: 'Cardiology', value: 250, color: '#3b82f6' }, ...]}
  centerValue="1,248"
  centerLabel="Total"
  viewAllHref="/departments"   // optional — shows a "View All" link instead of a period badge
  periodLabel="This Month"     // optional — shows a period badge instead (ignored if viewAllHref is set)
/>
```

Percentages in the legend are computed automatically from `data` — don't pass them in.

## TrendChartCard

Wraps recharts' `LineChart` / `AreaChart` / `BarChart` behind one consistent card shell.

```tsx
<TrendChartCard
  title="Revenue Overview"
  type="bar"                    // 'area' (default) | 'line' | 'bar'
  data={[{ day: '1 May', revenue: 12 }, ...]}
  xKey="day"
  series={[{ key: 'revenue', label: 'Revenue', color: '#3b82f6' }]}
  yFormatter={(v) => `${v}L`}   // optional Y-axis tick formatter
  stretch                       // optional — see below
/>
```

Pass more than one entry in `series` to render a multi-line/area chart with a color-coded
legend above the chart (used for "New Patients vs Follow Ups"-style comparisons).

`stretch` makes the chart fill its parent's height instead of a fixed 220px — only use it
when the card sits inside a `flex h-full flex-col` column and you want it to grow to match
a sibling column's height (see `src/pages/Dashboard.tsx`'s Revenue Overview card for the
pattern this was built for).

## BarListCard

The "Top N" horizontal-bar list (Top Selling Medicines, Peak Hours, ...).

```tsx
<BarListCard
  title="Top Selling Medicines"
  items={[{ label: 'Paracetamol 650mg', value: '₹1,25,450', percent: 100 }, ...]}
  rank   // optional — prefixes each row with a numbered circle (1, 2, 3, ...)
/>
```

`percent` controls the bar fill width directly (0–100) — compute it relative to whatever
your max value is; the component doesn't normalize it for you.

## QuickActionsGrid / ActionList

Two different shapes for the same idea — a list of shortcut buttons in a right-column card.

```tsx
// 2-column grid of colored pill buttons (most pages)
<QuickActionsGrid actions={[{ icon: Plus, label: 'Add New Doctor', color: 'blue' }, ...]} />

// vertical list, icon + label + optional subtitle + chevron (Messages, Settings)
<ActionList
  title="Quick Actions"
  items={[{ icon: MailPlus, color: 'blue', label: 'New Message', subtitle: 'Start a new conversation' }, ...]}
/>
```

Both accept the same `color` palette as `StatCard`. Neither wires up `onClick` per item —
add that yourself if a specific action needs to do something (most are decorative,
matching the rest of this mock-data app).

## ActivityFeed

The "Recent Activity" timeline (icon + text + timestamp, optionally a subtext line).

```tsx
<ActivityFeed
  items={[{ icon: UserPlus, color: 'blue', text: 'New patient registered', subtext: 'Vikram Joshi', time: '10:30 AM' }, ...]}
/>
```

## EntityFormDialog

The generic "Add/Create/Edit" popup used by every primary header button in the app
(New Appointment, Add New Doctor, Create Invoice, ...).

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Add New Doctor</Button>

<EntityFormDialog
  open={open}
  onOpenChange={setOpen}
  title="Add New Doctor"
  description="Add a new doctor to the hospital directory."
  icon={UserPlus}
  fields={doctorFields}       // from src/lib/formFields.ts
  submitLabel="Add Doctor"    // defaults to "Save"
/>
```

`fields` is a `FormField[]`:

```ts
type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time' | 'file' | 'select' | 'textarea'
  placeholder?: string
  options?: string[]   // required when type === 'select'
  span?: 1 | 2          // defaults to 1 (half-width in the 2-col grid); use 2 for full-width
}
```

**This dialog does not persist anything.** Submitting just closes it — there's no backend
in this project (see [Getting Started](./getting-started.md)). If you're wiring this app up
to a real API, that's the one place to change: the `onSubmit` handler inside
`src/components/shared/EntityFormDialog.tsx`.

Reuse an existing field set from `src/lib/formFields.ts` (`appointmentFields`,
`doctorFields`, `patientFields`, `departmentFields`, `invoiceFields`, `medicineFields`,
`labReportFields`, `roomFields`, `roomTransferFields`, `inventoryFields`,
`insurancePolicyFields`, `messageFields`, `stockRequestFields`) or add a new export next to
them — see [`templates/dialog-form.template.tsx`](../templates/dialog-form.template.tsx)
for a worked example.

## One-off dialogs

A few dialogs are bespoke (not built from `EntityFormDialog`) because they show a list/table
rather than a create form: `GetSupportDialog`, `BedManagementDialog`,
`InventoryReportsDialog`, `PurchaseOrdersDialog`, `SupplierManagementDialog`. If you need a
new "browse a list in a popup" dialog, copy the shortest of these
(`InventoryReportsDialog`) rather than starting from `EntityFormDialog`.
