import { useState } from 'react'
import {
  LayoutGrid,
  Stethoscope,
  Users,
  BedDouble,
  Activity,
  BarChart3,
  ArrowUpDown,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  UserCog,
  CalendarClock,
  UserRoundPlus,
  FileBarChart,
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
import { departments } from '@/data/departments'
import { departmentFields } from '@/lib/formFields'

const departmentOverview = departments.map((d) => ({ name: d.name, value: d.staff, color: d.color }))

const performance = [
  { label: 'Cardiology', value: '92%', percent: 92 },
  { label: 'General Medicine', value: '82%', percent: 82 },
  { label: 'Pediatrics', value: '78%', percent: 78 },
  { label: 'Orthopedics', value: '74%', percent: 74 },
  { label: 'Neurology', value: '68%', percent: 68 },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New Department', color: 'blue' },
  { icon: UserCog, label: 'Manage Staff', color: 'green' },
  { icon: BedDouble, label: 'Manage Beds', color: 'purple' },
  { icon: CalendarClock, label: 'Department Schedule', color: 'orange' },
  { icon: UserRoundPlus, label: 'Assign Doctor', color: 'red' },
  { icon: FileBarChart, label: 'Department Reports', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: Plus, color: 'blue', text: 'New department added', subtext: 'Oncology', time: '10:30 AM' },
  { icon: Pencil, color: 'green', text: 'Cardiology updated resources', time: '09:45 AM' },
  { icon: BedDouble, color: 'purple', text: 'Beds updated in Pediatrics', time: 'Yesterday' },
  { icon: UserRoundPlus, color: 'orange', text: 'Staff assigned to Orthopedics', time: '12 May 2024' },
]

const visitsTrend = [
  { day: '1 May', visits: 320 },
  { day: '6 May', visits: 280 },
  { day: '11 May', visits: 410 },
  { day: '21 May', visits: 350 },
  { day: '26 May', visits: 300 },
  { day: '31 May', visits: 260 },
]

const bedsOccupancy = [
  { name: 'Occupied', value: 138, color: '#3b82f6' },
  { name: 'Available', value: 48, color: '#22c55e' },
]

const topDeptByVisits = departments
  .slice()
  .sort((a, b) => b.visits - a.visits)
  .slice(0, 5)
  .map((d) => ({ label: d.name, value: String(d.visits), percent: Math.round((d.visits / 410) * 100) }))

export function Departments() {
  const [addDepartmentOpen, setAddDepartmentOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Departments', 'All Departments']}
        title="Departments"
        description="Manage hospital departments and their resources."
        actions={
          <>
            <Button variant="outline">
              <BarChart3 className="size-4" /> Department Reports
            </Button>
            <Button variant="outline">
              <ArrowUpDown className="size-4" /> Reorder Departments
            </Button>
            <Button onClick={() => setAddDepartmentOpen(true)}>
              <Plus className="size-4" /> Add New Department <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={addDepartmentOpen}
        onOpenChange={setAddDepartmentOpen}
        title="Add New Department"
        description="Create a new hospital department."
        icon={LayoutGrid}
        fields={departmentFields}
        submitLabel="Add Department"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={LayoutGrid} color="blue" label="Total Departments" value="12" delta="9.1%" />
        <StatCard icon={Stethoscope} color="green" label="Active Departments" value="11" delta="8.3%" />
        <StatCard icon={Users} color="purple" label="Total Staff" value="156" delta="12.6%" />
        <StatCard icon={BedDouble} color="orange" label="Total Beds" value="186" delta="7.4%" />
        <StatCard icon={Activity} color="red" label="Total Visits (This Month)" value="2,450" delta="14.2%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search department..." />
        <FilterSelect placeholder="Status" options={['All Status', 'Active', 'Inactive']} />
        <FilterSelect placeholder="Floor" options={['All Floors', '1st Floor', '2nd Floor', '3rd Floor']} />
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
                  <TableHead>Department</TableHead>
                  <TableHead>Head of Department</TableHead>
                  <TableHead>Floor</TableHead>
                  <TableHead>Staff</TableHead>
                  <TableHead>Beds</TableHead>
                  <TableHead>Today's Visits</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.map((d) => (
                  <TableRow key={d.name}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${d.color}1a`, color: d.color }}>
                          <Stethoscope className="size-4" />
                        </span>
                        <p className="font-medium text-foreground">{d.name}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={d.avatar} alt={d.head} className="size-7 rounded-full object-cover" />
                        <div>
                          <p className="text-foreground">{d.head}</p>
                          <p className="text-xs text-muted-foreground">{d.headTitle}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{d.floor}</TableCell>
                    <TableCell>{d.staff}</TableCell>
                    <TableCell>{d.beds}</TableCell>
                    <TableCell>{d.visits}</TableCell>
                    <TableCell>
                      <StatusBadge status={d.status} />
                    </TableCell>
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={12} totalPages={2} itemLabel="departments" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Department Overview" data={departmentOverview} centerValue="12" centerLabel="Total" />
          <BarListCard title="Department Performance (This Month)" items={performance} />
          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          title="Visits Trend (This Month)"
          type="line"
          data={visitsTrend}
          xKey="day"
          series={[{ key: 'visits', label: 'Visits', color: '#3b82f6' }]}
        />
        <DonutCard title="Beds Occupancy" data={bedsOccupancy} centerValue="74%" centerLabel="Occupied" />
        <BarListCard title="Top Departments by Visits" rank items={topDeptByVisits} />
      </div>
    </div>
  )
}
