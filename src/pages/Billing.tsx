import { useState } from 'react'
import {
  FileText,
  Wallet,
  Clock3,
  CalendarX2,
  IndianRupee,
  ShieldCheck,
  FileDown,
  Plus,
  ChevronDown,
  Eye,
  Download,
  MoreVertical,
  FilePlus2,
  CreditCard,
  Undo2,
  BellRing,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { invoices } from '@/data/invoices'
import { invoiceFields } from '@/lib/formFields'

const invoiceSummary = [
  { name: 'Paid', value: 986, color: '#22c55e' },
  { name: 'Pending', value: 212, color: '#f59e0b' },
  { name: 'Overdue', value: 50, color: '#f43f5e' },
  { name: 'Cancelled', value: 0, color: '#cbd5e1' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Create Invoice', color: 'blue' },
  { icon: FilePlus2, label: 'Create Estimate', color: 'green' },
  { icon: CreditCard, label: 'Record Payment', color: 'purple' },
  { icon: Undo2, label: 'Refund Payment', color: 'orange' },
  { icon: BellRing, label: 'Send Reminder', color: 'red' },
  { icon: FileDown, label: 'Download Report', color: 'teal' },
]

const recentPayments = [
  { name: 'Rohan Verma', invoice: 'INV-2024-1247', amount: '₹2,850.00', status: 'Paid', time: '10:30 AM' },
  { name: 'Suresh Patel', invoice: 'INV-2024-1245', amount: '₹4,300.00', status: 'Paid', time: '09:15 AM' },
  { name: 'Ananya Gupta', invoice: 'INV-2024-1246', amount: '₹4,000.00', status: 'Partial', time: 'Yesterday' },
  { name: 'Amit Kumar', invoice: 'INV-2024-1243', amount: '₹3,600.00', status: 'Paid', time: '12 May 2024' },
]

const revenueData = [
  { day: '1 May', revenue: 8 },
  { day: '5 May', revenue: 14 },
  { day: '9 May', revenue: 10 },
  { day: '13 May', revenue: 18 },
  { day: '17 May', revenue: 12 },
  { day: '21 May', revenue: 16 },
  { day: '25 May', revenue: 9 },
  { day: '31 May', revenue: 19 },
]

const paymentStatus = [
  { name: 'Paid', value: 986, color: '#22c55e' },
  { name: 'Partial', value: 212, color: '#f59e0b' },
  { name: 'Unpaid', value: 50, color: '#f43f5e' },
]

const topRevenue = [
  { label: 'Cardiology', value: '₹6,25,430', percent: 90 },
  { label: 'Orthopedics', value: '₹3,85,210', percent: 62 },
  { label: 'General Medicine', value: '₹3,10,450', percent: 50 },
  { label: 'Neurology', value: '₹2,50,300', percent: 40 },
  { label: 'Pediatrics', value: '₹1,40,040', percent: 22 },
]

export function Billing() {
  const [createInvoiceOpen, setCreateInvoiceOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Billing & Invoices', 'Invoices']}
        title="Billing & Invoices"
        description="Manage patient bills, invoices and payments."
        actions={
          <>
            <Button variant="outline">
              <ShieldCheck className="size-4" /> Insurance Claims
            </Button>
            <Button variant="outline">
              <FileDown className="size-4" /> Export Reports
            </Button>
            <Button onClick={() => setCreateInvoiceOpen(true)}>
              <Plus className="size-4" /> Create Invoice <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={createInvoiceOpen}
        onOpenChange={setCreateInvoiceOpen}
        title="Create Invoice"
        description="Generate a new invoice for a patient."
        icon={FileText}
        fields={invoiceFields}
        submitLabel="Create Invoice"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={FileText} color="blue" label="Total Invoices" value="1,248" delta="12.6%" />
        <StatCard icon={Wallet} color="green" label="Paid Invoices" value="986" delta="10.4%" />
        <StatCard icon={Clock3} color="purple" label="Pending Invoices" value="212" delta="5.3%" deltaDirection="down" />
        <StatCard icon={CalendarX2} color="orange" label="Overdue Invoices" value="50" delta="8.1%" deltaDirection="down" />
        <StatCard icon={IndianRupee} color="red" label="Total Revenue" value="₹18,75,430" delta="14.2%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search by invoice no., patient name..." />
        <FilterSelect placeholder="Status" options={['All Status', 'Paid', 'Pending', 'Overdue']} />
        <FilterSelect placeholder="Payment Status" options={['All', 'Paid', 'Partial', 'Unpaid']} />
        <FilterSelect placeholder="Department" options={['All Departments', 'Cardiology', 'Orthopedics']} />
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
                  <TableHead>Invoice No.</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium text-foreground">{inv.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={inv.avatar} alt={inv.patient} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="text-foreground">{inv.patient}</p>
                          <p className="text-xs text-muted-foreground">{inv.patientId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{inv.department}</TableCell>
                    <TableCell>{inv.dueDate}</TableCell>
                    <TableCell className="font-medium text-foreground">₹{inv.amount.toLocaleString('en-IN')}.00</TableCell>
                    <TableCell>
                      <StatusBadge status={inv.status} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={inv.paymentStatus} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Eye className="size-4" />
                        </button>
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Download className="size-4" />
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={1248} totalPages={156} itemLabel="invoices" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Invoice Summary" data={invoiceSummary} centerValue="1,248" centerLabel="Total" />

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Collection Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Amount Collected</p>
                <p className="text-lg font-bold text-foreground">₹16,45,230</p>
                <p className="text-xs font-medium text-emerald-600">↑ 13.6% from last month</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Outstanding Amount</p>
                <p className="text-lg font-bold text-foreground">₹2,30,200</p>
                <p className="text-xs font-medium text-rose-600">↓ 6.8% from last month</p>
              </div>
            </div>
          </div>

          <QuickActionsGrid actions={quickActions} />

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Recent Payments</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {recentPayments.map((p) => (
                <li key={p.invoice} className="flex items-center justify-between gap-2 text-sm">
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.invoice}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-medium text-foreground">{p.amount}</p>
                    <p className="text-xs text-emerald-600">{p.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Revenue Overview"
          type="bar"
          data={revenueData}
          xKey="day"
          series={[{ key: 'revenue', label: 'Revenue', color: '#3b82f6' }]}
          yFormatter={(v) => `${v}L`}
        />
        <DonutCard title="Payment Status" data={paymentStatus} centerValue="1,248" centerLabel="Total" />
      </div>
      <div className="mt-5">
        <BarListCard title="Top Revenue by Department" items={topRevenue} />
      </div>
    </div>
  )
}
