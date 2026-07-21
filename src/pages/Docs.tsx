import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse, Moon, Sun, Code2, ArrowRight, Check, Copy,
  Zap, Palette, Stethoscope, BarChart3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme'

const GITHUB_URL = 'https://github.com/codespanda/deepcity-care-hospital'

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'quick-start', label: 'Quick start' },
  { id: 'scripts', label: 'Scripts' },
  { id: 'deploy', label: 'Deploy to GitHub Pages' },
  { id: 'structure', label: 'Project structure' },
  { id: 'pages', label: 'Pages & routes' },
  { id: 'components', label: 'Using components' },
  { id: 'theming', label: 'Theming & dark mode' },
]

const OVERVIEW_CARDS = [
  { icon: Zap, title: 'React 19 + Vite 8', desc: 'Instant HMR in dev and a small, fast production build.' },
  { icon: Palette, title: 'Tailwind v4 + shadcn/ui', desc: 'Accessible, themeable components built on radix-ui primitives.' },
  { icon: Stethoscope, title: 'Clinical modules', desc: 'Appointments, patients, doctors, beds & rooms, pharmacy and lab reports out of the box.' },
  { icon: BarChart3, title: 'Recharts data viz', desc: 'Trend, donut and bar charts across the dashboard and every module, ready for real data.' },
]

const SCRIPTS = [
  { command: 'npm run dev', desc: 'Start the Vite dev server with HMR.' },
  { command: 'npm run build', desc: 'Type-check and build to dist/.' },
  { command: 'npm run preview', desc: 'Serve the production build locally.' },
  { command: 'npm run lint', desc: 'Run Oxlint across the project.' },
  { command: 'npm run deploy', desc: 'Build and push dist/ to the gh-pages branch.' },
]

const ROUTES = [
  { path: '/', desc: 'Dashboard — stat cards, outpatient trend chart, department distribution, quick actions' },
  { path: '/appointments', desc: 'Appointments list with filters and a calendar mini-widget' },
  { path: '/appointments/schedule', desc: 'Doctor Schedule — day/week/month timeline board' },
  { path: '/appointments/:id', desc: 'Appointment Details — timeline, patient summary, billing' },
  { path: '/patients', desc: 'Patients — searchable directory' },
  { path: '/patients/:id', desc: 'Patient Profile — vitals, medications, diagnosis history' },
  { path: '/doctors', desc: 'Doctors directory with availability and performance' },
  { path: '/departments', desc: 'Departments with staffing and visit trends' },
  { path: '/billing', desc: 'Billing & Invoices — payments, revenue breakdowns' },
  { path: '/pharmacy', desc: 'Pharmacy — stock, suppliers, purchase orders' },
  { path: '/lab-reports', desc: 'Lab Reports with status and critical alerts' },
  { path: '/beds-rooms', desc: 'Beds & Rooms — live occupancy, room transfer, bed management' },
  { path: '/inventory', desc: 'Inventory — stock levels and reports' },
  { path: '/insurance', desc: 'Insurance — policies, claims and providers' },
  { path: '/messages', desc: 'Messages — conversation list and thread view' },
  { path: '/settings', desc: 'Settings — 12 tabs, including a working dark mode toggle' },
  { path: '/signin', desc: 'Sign in screen (outside the dashboard shell)' },
  { path: '/signup', desc: 'Create an account (outside the dashboard shell)' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-secondary/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{lang}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-14 first:border-t-0 first:pt-0">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{kicker}</p>
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      <div className="mt-6 space-y-6 text-muted-foreground">{children}</div>
    </section>
  )
}

