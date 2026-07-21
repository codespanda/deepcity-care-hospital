# Project Structure

```
deepcity-care-hospital/
├── .github/                    GitHub issue/PR templates
├── docs/                       You are here
├── templates/                  Copy-paste starter files for new pages/components
├── public/                     Static assets copied verbatim into dist/ (favicon, CNAME, ...)
└── src/
    ├── main.tsx                App entry point: ThemeProvider + BrowserRouter + TooltipProvider
    ├── App.tsx                 Route table (lazy-loaded pages)
    ├── index.css                Tailwind import + design tokens (light/dark CSS variables)
    │
    ├── components/
    │   ├── ui/                 shadcn/ui primitives (button, dialog, table, select, ...) —
    │   │                       generated via the shadcn CLI, treat as vendored, edit sparingly
    │   ├── shared/              App-wide building blocks used by nearly every page:
    │   │                       PageHeader, StatCard, DonutCard, TrendChartCard, BarListCard,
    │   │                       FilterBar/SearchInput/FilterSelect, StatusBadge, TablePagination,
    │   │                       QuickActionsGrid/ActionList/ActivityFeed, EntityFormDialog,
    │   │                       GetSupportDialog — see docs/components.md
    │   ├── layout/               AppLayout, AppSidebar, Topbar, Footer (dashboard shell) and
    │   │                       AuthLayout (centered card shell for /signin, /signup)
    │   ├── beds/, inventory/, pharmacy/
    │   │                       One-off dialogs specific to a single page (e.g.
    │   │                       BedManagementDialog is only used by src/pages/BedsRooms.tsx)
    │
    ├── data/                    Static mock fixtures — one file per entity (doctors.ts,
    │                           patients.ts, appointments.ts, invoices.ts, ...). No API layer;
    │                           pages import arrays directly from here.
    │
    ├── lib/
    │   ├── nav.ts               Sidebar nav items (navItems, authNavItems) — add a route here
    │   │                       to make it appear in the sidebar
    │   ├── formFields.ts        FormField[] definitions consumed by EntityFormDialog, one
    │   │                       export per entity (appointmentFields, doctorFields, ...)
    │   ├── theme.tsx            ThemeProvider/useTheme — light/dark mode, persisted to
    │   │                       localStorage
    │   └── utils.ts             cn() Tailwind class-merge helper (shadcn convention)
    │
    └── pages/                   One file per route, grouped into subfolders where a section
        │                       has more than one page:
        ├── Dashboard.tsx
        ├── Doctors.tsx, Departments.tsx, Billing.tsx, Pharmacy.tsx, LabReports.tsx,
        │   BedsRooms.tsx, Inventory.tsx, Insurance.tsx, Messages.tsx, Settings.tsx
        ├── appointments/         AppointmentsList, DoctorSchedule, AppointmentDetails
        ├── patients/             PatientsList, PatientProfile
        ├── settings/             One component per Settings tab (GeneralSettingsTab,
        │                       ProfileSettingsTab, PasswordSecurityTab, ...) — rendered by
        │                       src/pages/Settings.tsx based on the active tab
        └── auth/                 SignIn, SignUp (rendered via AuthLayout, outside the
                                dashboard shell)
```

## Where things live, by task

| I want to... | Look at |
| --- | --- |
| Add a stat card, table, or chart to a page | `src/components/shared/` |
| Change what data a page shows | `src/data/<entity>.ts` |
| Add a new "+ Add X" popup | `src/lib/formFields.ts` + `EntityFormDialog` |
| Add a sidebar link | `src/lib/nav.ts` |
| Add a new route | `src/App.tsx` |
| Change colors / add a theme | `src/index.css` (see [Theming](./theming.md)) |
| Change the sidebar/topbar/footer shell | `src/components/layout/` |
