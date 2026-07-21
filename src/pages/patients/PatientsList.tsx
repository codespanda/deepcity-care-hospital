import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  UserCheck,
  UserPlus,
  Activity,
  Upload,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  CalendarPlus,
  FileDown,
  BellRing,
  GitMerge,
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
import { patients } from '@/data/patients'
import { patientFields } from '@/lib/formFields'

const patientsByDepartment = [
  { name: 'Cardiology', value: 250, color: '#3b82f6' },
  { name: 'Orthopedics', value: 187, color: '#22c55e' },
  { name: 'Neurology', value: 150, color: '#8b5cf6' },
  { name: 'Dermatology', value: 120, color: '#f59e0b' },
  { name: 'Pediatrics', value: 200, color: '#06b6d4' },
  { name: 'Others', value: 341, color: '#cbd5e1' },
]

const visitsData = [
  { month: 'Jan', newPatients: 60, returning: 90 },
  { month: 'Feb', newPatients: 75, returning: 95 },
  { month: 'Mar', newPatients: 68, returning: 102 },
  { month: 'Apr', newPatients: 82, returning: 98 },
  { month: 'May', newPatients: 86, returning: 110 },
]

const topDepartments = [
  { label: 'General Medicine', value: '410', percent: 92 },
  { label: 'Cardiology', value: '320', percent: 76 },
  { label: 'Pediatrics', value: '280', percent: 66 },
  { label: 'Orthopedics', value: '250', percent: 58 },
  { label: 'Neurology', value: '187', percent: 44 },
]

const quickActions: QuickAction[] = [
  { icon: UserPlus, label: 'Add Patient', color: 'blue' },
  { icon: CalendarPlus, label: 'Book Appointment', color: 'green' },
  { icon: Upload, label: 'Import Patients', color: 'purple' },
  { icon: FileDown, label: 'Export List', color: 'orange' },
  { icon: BellRing, label: 'Send Reminder', color: 'red' },
  { icon: GitMerge, label: 'Merge Records', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: UserPlus, color: 'blue', text: 'New patient registered', subtext: 'Vikram Joshi', time: '10:30 AM' },
  { icon: Pencil, color: 'green', text: 'Profile updated', subtext: 'Priya Sharma', time: '09:45 AM' },
  { icon: Activity, color: 'purple', text: 'Vitals recorded', subtext: 'Rohan Verma', time: 'Yesterday' },
  { icon: UserCheck, color: 'orange', text: 'Patient marked active', subtext: 'Ananya Gupta', time: '12 May 2024' },
]

export function PatientsList() {
  const [addPatientOpen, setAddPatientOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Patients', 'All Patients']}
        title="Patients"
        description="Manage hospital patients and their medical records."
        actions={
          <>
            <Button variant="outline">
              <Upload className="size-4" /> Import Patients
            </Button>
            <Button onClick={() => setAddPatientOpen(true)}>
              <Plus className="size-4" /> Add New Patient <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={addPatientOpen}
        onOpenChange={setAddPatientOpen}
        title="Add New Patient"
        description="Register a new patient record."
        icon={Plus}
        fields={patientFields}
        submitLabel="Add Patient"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Users} color="blue" label="Total Patients" value="1,248" delta="12.5%" />
        <StatCard icon={UserCheck} color="green" label="Active Patients" value="1,120" delta="9%" />
        <StatCard icon={UserPlus} color="purple" label="New This Month" value="86" delta="15%" />
        <StatCard icon={Activity} color="orange" label="Avg Visits / Patient" value="3.2" delta="4%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search patient by name, ID, phone..." />
        <FilterSelect placeholder="Department" options={['Department', 'Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics']} />
        <FilterSelect placeholder="Gender" options={['Gender', 'Male', 'Female']} />
        <FilterSelect placeholder="Status" options={['Status', 'Active', 'Inactive']} />
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
                  <TableHead>Patient</TableHead>
                  <TableHead>Age / Gender</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Primary Doctor</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      <Link to={`/patients/${p.id}`} className="flex items-center gap-2.5">
                        <img src={p.avatar} alt={p.name} className="size-8 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-foreground hover:underline">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.id}</p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>
                      {p.age} / {p.gender}
                    </TableCell>
                    <TableCell>{p.phone}</TableCell>
                    <TableCell>{p.primaryDoctor}</TableCell>
                    <TableCell>{p.lastVisit}</TableCell>
                    <TableCell>
                      <StatusBadge status={p.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <Link to={`/patients/${p.id}`} className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Eye className="size-4" />
                        </Link>
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={1248} totalPages={156} itemLabel="patients" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Patients by Department" data={patientsByDepartment} centerValue="1,248" centerLabel="Total" />
          <QuickActionsGrid actions={quickActions} />
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Patient Visits Overview"
          periodLabel="This Year"
          type="area"
          data={visitsData}
          xKey="month"
          series={[
            { key: 'newPatients', label: 'New Patients', color: '#3b82f6' },
            { key: 'returning', label: 'Returning', color: '#22c55e' },
          ]}
        />
        <BarListCard title="Top Departments by Patients" rank items={topDepartments} />
      </div>
    </div>
  )
}