export function Docs() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <a id="top" />
      <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartPulse className="size-4" />
          </span>
          <span className="font-bold text-foreground">DeepCity Care Hospital</span>
          <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            v0.0 · React + Vite
          </span>
        </a>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="outline" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
              <Code2 className="size-4" /> GitHub
            </a>
          </Button>
          <Button asChild>
            <Link to="/">Open Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-12 px-4 py-10 sm:px-6">
        <nav className="sticky top-24 hidden h-fit w-52 shrink-0 lg:block">
          <ul className="space-y-0.5 border-l border-border pl-4">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0 flex-1">
          <div className="pb-14">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Everything runs on day one.
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Everything you need to run DeepCity Care Hospital and build with its component
              library — a hospital admin dashboard built on React 19, Vite 8, Tailwind v4, and
              shadcn/ui.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/">
                  Open the live dashboard <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#quick-start">Read the quick start</a>
              </Button>
            </div>
          </div>

          <Section id="overview" kicker="Overview" title="A production-ready hospital admin starter">
            <p>
              A hospital-counter-to-back-office admin starter with appointments, patients,
              doctors, billing, pharmacy, lab reports, beds & rooms, inventory, insurance and
              messaging — fully responsive with dark mode.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {OVERVIEW_CARDS.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <c.icon className="size-4.5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="quick-start" kicker="Quick start" title="Get it running locally">
            <p>You'll need Node 18+ (Node 20 or 22 recommended) and npm.</p>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">1. Get the code</h3>
              <p className="mb-3 text-sm">Clone the repository (or download it as a ZIP).</p>
              <CodeBlock lang="bash" code={`git clone ${GITHUB_URL}.git\ncd deepcity-care-hospital`} />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">2. Install dependencies</h3>
              <CodeBlock lang="bash" code="npm install" />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">3. Start the dev server</h3>
              <p className="mb-3 text-sm">Vite serves the app at http://localhost:5173/ with hot reload.</p>
              <CodeBlock lang="bash" code="npm run dev" />
              <p className="mt-3 text-sm">
                The <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">@</code> alias points to{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">src/</code>, so imports look like{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">import {'{'} Button {'}'} from '@/components/ui/button'</code>.
              </p>
            </div>
          </Section>

          <Section id="scripts" kicker="Scripts" title="Available commands">
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/40 text-foreground">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Command</th>
                    <th className="px-4 py-2.5 font-semibold">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {SCRIPTS.map((s) => (
                    <tr key={s.command}>
                      <td className="px-4 py-2.5 font-mono text-[13px] text-foreground">{s.command}</td>
                      <td className="px-4 py-2.5">{s.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="deploy" kicker="Deploy" title="Deploy to GitHub Pages">
            <p>
              This project uses <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">HashRouter</code>, so
              every route lives after a <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">#</code> (e.g.{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">/#/appointments</code>) — GitHub Pages
              never has to server-side rewrite a nested path, so there's no 404.html redirect trick needed.
            </p>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">1. Build and publish</h3>
              <p className="mb-3 text-sm">
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">npm run deploy</code> builds the app and
                pushes <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">dist/</code> to the{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">gh-pages</code> branch via the{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">gh-pages</code> npm package.
              </p>
              <CodeBlock lang="bash" code="npm run deploy" />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">2. Custom domain</h3>
              <p className="text-sm">
                A <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">public/CNAME</code> file keeps a custom
                domain attached across deploys (Vite copies <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">public/</code>{' '}
                verbatim into <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">dist/</code>). If Pages serves
                from the domain root, make sure <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">base</code>{' '}
                in <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">vite.config.ts</code> is{' '}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">'/'</code>, not a repo subpath — a mismatch
                here is the most common cause of assets 404ing in production.
              </p>
            </div>

            <p className="text-sm">
              Live at{' '}
              <a href="https://deepcity-care.codespanda.com/" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">
                https://deepcity-care.codespanda.com/
              </a>
            </p>
          </Section>

          <Section id="structure" kicker="Project structure" title="A quick map of where things live">
            <CodeBlock lang="text" code={`src/
├─ App.tsx              # route table
├─ main.tsx             # app entry (HashRouter + ThemeProvider)
├─ pages/                # route-level page components
│  ├─ appointments/      # AppointmentsList, DoctorSchedule, AppointmentDetails
│  ├─ patients/          # PatientsList, PatientProfile
│  ├─ auth/              # SignIn, SignUp
│  └─ settings/          # one file per settings tab
├─ components/
│  ├─ ui/                # shadcn primitives (Button, Card, Dialog…)
│  ├─ shared/             # StatCard, DonutCard, EntityFormDialog…
│  ├─ layout/             # AppLayout, AppSidebar, Topbar, AuthLayout
│  ├─ pharmacy/           # PurchaseOrderDialog, SupplierManagementDialog
│  └─ beds/               # RoomTransferDialog, BedManagementDialog
├─ data/                  # static mock fixtures, one file per entity
└─ lib/                   # nav.ts, formFields.ts, theme.tsx, utils.ts`} />
          </Section>

          <Section id="pages" kicker="Pages & routes" title="Every route and what it renders">
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/40 text-foreground">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Route</th>
                    <th className="px-4 py-2.5 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {ROUTES.map((r) => (
                    <tr key={r.path}>
                      <td className="px-4 py-2.5 whitespace-nowrap font-mono text-[13px] text-foreground">{r.path}</td>
                      <td className="px-4 py-2.5">{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="components" kicker="Using components" title="Compose from the UI kit">
            <p>
              Components live under <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">src/components</code>.
              Import what you need and compose.
            </p>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Buttons</h3>
              <CodeBlock lang="tsx" code={`import { Button } from '@/components/ui/button';

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost" size="sm">Ghost</Button>`} />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">StatCard</h3>
              <CodeBlock lang="tsx" code={`import { StatCard } from '@/components/shared/StatCard';
import { Users } from 'lucide-react';

<StatCard
  icon={Users}
  color="blue"
  label="Total Patients"
  value="1,248"
  delta="+12.5%"
  deltaDirection="up"
  sparkline={[40, 46, 50, 54, 59, 63, 68]}
/>`} />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">EntityFormDialog</h3>
              <p className="mb-3 text-sm">
                One generic form dialog is wired to every Add / Create / Upload button in the app —
                pass it a field list and it renders the form.
              </p>
              <CodeBlock lang="tsx" code={`import { EntityFormDialog } from '@/components/shared/EntityFormDialog';
import { patientFields } from '@/lib/formFields';

<EntityFormDialog
  open={open}
  onOpenChange={setOpen}
  title="Add New Patient"
  description="Enter the patient's details below."
  fields={patientFields}
  submitLabel="Add Patient"
/>`} />
            </div>
          </Section>

          <Section id="theming" kicker="Theming" title="Theming & dark mode">
            <p>
              Theming uses Tailwind's <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">dark</code>{' '}
              class strategy via a custom variant. Colors are OKLCH CSS custom properties defined
              in <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">src/index.css</code>, toggled by
              adding <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">.dark</code> to the document root.
            </p>
            <CodeBlock lang="css" code={`:root {
  --background: oklch(0.984 0.003 247.86);
  --foreground: oklch(0.208 0.042 265.75);
  --primary: oklch(0.546 0.215 262.88);
}
.dark {
  --background: oklch(0.16 0.014 264.5);
  --foreground: oklch(0.94 0.006 264.5);
}`} />
            <p>
              The <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">ThemeProvider</code> in{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">src/lib/theme.tsx</code> reads the
              user's OS preference on first load, persists the choice to{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">localStorage['deepcity-theme']</code>,
              and exposes a <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">useTheme()</code> hook —
              the same hook powering the toggle at the top of this page.
            </p>
            <CodeBlock lang="tsx" code={`import { useTheme } from '@/lib/theme';

const { theme, toggleTheme } = useTheme();`} />
          </Section>
        </main>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        DeepCity Care Hospital · React + Vite template ·{' '}
        <a href="#top" className="text-primary hover:underline">Back to top</a>
      </footer>
    </div>
  )
}
