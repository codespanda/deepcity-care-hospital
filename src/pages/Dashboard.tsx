import {
  Users,
  CalendarDays,
  IndianRupee,
  BedDouble,
  UserPlus,
  FileText,
  FlaskConical,
  Pill,
  LogOut,
  Megaphone,
} from 'lucide-react'
import { StatCard } from '@/components/shared/StatCard'
import { DonutCard } from '@/components/shared/DonutCard'
import { TrendChartCard } from '@/components/shared/TrendChartCard'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'

const outpatientData = [
  { time: '8 AM', newPatients: 80, followUps: 45 },
  { time: '10 AM', newPatients: 150, followUps: 100 },
  { time: '12 PM', newPatients: 105, followUps: 65 },
  { time: '2 PM', newPatients: 180, followUps: 110 },
  { time: '4 PM', newPatients: 130, followUps: 95 },
  { time: '6 PM', newPatients: 165, followUps: 105 },
]

const departmentDistribution = [
  { name: 'General Medicine', value: 437, color: '#3b82f6' },
  { name: 'Cardiology', value: 250, color: '#22c55e' },
  { name: 'Orthopedics', value: 187, color: '#8b5cf6' },
  { name: 'Pediatrics', value: 125, color: '#f59e0b' },
  { name: 'Neurology', value: 125, color: '#06b6d4' },
  { name: 'Others', value: 124, color: '#cbd5e1' },
]

const recentPatients = [
  { name: 'Amit Kumar', avatar: 'https://i.pravatar.cc/80?img=60', meta: 'OPD · General Medicine', time: '09:15 AM' },
  { name: 'Neha Singh', avatar: 'https://i.pravatar.cc/80?img=28', meta: 'OPD · Gynecology', time: '09:10 AM' },
  { name: 'Vikram Joshi', avatar: 'https://i.pravatar.cc/80?img=61', meta: 'OPD · Orthopedics', time: '09:05 AM' },
  { name: 'Kavita Reddy', avatar: 'https://i.pravatar.cc/80?img=29', meta: 'OPD · Dermatology', time: '09:00 AM' },
  { name: 'Arjun Das', avatar: 'https://i.pravatar.cc/80?img=51', meta: 'OPD · Cardiology', time: '08:55 AM' },
]

const bedOccupancy = [
  { name: 'General Ward', value: 120, color: '#3b82f6', countLabel: '120/150' },
  { name: 'ICU', value: 32, color: '#22c55e', countLabel: '32/40' },
  { name: 'Private Rooms', value: 18, color: '#8b5cf6', countLabel: '18/30' },
  { name: 'Emergency', value: 16, color: '#f59e0b', countLabel: '16/30' },
]

const revenueData = [
  { day: '1 May', revenue: 12 },
  { day: '4 May', revenue: 15 },
  { day: '7 May', revenue: 11 },
  { day: '10 May', revenue: 18 },
  { day: '13 May', revenue: 16 },
  { day: '14 May', revenue: 19 },
]

