import { useState } from 'react'
import {
  FileText,
  CheckCircle2,
  FlaskConical,
  RefreshCcw,
  TriangleAlert,
  Settings2,
  FileDown,
  Plus,
  ChevronDown,
  Eye,
  Download,
  MoreVertical,
  FilePlus2,
  FileStack,
  Printer,
  UserRound,
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
import { ActivityFeed, type ActivityItem } from '@/components/shared/ActivityFeed'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { labReports } from '@/data/labReports'
import { labReportFields } from '@/lib/formFields'

const reportsByStatus = [
  { name: 'Completed', value: 2786, color: '#22c55e' },
  { name: 'Pending', value: 312, color: '#f59e0b' },
  { name: 'Re-Test', value: 98, color: '#8b5cf6' },
  { name: 'Critical', value: 52, color: '#f43f5e' },
]

const criticalReports = [
  { id: 'LR-2024-3261', patient: 'Priya Sharma', date: '14 May 2024' },
  { id: 'LR-2024-3244', patient: 'Rohan Verma', date: '13 May 2024' },
  { id: 'LR-2024-3220', patient: 'Ananya Gupta', date: '12 May 2024' },
  { id: 'LR-2024-3198', patient: 'Suresh Patel', date: '10 May 2024' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Upload Report', color: 'blue' },
  { icon: FilePlus2, label: 'Add Manual Result', color: 'green' },
  { icon: FileStack, label: 'Report Templates', color: 'purple' },
  { icon: RefreshCcw, label: 'Re-Test Request', color: 'orange' },
  { icon: Printer, label: 'Print Reports', color: 'red' },
  { icon: FileDown, label: 'Download Reports', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: Plus, color: 'blue', text: 'New report uploaded for Priya Sharma', time: '10:30 AM' },
  { icon: CheckCircle2, color: 'green', text: 'Report approved by Dr. Mehta', time: '09:45 AM' },
  { icon: TriangleAlert, color: 'red', text: 'Critical result flagged for Rohan Verma', time: 'Yesterday' },
  { icon: RefreshCcw, color: 'orange', text: 'Re-test requested for Ananya Gupta', time: '12 May 2024' },
  { icon: Printer, color: 'purple', text: 'Report printed for Suresh Patel', time: '12 May 2024' },
]

const reportsTrend = [
  { day: '1 May', reports: 260 },
  { day: '9 May', reports: 320 },
  { day: '17 May', reports: 480 },
  { day: '21 May', reports: 380 },
  { day: '31 May', reports: 300 },
]

const topTests = [
  { label: 'CBC', value: '685', percent: 100 },
  { label: 'Lipid Profile', value: '542', percent: 79 },
  { label: 'Thyroid Profile', value: '418', percent: 61 },
  { label: 'Liver Function Test', value: '356', percent: 52 },
  { label: 'Blood Sugar (Fasting)', value: '312', percent: 46 },
]

const reportsByDept = [
  { label: 'Pathology', value: '2,245', percent: 100 },
  { label: 'Microbiology', value: '412', percent: 18 },
  { label: 'Immunology', value: '298', percent: 13 },
  { label: 'Cardiology', value: '186', percent: 8 },
  { label: 'Others', value: '107', percent: 5 },
]

export function LabReports() {
  const [uploadReportOpen, setUploadReportOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Laboratory', 'Lab Reports']}
        title="Lab Reports"
        description="Manage and track all laboratory reports and test results."
        actions={
          <>
            <Button variant="outline">
              <Settings2 className="size-4" /> Report Settings
            </Button>
            <Button variant="outline">
              <FileDown className="size-4" /> Export Reports
            </Button>
            <Button onClick={() => setUploadReportOpen(true)}>
              <Plus className="size-4" /> Upload Report <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={uploadReportOpen}
        onOpenChange={setUploadReportOpen}
        title="Upload Report"
        description="Upload a new laboratory test report."
        icon={FileText}
        fields={labReportFields}
        submitLabel="Upload Report"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={FileText} color="blue" label="Total Reports" value="3,248" delta="12.8%" />
        <StatCard icon={CheckCircle2} color="green" label="Completed" value="2,786" delta="10.6%" />
        <StatCard icon={FlaskConical} color="orange" label="Pending" value="312" delta="5.4%" deltaDirection="down" />
        <StatCard icon={RefreshCcw} color="purple" label="Re-Test" value="98" delta="3.2%" />
        <StatCard icon={TriangleAlert} color="red" label="Critical Results" value="52" delta="8.1%" deltaDirection="down" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search by patient name, test name..." />
        <FilterSelect placeholder="Department" options={['All Departments', 'Pathology', 'Microbiology', 'Immunology']} />
        <FilterSelect placeholder="Test Type" options={['All Test Types', 'Blood', 'Urine', 'Imaging']} />
        <FilterSelect placeholder="Status" options={['All Status', 'Completed', 'Pending']} />
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
                  <TableHead>Report ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Report Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {labReports.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium text-foreground">{r.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={r.avatar} alt={r.patient} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="text-foreground">{r.patient}</p>
                          <p className="text-xs text-muted-foreground">{r.patientId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{r.testName}</TableCell>
                    <TableCell>{r.department}</TableCell>
                    <TableCell>{r.reportDate}</TableCell>
                    <TableCell>
                      <StatusBadge status={r.status} />
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={3248} totalPages={406} itemLabel="reports" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Reports by Status" data={reportsByStatus} centerValue="3,248" centerLabel="Total" />

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Critical Reports</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {criticalReports.map((r) => (
                <li key={r.id} className="flex items-start gap-2.5 text-sm">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0 text-rose-500" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{r.id}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <UserRound className="size-3" /> {r.patient}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{r.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          title="Reports Trend"
          type="line"
          data={reportsTrend}
          xKey="day"
          series={[{ key: 'reports', label: 'Reports', color: '#3b82f6' }]}
        />
        <BarListCard title="Top Tests by Count" items={topTests} />
        <BarListCard title="Reports by Department" items={reportsByDept} />
      </div>
    </div>
  )
}
