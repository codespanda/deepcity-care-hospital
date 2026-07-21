import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ChevronRight,
  ArrowLeft,
  Pencil,
  Plus,
  Phone,
  Mail,
  MapPin,
  Cake,
  ShieldOff,
  Pill,
  FlaskConical,
  Ruler,
  Weight,
  Activity,
  HeartPulse,
  Thermometer,
  Gauge,
  AlertTriangle,
  ShieldCheck,
  CalendarPlus,
  StickyNote,
  UploadCloud,
  MessageSquareText,
  Printer,
  Share2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { getPatientById } from '@/data/patients'
import { appointmentFields, patientFields } from '@/lib/formFields'

const recentAppointments = [
  { date: '10 MAY', title: 'Consultation', meta: 'Dr. Arjun Mehta · Cardiology', time: '09:30 AM', status: 'Completed' },
  { date: '02 MAY', title: 'Follow-up', meta: 'Dr. Arjun Mehta · Cardiology', time: '11:00 AM', status: 'Completed' },
  { date: '20 APR', title: 'Consultation', meta: 'Dr. Neha Singh · Cardiology', time: '10:00 AM', status: 'Completed' },
  { date: '10 APR', title: 'Review', meta: 'Dr. Arjun Mehta · Cardiology', time: '09:30 AM', status: 'Completed' },
  { date: '25 MAR', title: 'Consultation', meta: 'Dr. Neha Singh · Cardiology', time: '10:30 AM', status: 'Cancelled' },
]

const recentLabReports = [
  { name: 'Complete Blood Count (CBC)', date: '10 May 2024', status: 'Normal' },
  { name: 'Lipid Profile', date: '08 May 2024', status: 'Normal' },
  { name: 'ECG Report', date: '05 May 2024', status: 'Normal' },
  { name: 'Thyroid Profile (T3, T4, TSH)', date: '28 Apr 2024', status: 'Normal' },
  { name: 'Blood Sugar (Fasting)', date: '20 Apr 2024', status: 'High' },
]

const currentMedications = [
  { name: 'Aspirin 75mg', dose: '1 Tablet · Once Daily · After Food' },
  { name: 'Atorvastatin 10mg', dose: '1 Tablet · Once Daily · At Night' },
  { name: 'Vitamin D3 60K', dose: '1 Capsule · Weekly · After Food' },
]

const diagnosisHistory = [
  { name: 'Hypertension', meta: 'Diagnosed on 10 Jan 2024 · Dr. Arjun Mehta' },
  { name: 'High Cholesterol', meta: 'Diagnosed on 18 Dec 2023 · Dr. Neha Singh' },
  { name: 'Migraine', meta: 'Diagnosed on 02 Nov 2023 · Dr. Arjun Mehta' },
]

const prescriptions = [
  { name: 'Pan 40mg', dose: '1 Tablet · Once Daily · Before Food' },
  { name: 'Telmisartan 40mg', dose: '1 Tablet · Once Daily · Morning' },
  { name: 'Rosuvastatin 10mg', dose: '1 Tablet · Once Daily · At Night' },
]

const activityTimeline = [
  { date: '10 May 2024', title: 'Lab Report', meta: 'Added by Dr. Arjun Mehta' },
  { date: '10 May 2024', title: 'Prescription', meta: 'Added by Dr. Arjun Mehta' },
  { date: '02 May 2024', title: 'Invoice Generated', meta: 'INV-2024-1024' },
  { date: '20 Apr 2024', title: 'Follow-up Done', meta: 'By Dr. Arjun Mehta' },
  { date: '10 Apr 2024', title: 'Lab Report', meta: 'Added by Dr. Neha Singh' },
]

const quickActions: QuickAction[] = [
  { icon: CalendarPlus, label: 'Book Appointment', color: 'blue' },
  { icon: StickyNote, label: 'Add Note', color: 'green' },
  { icon: UploadCloud, label: 'Upload Document', color: 'purple' },
  { icon: MessageSquareText, label: 'Send Message', color: 'orange' },
  { icon: Printer, label: 'Print Profile', color: 'red' },
  { icon: Share2, label: 'Share Profile', color: 'teal' },
]

const placeholderTabs = [
  ['history', 'Medical history will appear here.'],
  ['appointments', 'All appointments will appear here.'],
  ['lab-reports', 'All lab reports will appear here.'],
  ['prescriptions', 'All prescriptions will appear here.'],
  ['invoices', 'All invoices will appear here.'],
  ['documents', 'Uploaded documents will appear here.'],
  ['notes', 'Clinical notes will appear here.'],
  ['timeline', 'Full activity timeline will appear here.'],
] as const

