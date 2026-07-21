import { useState } from 'react'
import {
  CalendarDays,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  Pencil,
  MoreVertical,
  Filter,
  Download,
  UserPlus2,
  Printer,
  FileDown,
  UserRound,
  ClipboardCheck,
  StickyNote,
  FileText,
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
import { appointments, doctorAvailability, todaysQueue } from '@/data/appointments'
import { appointmentFields } from '@/lib/formFields'

const calendarWeeks = [
  [29, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
]
const busyDays = new Set([2, 3, 4, 8, 9, 10, 11, 12, 16, 17, 24, 25])

const overviewData = [
  { day: '8 May', thisWeek: 260, lastWeek: 200 },
  { day: '9 May', thisWeek: 300, lastWeek: 240 },
  { day: '10 May', thisWeek: 240, lastWeek: 260 },
  { day: '11 May', thisWeek: 280, lastWeek: 220 },
  { day: '12 May', thisWeek: 230, lastWeek: 180 },
  { day: '13 May', thisWeek: 260, lastWeek: 210 },
  { day: '14 May', thisWeek: 312, lastWeek: 250 },
]

const departmentDistribution = [
  { name: 'Cardiology', value: 26, color: '#3b82f6' },
  { name: 'Neurology', value: 18, color: '#22c55e' },
  { name: 'Orthopedics', value: 16, color: '#8b5cf6' },
  { name: 'General Medicine', value: 22, color: '#f59e0b' },
  { name: 'Others', value: 18, color: '#cbd5e1' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'New Appointment', color: 'blue' },
  { icon: CalendarDays, label: 'Reschedule', color: 'green' },
  { icon: UserPlus2, label: 'Walk-in Patient', color: 'purple' },
  { icon: UserRound, label: 'Assign Doctor', color: 'orange' },
  { icon: Printer, label: 'Print Token', color: 'red' },
  { icon: FileDown, label: 'Export Schedule', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: ClipboardCheck, color: 'blue', text: 'Appointment Confirmed', subtext: 'Priya Sharma with Dr. Arjun Mehta', time: '09:05 AM' },
  { icon: UserRound, color: 'green', text: 'Patient Checked In', subtext: 'Rohan Verma', time: '09:20 AM' },
  { icon: StickyNote, color: 'purple', text: 'Doctor Updated Notes', subtext: 'Ananya Gupta', time: '09:42 AM' },
  { icon: XCircle, color: 'red', text: 'Appointment Cancelled', subtext: 'Suresh Patel', time: '10:15 AM' },
  { icon: FileText, color: 'orange', text: 'Prescription Uploaded', subtext: 'Neha Sharma', time: '10:45 AM' },
]

const doctorScheduleToday = [
  { doctor: 'Dr. Arjun Mehta', slots: ['09:00 Consultation', '09:30 Consultation', '10:00 Follow-up', '10:30 Surgery'] },
  { doctor: 'Dr. Mehta', slots: ['09:00 Consultation', '09:30 Consultation', '10:00 Consultation', '10:30 Follow-up'] },
]

export function AppointmentsList() {
  const [newAppointmentOpen, setNewAppointmentOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Dashboard', 'Appointments']}
        title="Appointments"
        description="Manage patient appointments, schedules and doctor availability."
        actions={
          <Button onClick={() => setNewAppointmentOpen(true)}>
            <Plus className="size-4" /> New Appointment
          </Button>
        }
      />

      <EntityFormDialog
        open={newAppointmentOpen}
        onOpenChange={setNewAppointmentOpen}
        title="New Appointment"
        description="Schedule a new patient appointment."
        icon={CalendarDays}
        fields={appointmentFields}
        submitLabel="Book Appointment"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={CalendarDays} color="blue" label="Today's Appointments" value="312" delta="8.2%" deltaLabel="from yesterday" />
        <StatCard icon={CalendarCheck} color="green" label="Upcoming This Week" value="785" delta="5.4%" deltaLabel="from last week" />
        <StatCard icon={CheckCircle2} color="purple" label="Completed Today" value="248" />
        <StatCard icon={XCircle} color="red" label="Cancelled Today" value="18" delta="2.1%" deltaDirection="down" deltaLabel="from yesterday" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search Appointment..." />
        <FilterSelect placeholder="Department" options={['Department', 'Cardiology', 'Orthopedics', 'Neurology']} />
        <FilterSelect placeholder="Doctor" options={['Doctor', 'Dr. Arjun Mehta', 'Dr. Neha Singh']} />
        <FilterSelect placeholder="Status" options={['Status', 'Confirmed', 'Waiting', 'Completed', 'Cancelled']} />
        <Button variant="outline" size="sm">
          Reset
        </Button>
        <Button variant="outline" size="sm">
          <Download className="size-4" /> Export
        </Button>
        <Button size="sm">
          <Filter className="size-4" /> Filter
        </Button>
      </FilterBar>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">May 2024</h3>
            <div className="flex items-center gap-1">
              <button className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                <ChevronLeft className="size-4" />
              </button>
              <button className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
          <table className="w-full text-center text-xs text-muted-foreground">
            <thead>
              <tr>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                  <th key={d} className="pb-2 font-medium">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendarWeeks.map((week, wi) => (
                <tr key={wi}>
                  {week.map((day, di) => {
                    const isCurrentMonth = !(wi === 0 && day > 7) && !(wi === 4 && day < 7)
                    const isSelected = wi === 2 && di === 1
                    return (
                      <td key={di} className="py-1">
                        <span
                          className={`relative mx-auto flex size-7 items-center justify-center rounded-full text-sm ${
                            isSelected
                              ? 'bg-primary font-semibold text-primary-foreground'
                              : isCurrentMonth
                                ? 'text-foreground'
                                : 'text-muted-foreground/50'
                          }`}
                        >
                          {day}
                          {busyDays.has(day) && isCurrentMonth && !isSelected && (
                            <span className="absolute bottom-0.5 size-1 rounded-full bg-primary" />
                          )}
                        </span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Doctor Availability</h3>
            <a href="/doctors" className="text-sm font-medium text-primary hover:underline">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-4">
            {doctorAvailability.map((d) => (
              <li key={d.name} className="flex items-center gap-3">
                <img src={d.avatar} alt={d.name} className="size-9 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{d.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{d.specialty}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-foreground">{d.percent}%</span>
                <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  Available
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Today's Queue</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-4">
            {todaysQueue.map((q) => (
              <li key={q.patient} className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{q.patient}</p>
                  <p className="truncate text-xs text-muted-foreground">{q.meta}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted-foreground">{q.time}</p>
                  <StatusBadge status={q.status} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium text-foreground">{a.time}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <img src={a.avatar} alt={a.patient} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-foreground">{a.patient}</p>
                          <p className="text-xs text-muted-foreground">{a.patientId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{a.doctor}</TableCell>
                    <TableCell>{a.department}</TableCell>
                    <TableCell>{a.type}</TableCell>
                    <TableCell>
                      <StatusBadge status={a.status} />
                    </TableCell>
                    <TableCell>{a.room}</TableCell>
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
          <TablePagination showingFrom={1} showingTo={15} totalCount={312} totalPages={21} />
        </div>

        <div className="flex h-full flex-col gap-5">
          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
          <div className="flex flex-1 flex-col rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Doctor Schedule (Today)</h3>
            <div className="grid flex-1 grid-cols-2 gap-4">
              {doctorScheduleToday.map((d) => (
                <div key={d.doctor} className="flex h-full flex-col">
                  <p className="mb-2 text-sm font-medium text-foreground">{d.doctor}</p>
                  <ul className="flex flex-1 flex-col justify-between gap-1.5">
                    {d.slots.map((s) => (
                      <li
                        key={s}
                        className="flex flex-1 items-center rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Appointments Overview"
          periodLabel="Last 7 Days"
          type="line"
          data={overviewData}
          xKey="day"
          series={[
            { key: 'thisWeek', label: 'This Week', color: '#3b82f6' },
            { key: 'lastWeek', label: 'Last Week', color: '#22c55e' },
          ]}
        />
        <DonutCard title="Department Distribution" viewAllHref="/departments" data={departmentDistribution} centerValue="312" centerLabel="Total" />
      </div>
    </div>
  )
}
