import { useState } from 'react'
import {
  BedDouble,
  BedSingle,
  UserRound,
  Sparkles,
  Wrench,
  ArrowLeftRight,
  ClipboardList,
  Plus,
  ChevronDown,
  Eye,
  MoreVertical,
  CalendarClock,
  FileDown,
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
import { BedManagementDialog } from '@/components/beds/BedManagementDialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { rooms } from '@/data/beds'
import { roomFields, roomTransferFields } from '@/lib/formFields'

const roomTypeColor: Record<string, string> = {
  General: 'bg-slate-100 text-slate-700',
  Deluxe: 'bg-blue-100 text-blue-700',
  ICU: 'bg-rose-100 text-rose-700',
  Private: 'bg-emerald-100 text-emerald-700',
  'Semi-Private': 'bg-amber-100 text-amber-700',
}

const bedOccupancyOverview = [
  { name: 'Occupied', value: 342, color: '#f43f5e' },
  { name: 'Available', value: 124, color: '#22c55e' },
  { name: 'Under Cleaning', value: 16, color: '#f59e0b' },
  { name: 'Maintenance', value: 4, color: '#8b5cf6' },
]

const occupancyTrend = [
  { day: '1 May', occupancy: 60 },
  { day: '6 May', occupancy: 70 },
  { day: '11 May', occupancy: 82 },
  { day: '21 May', occupancy: 88 },
  { day: '26 May', occupancy: 76 },
  { day: '31 May', occupancy: 70 },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New Room', color: 'blue' },
  { icon: BedDouble, label: 'Bed Management', color: 'green' },
  { icon: ArrowLeftRight, label: 'Room Transfer', color: 'purple' },
  { icon: Wrench, label: 'Maintenance Request', color: 'orange' },
  { icon: Sparkles, label: 'Cleaning Schedule', color: 'red' },
  { icon: FileDown, label: 'Export Report', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: Sparkles, color: 'blue', text: 'Room 101 cleaned', time: '10:15 AM' },
  { icon: UserRound, color: 'green', text: 'Patient admitted in Room 102', time: '09:45 AM' },
  { icon: Wrench, color: 'purple', text: 'Maintenance scheduled for Room 201', time: 'Yesterday' },
  { icon: BedSingle, color: 'orange', text: 'Room 302 status changed to Available', time: '12 May 2024' },
]

const bedsByDept = [
  { label: 'General Medicine', value: '156', percent: 100 },
  { label: 'Cardiology', value: '98', percent: 63 },
  { label: 'Orthopedics', value: '76', percent: 49 },
  { label: 'Neurology', value: '52', percent: 33 },
  { label: 'Pediatrics', value: '44', percent: 28 },
]

const bedStatus = [
  { name: 'Occupied', value: 342, color: '#f43f5e' },
  { name: 'Available', value: 124, color: '#22c55e' },
  { name: 'Under Cleaning', value: 16, color: '#f59e0b' },
  { name: 'Maintenance', value: 4, color: '#8b5cf6' },
]

const upcomingCleaning = [
  { time: '10:00 AM', room: 'Room 103', floor: '1st Floor' },
  { time: '11:30 AM', room: 'Room 203', floor: '2nd Floor' },
  { time: '01:00 PM', room: 'Room 301', floor: '3rd Floor' },
  { time: '02:30 PM', room: 'Room 401', floor: '4th Floor' },
]

export function BedsRooms() {
  const [addRoomOpen, setAddRoomOpen] = useState(false)
  const [roomTransferOpen, setRoomTransferOpen] = useState(false)
  const [bedManagementOpen, setBedManagementOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Beds & Rooms', 'Overview']}
        title="Beds & Rooms"
        description="Real-time overview of room occupancy and bed availability."
        actions={
          <>
            <Button variant="outline" onClick={() => setRoomTransferOpen(true)}>
              <ArrowLeftRight className="size-4" /> Room Transfer
            </Button>
            <Button variant="outline" onClick={() => setBedManagementOpen(true)}>
              <ClipboardList className="size-4" /> Bed Management
            </Button>
            <Button onClick={() => setAddRoomOpen(true)}>
              <Plus className="size-4" /> Add Room <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={addRoomOpen}
        onOpenChange={setAddRoomOpen}
        title="Add Room"
        description="Add a new room to the hospital."
        icon={BedDouble}
        fields={roomFields}
        submitLabel="Add Room"
      />

      <EntityFormDialog
        open={roomTransferOpen}
        onOpenChange={setRoomTransferOpen}
        title="Room Transfer"
        description="Transfer a patient from one room to another."
        icon={ArrowLeftRight}
        fields={roomTransferFields}
        submitLabel="Transfer Patient"
      />

      <BedManagementDialog open={bedManagementOpen} onOpenChange={setBedManagementOpen} />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={BedDouble} color="blue" label="Total Beds" value="486" delta="8.4%" />
        <StatCard icon={BedSingle} color="green" label="Available Beds" value="124" delta="5.7%" />
        <StatCard icon={UserRound} color="orange" label="Occupied Beds" value="342" delta="2.3%" deltaDirection="down" />
        <StatCard icon={Sparkles} color="purple" label="Under Cleaning" value="16" delta="1.2%" />
        <StatCard icon={Wrench} color="red" label="Under Maintenance" value="4" delta="11.1%" deltaDirection="down" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search by room number, type..." />
        <FilterSelect placeholder="Floor" options={['All Floors', '1st Floor', '2nd Floor', '3rd Floor']} />
        <FilterSelect placeholder="Room Type" options={['All Types', 'General', 'Deluxe', 'ICU', 'Private', 'Semi-Private']} />
        <FilterSelect placeholder="Department" options={['All Departments', 'General Medicine', 'Cardiology']} />
        <Button variant="outline" size="sm">
          Fleet
        </Button>
      </FilterBar>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room / Number</TableHead>
                  <TableHead>Floor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Occupied</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rooms.map((r) => (
                  <TableRow key={r.number}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                          <BedDouble className="size-4" />
                        </span>
                        <div>
                          <p className="font-medium text-foreground">{r.number}</p>
                          <Badge variant="secondary" className={roomTypeColor[r.roomType]}>
                            {r.type}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{r.floor}</TableCell>
                    <TableCell>{r.department}</TableCell>
                    <TableCell>{r.totalBeds}</TableCell>
                    <TableCell>{r.occupied}</TableCell>
                    <TableCell>{r.available}</TableCell>
                    <TableCell>
                      <StatusBadge status={r.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Eye className="size-4" />
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={36} totalPages={9} itemLabel="rooms" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Bed Occupancy Overview" data={bedOccupancyOverview} centerValue="70.4%" centerLabel="Occupied" />
          <TrendChartCard
            title="Occupancy Trend"
            type="area"
            data={occupancyTrend}
            xKey="day"
            series={[{ key: 'occupancy', label: 'Occupancy', color: '#3b82f6' }]}
            yFormatter={(v) => `${v}%`}
          />
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <QuickActionsGrid actions={quickActions} />
        <ActivityFeed items={recentActivity} />
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Upcoming Cleaning</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-3.5">
            {upcomingCleaning.map((c) => (
              <li key={c.room} className="flex items-center gap-3 text-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <CalendarClock className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{c.time}</p>
                  <p className="text-xs text-muted-foreground">{c.room}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{c.floor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <BarListCard title="Beds by Department" items={bedsByDept} />
        <DonutCard title="Bed Status" data={bedStatus} centerValue="486" centerLabel="Total Beds" />
      </div>
    </div>
  )
}
