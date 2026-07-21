import { useState } from 'react'
import {
  ShieldCheck,
  Users,
  FileText,
  CheckCircle2,
  Wallet,
  BarChart3,
  ClipboardList,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  FilePlus2,
  ListChecks,
  FileDown,
  TriangleAlert,
} from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCard } from '@/components/shared/StatCard'
import { FilterBar } from '@/components/shared/FilterBar'
import { SearchInput } from '@/components/shared/SearchInput'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { TablePagination } from '@/components/shared/TablePagination'
import { DonutCard } from '@/components/shared/DonutCard'
import { TrendChartCard } from '@/components/shared/TrendChartCard'
import { BarListCard } from '@/components/shared/BarListCard'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { insurancePolicies } from '@/data/insurance'
import { insurancePolicyFields } from '@/lib/formFields'

const policyTypeColor: Record<string, string> = {
  'Family Floater': 'bg-blue-100 text-blue-700',
  Individual: 'bg-emerald-100 text-emerald-700',
  'Senior Citizen': 'bg-amber-100 text-amber-700',
}

const providerColor: Record<string, string> = {
  'Star Health': 'bg-blue-100 text-blue-600',
  'HDFC ERGO': 'bg-rose-100 text-rose-600',
  'ICICI Lombard': 'bg-orange-100 text-orange-600',
  'Bajaj Allianz': 'bg-indigo-100 text-indigo-600',
  Religare: 'bg-emerald-100 text-emerald-600',
  'TATA AIG': 'bg-sky-100 text-sky-600',
  'Digit Insurance': 'bg-violet-100 text-violet-600',
  'Niva Bupa': 'bg-pink-100 text-pink-600',
}

const claimsSummary = [
  { name: 'Approved', value: 312, color: '#22c55e' },
  { name: 'Pending', value: 78, color: '#f59e0b' },
  { name: 'Rejected', value: 42, color: '#f43f5e' },
]

const topProviders = [
  { label: 'Star Health', value: '₹78,45,210', percent: 100 },
  { label: 'ICICI Lombard', value: '₹56,21,450', percent: 72 },
  { label: 'HDFC ERGO', value: '₹42,18,320', percent: 54 },
  { label: 'Bajaj Allianz', value: '₹28,11,630', percent: 36 },
  { label: 'Others', value: '₹43,79,950', percent: 56 },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New Policy', color: 'blue' },
  { icon: FilePlus2, label: 'Raise New Claim', color: 'green' },
  { icon: ListChecks, label: 'View All Claims', color: 'purple' },
  { icon: ShieldCheck, label: 'Insurance Providers', color: 'orange' },
  { icon: TriangleAlert, label: 'Policy Expiry Report', color: 'red' },
  { icon: FileDown, label: 'Download Report', color: 'teal' },
]

const expiryAlerts = [
  { id: 'POL-2024-1245', patient: 'Suresh Patel', meta: 'Expired on 04 Jan 2025' },
  { id: 'POL-2024-1244', patient: 'Neha Singh', meta: 'Expires in 15 days' },
  { id: 'POL-2024-1247', patient: 'Rohan Verma', meta: 'Expires in 22 days' },
  { id: 'POL-2024-1243', patient: 'Amit Kumar', meta: 'Expires in 28 days' },
]

const policiesByType = [
  { name: 'Individual', value: 620, color: '#3b82f6' },
  { name: 'Family Floater', value: 420, color: '#22c55e' },
  { name: 'Senior Citizen', value: 128, color: '#8b5cf6' },
  { name: 'Others', value: 80, color: '#f59e0b' },
]

const claimsTrend = [
  { month: 'Jan', claims: 20 },
  { month: 'Feb', claims: 35 },
  { month: 'Mar', claims: 28 },
  { month: 'Apr', claims: 45 },
  { month: 'May', claims: 38 },
  { month: 'Jun', claims: 52 },
  { month: 'Jul', claims: 60 },
]

