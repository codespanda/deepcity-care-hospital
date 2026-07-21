import { useState } from 'react'
import { ChevronLeft, ChevronRight, Settings2, Plus, Users, CalendarClock, Clock3, BedDouble } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { DonutCard } from '@/components/shared/DonutCard'
import { TrendChartCard } from '@/components/shared/TrendChartCard'
import { BarListCard } from '@/components/shared/BarListCard'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { appointmentFields } from '@/lib/formFields'

const slotColors = {
  Consultation: 'bg-blue-100 text-blue-700 border-blue-200',
  'Follow-up': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Review: 'bg-violet-100 text-violet-700 border-violet-200',
  Surgery: 'bg-rose-100 text-rose-700 border-rose-200',
  'Free Slot': 'bg-secondary text-muted-foreground border-border',
} as const

const doctorRows = [
  {
    doctor: 'Dr. Arjun Mehta',
    role: 'Cardiologist',
    avatar: 'https://i.pravatar.cc/80?img=13',
    slots: [
      { time: '09:00 AM', patient: 'Priya Sharma', type: 'Consultation' },
      { time: '10:00 AM', patient: 'Rohan Verma', type: 'Follow-up' },
      { time: '11:00 AM', patient: 'Ananya Gupta', type: 'Consultation' },
      { time: '01:00 PM', patient: 'Suresh Patel', type: 'Review' },
      { time: '03:00 PM', patient: 'Neha Sharma', type: 'Consultation' },
      { time: '04:00 PM', patient: 'Free Slot', type: 'Free Slot' },
    ],
  },
  {
    doctor: 'Dr. Neha Singh',
    role: 'Orthopedic',
    avatar: 'https://i.pravatar.cc/80?img=32',
    slots: [
      { time: '09:30 AM', patient: 'Amit Kumar', type: 'Consultation' },
      { time: '10:30 AM', patient: 'Vikram Joshi', type: 'Follow-up' },
      { time: '12:00 PM', patient: 'Kavita Reddy', type: 'Consultation' },
      { time: '02:00 PM', patient: 'Ritesh Sharma', type: 'Review' },
      { time: '04:30 PM', patient: 'Free Slot', type: 'Free Slot' },
    ],
  },
  {
    doctor: 'Dr. Raj Verma',
    role: 'Neurologist',
    avatar: 'https://i.pravatar.cc/80?img=14',
    slots: [
      { time: '08:30 AM', patient: 'Manoj Kumar', type: 'Consultation' },
      { time: '10:00 AM', patient: 'Deepak Singh', type: 'Consultation' },
      { time: '11:30 AM', patient: 'Pooja Mehta', type: 'Follow-up' },
      { time: '01:30 PM', patient: 'Ajay Verma', type: 'Review' },
      { time: '03:30 PM', patient: 'Ravi Kumar', type: 'Follow-up' },
    ],
  },
  {
    doctor: 'Dr. Priya Gupta',
    role: 'Dermatologist',
    avatar: 'https://i.pravatar.cc/80?img=45',
    slots: [
      { time: '09:00 AM', patient: 'Sunita Devi', type: 'Consultation' },
      { time: '10:30 AM', patient: 'Meera Nair', type: 'Review' },
      { time: '12:00 PM', patient: 'Komal Singh', type: 'Consultation' },
      { time: '02:30 PM', patient: 'Alisha Khan', type: 'Follow-up' },
      { time: '04:00 PM', patient: 'Free Slot', type: 'Free Slot' },
    ],
  },
  {
    doctor: 'Dr. Amit Patel',
    role: 'General Medicine',
    avatar: 'https://i.pravatar.cc/80?img=15',
    slots: [
      { time: '09:15 AM', patient: 'Harish Kumar', type: 'Consultation' },
      { time: '10:45 AM', patient: 'Vandana Sahu', type: 'Follow-up' },
      { time: '12:15 PM', patient: 'Ganesh Rao', type: 'Review' },
      { time: '02:00 PM', patient: 'Mahesh Yadav', type: 'Consultation' },
      { time: '04:30 PM', patient: 'Free Slot', type: 'Free Slot' },
    ],
  },
]

const upcomingAppointments = [
  { time: '10:30 AM', patient: 'Ananya Gupta', doctor: 'Dr. Arjun Mehta', status: 'In Consultation' },
  { time: '11:00 AM', patient: 'Pooja Mehta', doctor: 'Dr. Raj Verma', status: 'Scheduled' },
  { time: '11:30 AM', patient: 'Meera Nair', doctor: 'Dr. Priya Gupta', status: 'Scheduled' },
  { time: '12:00 PM', patient: 'Ganesh Rao', doctor: 'Dr. Amit Patel', status: 'Scheduled' },
  { time: '01:00 PM', patient: 'Suresh Patel', doctor: 'Dr. Arjun Mehta', status: 'Scheduled' },
]

const overviewData = [
  { day: 'Mon', appointments: 260 },
  { day: 'Tue', appointments: 300 },
  { day: 'Wed', appointments: 342 },
  { day: 'Thu', appointments: 310 },
  { day: 'Fri', appointments: 360 },
  { day: 'Sat', appointments: 280 },
  { day: 'Sun', appointments: 240 },
]

