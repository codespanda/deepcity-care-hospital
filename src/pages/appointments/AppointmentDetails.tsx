import { useState } from 'react'
import {
  ChevronRight,
  ArrowLeft,
  CalendarClock,
  XCircle,
  Pencil,
  Phone,
  HeartPulse,
  DoorOpen,
  Stethoscope,
  Printer,
  Send,
  CheckCircle2,
  Bell,
  UserRound,
  CalendarX2,
  UserCheck2,
  Share2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { appointmentFields } from '@/lib/formFields'

const timeline = [
  { title: 'Appointment Created', meta: 'by Receptionist (Rohan Verma)', time: '12 May 2024, 11:20 AM', done: true },
  { title: 'Appointment Confirmed', meta: 'by Patient (Priya Sharma)', time: '12 May 2024, 11:21 AM', done: true },
  { title: 'Reminder Sent', meta: 'SMS & Email', time: '13 May 2024, 04:45 PM', done: true },
  { title: 'Patient Checked In', meta: 'by Receptionist', time: '14 May 2024, 08:45 AM', done: true },
  { title: 'Appointment Started', meta: '', time: '14 May 2024, 09:30 AM', done: false },
]

const quickActions: QuickAction[] = [
  { icon: CalendarClock, label: 'Reschedule', color: 'green' },
  { icon: CalendarX2, label: 'Cancel Appointment', color: 'red' },
  { icon: XCircle, label: 'Mark as No Show', color: 'orange' },
  { icon: UserCheck2, label: 'Mark as Completed', color: 'blue' },
  { icon: UserRound, label: 'Add Walk-in', color: 'purple' },
  { icon: Share2, label: 'Share Details', color: 'teal' },
]

const upcoming = [
  { date: '16 MAY', title: 'Follow-up', meta: 'Dr. Arjun Mehta · 10:00 AM - 10:30 AM', status: 'Scheduled' },
  { date: '30 MAY', title: 'Consultation', meta: 'Dr. Neha Singh · 11:00 AM - 11:30 AM', status: 'Scheduled' },
  { date: '12 JUN', title: 'Review', meta: 'Dr. Arjun Mehta · 09:30 AM - 10:00 AM', status: 'Scheduled' },
]

const previous = [
  { date: '10 APR', title: 'Consultation', meta: 'Dr. Arjun Mehta · 09:30 AM', status: 'Completed' },
  { date: '15 MAR', title: 'Follow-up', meta: 'Dr. Arjun Mehta · 10:00 AM', status: 'Completed' },
  { date: '10 FEB', title: 'Consultation', meta: 'Dr. Neha Singh · 11:00 AM', status: 'Completed' },
]

export function AppointmentDetails() {
  const [rescheduleOpen, setRescheduleOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Appointments</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Appointment Details</span>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-foreground">Appointment #APT-10248</h1>
            <StatusBadge status="Confirmed" />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            14 May 2024, Tuesday · 09:30 AM - 10:00 AM (30 mins) · Created on 12 May 2024, 11:20 AM
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/appointments">
              <ArrowLeft className="size-4" /> Back to Appointments
            </Link>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setRescheduleOpen(true)}>
            <CalendarClock className="size-4" /> Reschedule
          </Button>
          <Button variant="outline" size="sm" className="text-rose-600 hover:text-rose-600">
            <XCircle className="size-4" /> Cancel Appointment
          </Button>
          <Button size="sm" onClick={() => setEditOpen(true)}>
            <Pencil className="size-4" /> Edit Appointment
          </Button>
        </div>
      </div>

      <EntityFormDialog
        open={rescheduleOpen}
        onOpenChange={setRescheduleOpen}
        title="Reschedule Appointment"
        description="Update the date, time or doctor for this appointment."
        icon={CalendarClock}
        fields={appointmentFields}
        submitLabel="Save Changes"
      />
      <EntityFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit Appointment"
        description="Update appointment details for Priya Sharma."
        icon={Pencil}
        fields={appointmentFields}
        submitLabel="Save Changes"
      />

      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Patient</p>
          <div className="flex items-center gap-2.5">
            <img src="https://i.pravatar.cc/80?img=25" alt="Priya Sharma" className="size-10 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">Priya Sharma</p>
              <p className="text-xs text-muted-foreground">PT1001</p>
            </div>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Phone className="size-3.5" /> 98765 43210
          </p>
          <Link to="/patients/PT1001" className="mt-1 inline-block text-xs font-medium text-primary hover:underline">
            View Profile
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Doctor</p>
          <div className="flex items-center gap-2.5">
            <img src="https://i.pravatar.cc/80?img=13" alt="Dr. Arjun Mehta" className="size-10 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">Dr. Arjun Mehta</p>
              <p className="text-xs text-muted-foreground">Cardiologist</p>
            </div>
          </div>
          <Link to="/doctors" className="mt-2 inline-block text-xs font-medium text-primary hover:underline">
            View Profile
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Department</p>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
              <HeartPulse className="size-5" />
            </span>
            <p className="text-sm font-semibold text-foreground">Cardiology</p>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <DoorOpen className="size-3.5" /> Room No. 203, Main Block
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Appointment Type</p>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <Stethoscope className="size-5" />
            </span>
            <p className="text-sm font-semibold text-foreground">Consultation</p>
          </div>
          <span className="mt-2 inline-block rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">30 Minutes</span>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-5">
        <TabsList className="mb-4 flex-wrap justify-start">
          <TabsTrigger value="details">Appointment Details</TabsTrigger>
          <TabsTrigger value="history">Patient History</TabsTrigger>
          <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="logs">Reminders & Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-base font-semibold text-foreground">Appointment Information</h3>
              <dl className="flex flex-col gap-3 text-sm">
                {[
                  ['Date', '14 May 2024, Tuesday'],
                  ['Time', '09:30 AM - 10:00 AM'],
                  ['Appointment Type', 'Consultation'],
                  ['Payment Status', 'Paid'],
                  ['Booked By', 'Receptionist (Rohan Verma)'],
                  ['Booking Source', 'Phone'],
                  ['Reason for Visit', 'Chest pain and shortness of breath'],
                  ['Notes', 'Patient advised to bring previous reports.'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="shrink-0 text-muted-foreground">{label}</dt>
                    <dd className="text-right font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Printer className="size-4" /> Print Appointment Slip
                </Button>
                <Button variant="outline" size="sm">
                  <Send className="size-4" /> Send Confirmation
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-base font-semibold text-foreground">Appointment Timeline</h3>
              <ul className="flex flex-col gap-5">
                {timeline.map((t, i) => (
                  <li key={t.title} className="relative flex gap-3 pl-1">
                    {i < timeline.length - 1 && (
                      <span className="absolute left-[15px] top-6 h-full w-px bg-border" />
                    )}
                    <span
                      className={`z-10 flex size-6 shrink-0 items-center justify-center rounded-full ${
                        t.done ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {t.done ? <CheckCircle2 className="size-3.5" /> : <Bell className="size-3.5" />}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.title}</p>
                      {t.meta && <p className="text-xs text-muted-foreground">{t.meta}</p>}
                      <p className="text-xs text-muted-foreground">{t.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Patient history will appear here.
          </div>
        </TabsContent>
        <TabsContent value="notes">
          <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Clinical notes will appear here.
          </div>
        </TabsContent>
        <TabsContent value="documents">
          <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Documents will appear here.
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Billing details will appear here.
          </div>
        </TabsContent>
        <TabsContent value="logs">
          <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Reminders & logs will appear here.
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Upcoming Appointments</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All Appointments
            </a>
          </div>
          <ul className="flex flex-col gap-3.5">
            {upcoming.map((u) => (
              <li key={u.date + u.title} className="flex items-start gap-3 text-sm">
                <div className="flex w-12 shrink-0 flex-col items-center rounded-md bg-secondary py-1 text-xs font-semibold text-foreground">
                  {u.date.split(' ')[0]}
                  <span className="font-normal text-muted-foreground">{u.date.split(' ')[1]}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{u.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{u.meta}</p>
                </div>
                <StatusBadge status={u.status} />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Previous Appointments</h3>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All History
            </a>
          </div>
          <ul className="flex flex-col gap-3.5">
            {previous.map((u) => (
              <li key={u.date + u.title} className="flex items-start gap-3 text-sm">
                <div className="flex w-12 shrink-0 flex-col items-center rounded-md bg-secondary py-1 text-xs font-semibold text-foreground">
                  {u.date.split(' ')[0]}
                  <span className="font-normal text-muted-foreground">{u.date.split(' ')[1]}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{u.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{u.meta}</p>
                </div>
                <StatusBadge status={u.status} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <QuickActionsGrid actions={quickActions} />
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Billing Summary</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View Invoice
              </a>
            </div>
            <dl className="flex flex-col gap-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Consultation Fee</dt>
                <dd className="font-medium text-foreground">₹800.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Room Charges</dt>
                <dd className="font-medium text-foreground">₹0.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Discount</dt>
                <dd className="font-medium text-foreground">- ₹0.00</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2.5 text-sm">
                <dt className="font-semibold text-foreground">Total Amount</dt>
                <dd className="font-semibold text-foreground">₹800.00</dd>
              </div>
              <div className="mt-1 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2">
                <span className="text-sm font-medium text-emerald-700">Paid</span>
                <span className="text-sm font-semibold text-emerald-700">₹800.00</span>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
