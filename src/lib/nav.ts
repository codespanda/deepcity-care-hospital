import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Stethoscope,
  LayoutGrid,
  FileText,
  Pill,
  FlaskConical,
  BedDouble,
  Package,
  ShieldCheck,
  MessageSquare,
  Settings,
  LogIn,
  UserPlus,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Appointments', href: '/appointments', icon: CalendarDays },
  { label: 'Patients', href: '/patients', icon: Users },
  { label: 'Doctors', href: '/doctors', icon: Stethoscope },
  { label: 'Departments', href: '/departments', icon: LayoutGrid },
  { label: 'Billing & Invoices', href: '/billing', icon: FileText },
  { label: 'Pharmacy', href: '/pharmacy', icon: Pill },
  { label: 'Lab Reports', href: '/lab-reports', icon: FlaskConical },
  { label: 'Beds & Rooms', href: '/beds-rooms', icon: BedDouble },
  { label: 'Inventory', href: '/inventory', icon: Package },
  { label: 'Insurance', href: '/insurance', icon: ShieldCheck },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Settings', href: '/settings', icon: Settings },
]

export const authNavItems: NavItem[] = [
  { label: 'Sign In', href: '/signin', icon: LogIn },
  { label: 'Sign Up', href: '/signup', icon: UserPlus },
]
