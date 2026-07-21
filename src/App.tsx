import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'

const Dashboard = lazy(() => import('@/pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const AppointmentsList = lazy(() => import('@/pages/appointments/AppointmentsList').then((m) => ({ default: m.AppointmentsList })))
const DoctorSchedule = lazy(() => import('@/pages/appointments/DoctorSchedule').then((m) => ({ default: m.DoctorSchedule })))
const AppointmentDetails = lazy(() => import('@/pages/appointments/AppointmentDetails').then((m) => ({ default: m.AppointmentDetails })))
const PatientsList = lazy(() => import('@/pages/patients/PatientsList').then((m) => ({ default: m.PatientsList })))
const PatientProfile = lazy(() => import('@/pages/patients/PatientProfile').then((m) => ({ default: m.PatientProfile })))
const Doctors = lazy(() => import('@/pages/Doctors').then((m) => ({ default: m.Doctors })))
const Departments = lazy(() => import('@/pages/Departments').then((m) => ({ default: m.Departments })))
const Billing = lazy(() => import('@/pages/Billing').then((m) => ({ default: m.Billing })))
const Pharmacy = lazy(() => import('@/pages/Pharmacy').then((m) => ({ default: m.Pharmacy })))
const LabReports = lazy(() => import('@/pages/LabReports').then((m) => ({ default: m.LabReports })))
const BedsRooms = lazy(() => import('@/pages/BedsRooms').then((m) => ({ default: m.BedsRooms })))
const Inventory = lazy(() => import('@/pages/Inventory').then((m) => ({ default: m.Inventory })))
const Insurance = lazy(() => import('@/pages/Insurance').then((m) => ({ default: m.Insurance })))
const Messages = lazy(() => import('@/pages/Messages').then((m) => ({ default: m.Messages })))
const Settings = lazy(() => import('@/pages/Settings').then((m) => ({ default: m.Settings })))
const SignIn = lazy(() => import('@/pages/auth/SignIn').then((m) => ({ default: m.SignIn })))
const SignUp = lazy(() => import('@/pages/auth/SignUp').then((m) => ({ default: m.SignUp })))
const Docs = lazy(() => import('@/pages/Docs').then((m) => ({ default: m.Docs })))

function PageFallback() {
  return <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">Loading...</div>
}

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/schedule" element={<DoctorSchedule />} />
          <Route path="/appointments/:id" element={<AppointmentDetails />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/patients/:id" element={<PatientProfile />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/lab-reports" element={<LabReports />} />
          <Route path="/beds-rooms" element={<BedsRooms />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Suspense>
  )
}

export default App