const todaysAppointments = [
  { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/80?img=25', meta: 'OPD · Cardiology', time: '09:30 AM', color: 'bg-blue-100 text-blue-700' },
  { name: 'Rohan Verma', avatar: 'https://i.pravatar.cc/80?img=53', meta: 'OPD · General Medicine', time: '10:00 AM', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Ananya Gupta', avatar: 'https://i.pravatar.cc/80?img=26', meta: 'OPD · Pediatrics', time: '10:30 AM', color: 'bg-amber-100 text-amber-700' },
  { name: 'Suresh Patel', avatar: 'https://i.pravatar.cc/80?img=59', meta: 'OPD · Orthopedics', time: '11:00 AM', color: 'bg-violet-100 text-violet-700' },
  { name: 'Meera Nair', avatar: 'https://i.pravatar.cc/80?img=48', meta: 'OPD · Neurology', time: '11:30 AM', color: 'bg-blue-100 text-blue-700' },
]

const quickActions: QuickAction[] = [
  { icon: CalendarDays, label: 'New Appointment', color: 'blue' },
  { icon: UserPlus, label: 'Add Patient', color: 'green' },
  { icon: FileText, label: 'Create Invoice', color: 'purple' },
  { icon: FlaskConical, label: 'Lab Test', color: 'orange' },
  { icon: Pill, label: 'Add Medicine', color: 'red' },
  { icon: LogOut, label: 'Discharge Patient', color: 'teal' },
]

const announcements = [
  { title: 'Health Camp', text: 'Free general health checkup camp on 20 May 2024.', date: '2 days ago' },
  { title: 'New OPD Timings', text: 'OPD timings have been updated from 1 June 2024. Please check the details.', date: '4 days ago' },
  { title: 'Hospital Holiday Notice', text: 'The hospital will remain closed on 26 May 2024 on account of Republic Day.', date: '5 days ago' },
  { title: 'Staff Training Session', text: 'Mandatory CPR refresher training for all nursing staff on 24 May 2024.', date: '1 week ago' },
]

export function Dashboard() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back, Dr. Arjun Mehta! Here's what's happening today.
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground">
          <CalendarDays className="size-4 text-muted-foreground" />
          14 May 2024, Tuesday
        </span>
      </div>

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Users} color="blue" label="Total Patients" value="1,248" delta="12.5%" sparkline={[10, 14, 11, 18, 15, 20, 18]} />
        <StatCard icon={CalendarDays} color="green" label="Appointments" value="312" delta="8.2%" sparkline={[8, 10, 9, 13, 11, 14, 15]} />
        <StatCard icon={IndianRupee} color="purple" label="Total Revenue" value="₹2,45,890" delta="15.3%" sparkline={[12, 11, 15, 14, 18, 17, 20]} />
        <StatCard icon={BedDouble} color="orange" label="Active Beds" value="186 / 250" delta="4.1%" sparkline={[15, 16, 14, 17, 16, 18, 19]} />
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Outpatient Overview"
          periodLabel="Today"
          type="line"
          data={outpatientData}
          xKey="time"
          series={[
            { key: 'newPatients', label: 'New Patients', color: '#3b82f6' },
            { key: 'followUps', label: 'Follow Ups', color: '#22c55e' },
          ]}
        />
        <DonutCard title="Department Distribution" data={departmentDistribution} centerValue="1,248" centerLabel="Total" />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Recent Patients</h3>
              <a href="/patients" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {recentPatients.map((p) => (
                <li key={p.name} className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.name} className="size-9 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{p.meta}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{p.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Today's Appointments</h3>
              <a href="/appointments" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {todaysAppointments.map((a) => (
                <li key={a.name} className="flex items-center gap-3">
                  <img src={a.avatar} alt={a.name} className="size-9 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{a.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{a.meta}</p>
                  </div>
                  <span className={`shrink-0 rounded-md px-2 py-1 text-xs font-medium ${a.color}`}>{a.time}</span>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-sm font-medium text-primary hover:underline">+ 12 More Appointments</button>
          </div>
        </div>

        <div className="flex h-full flex-col gap-5">
          <DonutCard title="Bed Occupancy" viewAllHref="/beds-rooms" data={bedOccupancy} centerValue="74%" centerLabel="Occupied" />
          <TrendChartCard
            title="Revenue Overview"
            periodLabel="This Month"
            type="bar"
            data={revenueData}
            xKey="day"
            series={[{ key: 'revenue', label: 'Revenue', color: '#3b82f6' }]}
            yFormatter={(v) => `${v}L`}
            stretch
          />
        </div>

        <div className="flex flex-col gap-5">
          <QuickActionsGrid actions={quickActions} />

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Announcements</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {announcements.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 flex-col items-center justify-center rounded-lg bg-accent text-primary">
                    <Megaphone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.text}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70">{a.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
