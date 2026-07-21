import { useState } from 'react'
import {
  Users,
  CalendarDays,
  Star,
  Upload,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  UserPlus,
  Clock3,
  CalendarClock,
  CalendarX2,
  LayoutGrid,
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
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { ActivityFeed, type ActivityItem } from '@/components/shared/ActivityFeed'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { doctors } from '@/data/doctors'
import { doctorFields } from '@/lib/formFields'

const bySpecialty = [
  { name: 'Cardiology', value: 6, color: '#3b82f6' },
  { name: 'Orthopedics', value: 5, color: '#22c55e' },
  { name: 'Neurology', value: 4, color: '#8b5cf6' },
  { name: 'Dermatology', value: 3, color: '#f59e0b' },
  { name: 'General Medicine', value: 4, color: '#06b6d4' },
  { name: 'Others', value: 6, color: '#cbd5e1' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New Doctor', color: 'blue' },
  { icon: Clock3, label: 'Doctor Availability', color: 'orange' },
  { icon: CalendarClock, label: 'Manage Schedule', color: 'green' },
  { icon: CalendarX2, label: 'Manage Leaves', color: 'red' },
  { icon: LayoutGrid, label: 'Assign Department', color: 'purple' },
  { icon: FileDown, label: 'Export Doctors', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: Clock3, color: 'blue', text: 'Dr. Neha Singh updated her availability', time: '10:30 AM' },
  { icon: CalendarX2, color: 'red', text: 'Dr. Amit Patel applied for leave', time: '09:15 AM' },
  { icon: UserPlus, color: 'green', text: 'New doctor Dr. Suresh Iyer added', time: 'Yesterday' },
  { icon: Pencil, color: 'purple', text: 'Dr. Priya Gupta updated profile', time: '12 May 2024' },
]

const doctorsOverview = [
  { day: '8 May', doctors: 22 },
  { day: '9 May', doctors: 25 },
  { day: '10 May', doctors: 20 },
  { day: '11 May', doctors: 27 },
  { day: '12 May', doctors: 24 },
  { day: '13 May', doctors: 26 },
  { day: '14 May', doctors: 28 },
]

const availabilityOverview = [
  { name: 'Available', value: 213, color: '#22c55e', countLabel: '213 Hrs' },
  { name: 'Busy', value: 50, color: '#f59e0b', countLabel: '50 Hrs' },
  { name: 'On Leave', value: 17, color: '#8b5cf6', countLabel: '17 Hrs' },
]

const topRated = [...doctors].sort((a, b) => b.rating - a.rating).slice(0, 3)

export function Doctors() {
  const [addDoctorOpen, setAddDoctorOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Doctors', 'All Doctors']}
        title="Doctors"
        description="Manage hospital doctors, profiles, schedules and availability."
        actions={
          <>
            <Button variant="outline">
              <Upload className="size-4" /> Import Doctors
            </Button>
            <Button onClick={() => setAddDoctorOpen(true)}>
              <Plus className="size-4" /> Add New Doctor <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={addDoctorOpen}
        onOpenChange={setAddDoctorOpen}
        title="Add New Doctor"
        description="Add a new doctor to the hospital directory."
        icon={UserPlus}
        fields={doctorFields}
        submitLabel="Add Doctor"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Users} color="blue" label="Total Doctors" value="28" delta="12.5%" />
        <StatCard icon={UserPlus} color="green" label="Active Doctors" value="24" delta="8.2%" />
        <StatCard icon={CalendarDays} color="purple" label="Appointments Today" value="112" delta="15.3%" deltaLabel="from yesterday" />
        <StatCard icon={Star} color="orange" label="Average Rating" value="4.8 / 5" note="based on 236 reviews" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search doctor by name, specialty..." />
        <FilterSelect placeholder="Department" options={['All Departments', 'Cardiology', 'Orthopedics', 'Neurology']} />
        <FilterSelect placeholder="Specialty" options={['All Specialties', 'Cardiologist', 'Orthopedic Surgeon']} />
        <FilterSelect placeholder="Status" options={['All Status', 'Active', 'On Leave', 'Inactive']} />
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
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={d.avatar} alt={d.name} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-foreground">{d.name}</p>
                          <p className="text-xs text-muted-foreground">{d.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-foreground">{d.department}</p>
                      <p className="text-xs text-muted-foreground">{d.specialty}</p>
                    </TableCell>
                    <TableCell>{d.experience}</TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        {d.rating} <span className="text-xs text-muted-foreground">({d.reviews})</span>
                      </span>
                    </TableCell>
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
          <TablePagination showingFrom={1} showingTo={7} totalCount={28} totalPages={4} itemLabel="doctors" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Doctors by Specialty" data={bySpecialty} centerValue="28" centerLabel="Total" />
          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          title="Doctors Overview"
          periodLabel="This Month"
          type="line"
          data={doctorsOverview}
          xKey="day"
          series={[{ key: 'doctors', label: 'Doctors', color: '#3b82f6' }]}
        />
        <DonutCard title="Availability Overview" data={availabilityOverview} centerValue="76%" centerLabel="Average Availability" />
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Top Rated Doctors</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-4">
            {topRated.map((d) => (
              <li key={d.id} className="flex items-center gap-3">
                <img src={d.avatar} alt={d.name} className="size-9 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{d.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{d.specialty}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  {d.rating}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