const appointmentStatus = [
  { name: 'Confirmed', value: 196, color: '#3b82f6' },
  { name: 'In Progress', value: 48, color: '#22c55e' },
  { name: 'Completed', value: 42, color: '#8b5cf6' },
  { name: 'Cancelled', value: 18, color: '#f43f5e' },
  { name: 'No Show', value: 8, color: '#cbd5e1' },
]

const peakHours = [
  { label: '9 AM - 10 AM', value: '92', percent: 74 },
  { label: '10 AM - 11 AM', value: '114', percent: 92 },
  { label: '11 AM - 12 PM', value: '96', percent: 77 },
  { label: '12 PM - 1 PM', value: '76', percent: 61 },
  { label: '1 PM - 2 PM', value: '68', percent: 55 },
]

export function DoctorSchedule() {
  const [view, setView] = useState<'Day' | 'Week' | 'Month'>('Day')
  const [newAppointmentOpen, setNewAppointmentOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Appointments', 'Schedule']}
        title="Doctor Schedule"
        description="View doctor availability and manage schedules."
        actions={<FilterSelect placeholder="All Doctors" options={['All Doctors', 'Dr. Arjun Mehta', 'Dr. Neha Singh']} />}
      />

      <div className="mb-5 flex flex-wrap gap-4">
        {[
          { icon: Users, label: 'Doctors Available', value: '28', color: 'bg-blue-100 text-blue-600' },
          { icon: CalendarClock, label: 'Total Appointments', value: '312', color: 'bg-emerald-100 text-emerald-600' },
          { icon: Clock3, label: 'Avg Waiting Time', value: '11m', color: 'bg-violet-100 text-violet-600' },
          { icon: BedDouble, label: 'Rooms Occupied', value: '74%', color: 'bg-amber-100 text-amber-600' },
        ].map((s) => (
          <div key={s.label} className="flex flex-1 min-w-[190px] items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-lg', s.color)}>
              <s.icon className="size-5" />
            </span>
            <div>
              <p className="text-lg font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center gap-2">
          <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-sm font-medium text-foreground">Today</span>
          <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
            <ChevronRight className="size-4" />
          </button>
          <span className="ml-2 rounded-md border border-border px-3 py-1.5 text-sm text-foreground">14 May 2024, Tuesday</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-border p-0.5">
            {(['Day', 'Week', 'Month'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  'rounded px-3 py-1.5 text-sm font-medium transition-colors',
                  view === v ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent',
                )}
              >
                {v}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Settings2 className="size-4" /> Availability Settings
          </Button>
          <Button size="sm" onClick={() => setNewAppointmentOpen(true)}>
            <Plus className="size-4" /> New Appointment
          </Button>
        </div>
      </div>

      <EntityFormDialog
        open={newAppointmentOpen}
        onOpenChange={setNewAppointmentOpen}
        title="New Appointment"
        description="Schedule a new patient appointment."
        icon={CalendarClock}
        fields={appointmentFields}
        submitLabel="Book Appointment"
      />

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-3">
          <div className="flex flex-col gap-5 overflow-x-auto">
            {doctorRows.map((row) => (
              <div key={row.doctor} className="flex min-w-[640px] items-center gap-4">
                <div className="flex w-40 shrink-0 items-center gap-2.5">
                  <img src={row.avatar} alt={row.doctor} className="size-9 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{row.doctor}</p>
                    <p className="truncate text-xs text-muted-foreground">{row.role}</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-2 overflow-x-auto">
                  {row.slots.map((slot, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-32 shrink-0 rounded-lg border px-2.5 py-1.5 text-xs',
                        slotColors[slot.type as keyof typeof slotColors],
                      )}
                    >
                      <p className="font-semibold">{slot.time}</p>
                      <p className="truncate">{slot.patient}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Upcoming Appointments</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {upcomingAppointments.map((a) => (
                <li key={a.time + a.patient} className="flex items-start justify-between gap-2 text-sm">
                  <div>
                    <p className="font-medium text-foreground">{a.time}</p>
                    <p className="text-xs text-muted-foreground">
                      {a.patient} · {a.doctor}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-amber-600">{a.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Legend</h3>
            <div className="grid grid-cols-2 gap-y-2 text-xs text-muted-foreground">
              {[
                ['Consultation', '#3b82f6'],
                ['Follow-up', '#22c55e'],
                ['Review', '#8b5cf6'],
                ['Surgery', '#f43f5e'],
                ['Free Slot', '#cbd5e1'],
                ['Break', '#94a3b8'],
              ].map(([label, color]) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: color }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          title="Appointments Overview"
          periodLabel="This Week"
          type="area"
          data={overviewData}
          xKey="day"
          series={[{ key: 'appointments', label: 'Appointments', color: '#3b82f6' }]}
        />
        <DonutCard title="Appointment Status" data={appointmentStatus} centerValue="312" centerLabel="Appointments" />
        <BarListCard title="Peak Hours" items={peakHours.map((p) => ({ label: p.label, value: p.value, percent: p.percent }))} />
      </div>
    </div>
  )
}