export function Insurance() {
  const [addPolicyOpen, setAddPolicyOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Insurance', 'Overview']}
        title="Insurance Management"
        description="Manage insurance providers, policies, claims and settlements."
        actions={
          <>
            <Button variant="outline">
              <BarChart3 className="size-4" /> Insurance Reports
            </Button>
            <Button variant="outline">
              <ClipboardList className="size-4" /> Claim Analytics
            </Button>
            <Button onClick={() => setAddPolicyOpen(true)}>
              <Plus className="size-4" /> Add New Policy <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={addPolicyOpen}
        onOpenChange={setAddPolicyOpen}
        title="Add New Policy"
        description="Register a new insurance policy for a patient."
        icon={ShieldCheck}
        fields={insurancePolicyFields}
        submitLabel="Add Policy"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={ShieldCheck} color="blue" label="Total Policies" value="1,248" delta="12.5%" />
        <StatCard icon={Users} color="green" label="Active Policies" value="986" delta="8.6%" />
        <StatCard icon={FileText} color="purple" label="Claims Raised" value="432" delta="5.3%" />
        <StatCard icon={CheckCircle2} color="orange" label="Claims Approved" value="312" delta="7.8%" />
        <StatCard icon={Wallet} color="red" label="Total Claimed Amount" value="₹2,48,75,560" delta="14.2%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search by policy number, patient or provider..." />
        <FilterSelect placeholder="Insurance Provider" options={['All Providers', 'Star Health', 'HDFC ERGO', 'ICICI Lombard']} />
        <FilterSelect placeholder="Policy Status" options={['All Status', 'Active', 'Expired', 'Pending']} />
        <FilterSelect placeholder="Policy Type" options={['All Types', 'Family Floater', 'Individual', 'Senior Citizen']} />
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </FilterBar>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Policy No.</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Policy Type</TableHead>
                  <TableHead>Valid Till</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sum Insured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {insurancePolicies.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium text-primary">{p.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={p.avatar} alt={p.patient} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="text-foreground">{p.patient}</p>
                          <p className="text-xs text-muted-foreground">{p.patientId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <span className={`flex size-6 items-center justify-center rounded-md ${providerColor[p.provider] ?? 'bg-secondary text-muted-foreground'}`}>
                          <ShieldCheck className="size-3.5" />
                        </span>
                        {p.provider}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={policyTypeColor[p.policyType]}>
                        {p.policyType}
                      </Badge>
                    </TableCell>
                    <TableCell>{p.validTill}</TableCell>
                    <TableCell>
                      <StatusBadge status={p.status} />
                    </TableCell>
                    <TableCell className="font-medium text-foreground">₹{p.sumInsured.toLocaleString('en-IN')}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Eye className="size-4" />
                        </button>
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Pencil className="size-4" />
                        </button>
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <MoreVertical className="size-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination showingFrom={1} showingTo={8} totalCount={1248} totalPages={156} itemLabel="policies" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Claims Summary" data={claimsSummary} centerValue="432" centerLabel="Total Claims" />

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Claims Amount Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Total Claimed</p>
                <p className="text-lg font-bold text-foreground">₹2,48,75,560</p>
                <p className="text-xs font-medium text-emerald-600">↑ 14.2% from last month</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Settled</p>
                <p className="text-lg font-bold text-foreground">₹1,85,42,300</p>
                <p className="text-xs font-medium text-emerald-600">↑ 10.6% from last month</p>
              </div>
            </div>
          </div>

          <BarListCard title="Top Insurance Providers" rank items={topProviders} />
          <QuickActionsGrid actions={quickActions} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Policy Expiry Alerts</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-3.5">
            {expiryAlerts.map((e) => (
              <li key={e.id} className="flex items-start gap-2.5 text-sm">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-rose-500" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">
                    {e.id} <span className="font-normal text-muted-foreground">· {e.patient}</span>
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{e.meta}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-medium text-primary hover:underline">+ 12 more alerts</p>
        </div>

        <DonutCard title="Policies by Type" periodLabel="This Month" data={policiesByType} centerValue="1,248" centerLabel="Total Policies" />

        <TrendChartCard
          title="Monthly Claims Trend"
          periodLabel="This Year"
          type="line"
          data={claimsTrend}
          xKey="month"
          series={[{ key: 'claims', label: 'Claims', color: '#3b82f6' }]}
          yFormatter={(v) => `${v}L`}
        />
      </div>
    </div>
  )
}