export function PatientProfile() {
  const { id } = useParams()
  const patient = getPatientById(id ?? '') ?? getPatientById('PT1001')!
  const [newAppointmentOpen, setNewAppointmentOpen] = useState(false)
  const [editPatientOpen, setEditPatientOpen] = useState(false)

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Patients</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Patient Profile</span>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-foreground">{patient.name}</h1>
            <StatusBadge status={patient.status} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Patient ID: {patient.id} · {patient.age} Years, {patient.gender} · {patient.bloodGroup}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/patients">
              <ArrowLeft className="size-4" /> Back to Patients
            </Link>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setEditPatientOpen(true)}>
            <Pencil className="size-4" /> Edit Patient
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
        description={`Schedule a new appointment for ${patient.name}.`}
        icon={CalendarPlus}
        fields={appointmentFields}
        submitLabel="Book Appointment"
      />
      <EntityFormDialog
        open={editPatientOpen}
        onOpenChange={setEditPatientOpen}
        title="Edit Patient"
        description={`Update details for ${patient.name}.`}
        icon={Pencil}
        fields={patientFields}
        submitLabel="Save Changes"
      />

      <div className="mb-5 grid grid-cols-1 gap-6 rounded-xl border border-border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-4">
          <img src={patient.avatar} alt={patient.name} className="size-16 shrink-0 rounded-full object-cover" />
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5" /> {patient.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5" /> {patient.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {patient.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Cake className="size-3.5" /> {patient.dob}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldOff className="size-3.5" /> {patient.insurance}
            </span>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">Primary Doctor</p>
          <p className="text-sm font-semibold text-foreground">{patient.primaryDoctor}</p>
          <p className="text-xs text-muted-foreground">Cardiologist</p>
          <p className="mt-3 mb-2 text-xs font-medium text-muted-foreground">Department</p>
          <p className="text-sm font-semibold text-foreground">{patient.department}</p>
        </div>

        <div>
          <p className="mb-1 text-xs font-medium text-muted-foreground">Last Visit</p>
          <p className="text-sm font-semibold text-foreground">{patient.lastVisit}</p>
          <p className="mt-3 mb-1 text-xs font-medium text-muted-foreground">Next Appointment</p>
          <p className="text-sm font-semibold text-foreground">16 May 2024, 09:30 AM</p>
          <p className="text-xs font-medium text-emerald-600">Confirmed</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-muted-foreground">Total Visits</p>
            <p className="font-semibold text-foreground">8</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Appointments</p>
            <p className="font-semibold text-foreground">12</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Invoices</p>
            <p className="font-semibold text-foreground">₹18,750</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Outstanding</p>
            <p className="font-semibold text-rose-600">₹1,250</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 flex-wrap justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">Medical History</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="lab-reports">Lab Reports</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">Recent Appointments</h3>
                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                      View All
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3.5">
                    {recentAppointments.map((a) => (
                      <li key={a.date + a.title} className="flex items-start gap-3 text-sm">
                        <div className="flex w-12 shrink-0 flex-col items-center rounded-md bg-secondary py-1 text-xs font-semibold text-foreground">
                          {a.date.split(' ')[0]}
                          <span className="font-normal text-muted-foreground">{a.date.split(' ')[1]}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-foreground">{a.title}</p>
                          <p className="truncate text-xs text-muted-foreground">
                            {a.meta} · {a.time}
                          </p>
                        </div>
                        <StatusBadge status={a.status} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">Recent Lab Reports</h3>
                    <a href="/lab-reports" className="text-sm font-medium text-primary hover:underline">
                      View All
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3.5">
                    {recentLabReports.map((r) => (
                      <li key={r.name} className="flex items-center gap-3 text-sm">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                          <FlaskConical className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-foreground">{r.name}</p>
                          <p className="text-xs text-muted-foreground">{r.date}</p>
                        </div>
                        <StatusBadge status={r.status} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Current Medications</h3>
                    <a href="#" className="text-xs font-medium text-primary hover:underline">
                      View All
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {currentMedications.map((m) => (
                      <li key={m.name} className="flex items-start gap-2.5 text-sm">
                        <Pill className="mt-0.5 size-4 shrink-0 text-blue-500" />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-foreground">{m.name}</p>
                          <p className="text-xs text-muted-foreground">{m.dose}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Diagnosis History</h3>
                    <a href="#" className="text-xs font-medium text-primary hover:underline">
                      View All
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {diagnosisHistory.map((d) => (
                      <li key={d.name} className="text-sm">
                        <p className="font-medium text-foreground">{d.name}</p>
                        <p className="text-xs text-muted-foreground">{d.meta}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Prescriptions</h3>
                    <a href="#" className="text-xs font-medium text-primary hover:underline">
                      View All
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {prescriptions.map((p) => (
                      <li key={p.name} className="flex items-start gap-2.5 text-sm">
                        <Pill className="mt-0.5 size-4 shrink-0 text-rose-500" />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-foreground">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.dose}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground">Patient Activity Timeline</h3>
                  <a href="#" className="text-sm font-medium text-primary hover:underline">
                    View All
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {activityTimeline.map((a) => (
                    <div key={a.title + a.date} className="border-l-2 border-primary/30 pl-3">
                      <p className="text-xs text-muted-foreground">{a.date}</p>
                      <p className="text-sm font-medium text-foreground">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {placeholderTabs.map(([value, text]) => (
              <TabsContent key={value} value={value}>
                <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">{text}</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Patient Snapshot</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View Full Profile
              </a>
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                [Ruler, 'Height', '165 cm'],
                [Weight, 'Weight', '62 kg'],
                [Gauge, 'BMI', '22.8'],
                [HeartPulse, 'Blood Pressure', '120/80 mmHg'],
                [Activity, 'Heart Rate', '72 bpm'],
                [Thermometer, 'Temperature', '98.4 °F'],
              ].map(([Icon, label, value]) => {
                const IconComp = Icon as typeof Ruler
                return (
                  <li key={label as string} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <IconComp className="size-4" /> {label as string}
                    </span>
                    <span className="font-medium text-foreground">{value as string}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
              <AlertTriangle className="size-4 text-rose-500" /> Allergies
            </h3>
            <p className="text-sm font-medium text-foreground">Penicillin</p>
            <p className="text-xs text-rose-600">Rash, Itching</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
              <ShieldCheck className="size-4 text-primary" /> Insurance Details
            </h3>
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Provider</dt>
                <dd className="font-medium text-foreground">Star Health</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Policy No.</dt>
                <dd className="font-medium text-foreground">SHI123456789</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Valid Till</dt>
                <dd className="font-medium text-foreground">31 Dec 2024</dd>
              </div>
            </dl>
          </div>

          <QuickActionsGrid actions={quickActions} />
        </div>
      </div>
    </div>
  )
}
