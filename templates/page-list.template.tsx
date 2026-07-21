// TEMPLATE — copy into src/pages/MyNewPage.tsx and rename everything marked TODO.
//
// Shape: PageHeader -> stat cards -> filter bar -> [table | right column] -> bottom charts.
// This is the same skeleton used by src/pages/Doctors.tsx, Departments.tsx, Pharmacy.tsx,
// LabReports.tsx, BedsRooms.tsx, Inventory.tsx and Insurance.tsx — copy whichever of those
// is closest to your data shape if you want a fuller worked example.

import { useState } from 'react'
import { Plus, ChevronDown, Eye, Pencil, MoreVertical, Boxes } from 'lucide-react' // TODO: swap icons
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCard } from '@/components/shared/StatCard'
import { FilterBar } from '@/components/shared/FilterBar'
import { SearchInput } from '@/components/shared/SearchInput'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { TablePagination } from '@/components/shared/TablePagination'
import { DonutCard } from '@/components/shared/DonutCard'
import { TrendChartCard } from '@/components/shared/TrendChartCard'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { ActivityFeed, type ActivityItem } from '@/components/shared/ActivityFeed'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// TODO: move this into src/data/myEntity.ts once it has real content.
type MyEntity = {
  id: string
  name: string
  status: string
}
const rows: MyEntity[] = [
  { id: 'ENT-001', name: 'Example Row', status: 'Active' },
]

// TODO: move this into src/lib/formFields.ts alongside the other *Fields exports.
const myEntityFields = [
  { name: 'name', label: 'Name', type: 'text' as const, placeholder: 'e.g. Example', span: 2 as const },
  { name: 'status', label: 'Status', type: 'select' as const, options: ['Active', 'Inactive'] },
]

const donutData = [
  { name: 'Category A', value: 60, color: '#3b82f6' },
  { name: 'Category B', value: 40, color: '#22c55e' },
]

const trendData = [
  { day: 'Mon', value: 12 },
  { day: 'Tue', value: 18 },
  { day: 'Wed', value: 15 },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New', color: 'blue' },
]

const recentActivity: ActivityItem[] = [
  { icon: Boxes, color: 'blue', text: 'Something happened', time: '10:30 AM' },
]

export function MyNewPage() {
  const [addOpen, setAddOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['TODO Section', 'TODO Page']}
        title="TODO Title"
        description="TODO one-line description of what this page manages."
        actions={
          <Button onClick={() => setAddOpen(true)}>
            <Plus className="size-4" /> Add New <ChevronDown className="size-4" />
          </Button>
        }
      />

      <EntityFormDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        title="Add New"
        description="TODO dialog description."
        icon={Boxes}
        fields={myEntityFields}
        submitLabel="Add"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Boxes} color="blue" label="Total" value="0" delta="0%" />
        <StatCard icon={Boxes} color="green" label="Active" value="0" delta="0%" />
        <StatCard icon={Boxes} color="orange" label="Pending" value="0" delta="0%" deltaDirection="down" />
        <StatCard icon={Boxes} color="red" label="Inactive" value="0" delta="0%" deltaDirection="down" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search..." />
        <FilterSelect placeholder="Status" options={['All Status', 'Active', 'Inactive']} />
        <Button variant="outline" size="sm">
          Reset
        </Button>
      </FilterBar>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium text-foreground">{row.name}</TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} />
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
          <TablePagination showingFrom={1} showingTo={rows.length} totalCount={rows.length} totalPages={1} />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="By Category" data={donutData} centerValue="100" centerLabel="Total" />
          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Trend"
          type="line"
          data={trendData}
          xKey="day"
          series={[{ key: 'value', label: 'Value', color: '#3b82f6' }]}
        />
        <DonutCard title="Breakdown" data={donutData} centerValue="100" centerLabel="Total" />
      </div>
    </div>
  )
}
