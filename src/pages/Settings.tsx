import { useState } from 'react'
import {
  Settings2,
  UserCircle,
  Lock,
  Bell,
  Mail,
  MessageSquare,
  Receipt,
  Building2,
  UsersRound,
  Blocks,
  DatabaseBackup,
  ScrollText,
  Check,
  ShieldCheck,
  ChevronRight,
  Trash2,
  HardDriveUpload,
  RefreshCcw,
  FileSearch,
  HardDrive,
  ArrowLeft,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { GeneralSettingsTab } from '@/pages/settings/GeneralSettingsTab'
import { ProfileSettingsTab } from '@/pages/settings/ProfileSettingsTab'
import { PasswordSecurityTab } from '@/pages/settings/PasswordSecurityTab'
import { NotificationsTab } from '@/pages/settings/NotificationsTab'
import { EmailSettingsTab } from '@/pages/settings/EmailSettingsTab'
import { SmsSettingsTab } from '@/pages/settings/SmsSettingsTab'
import { BillingSettingsTab } from '@/pages/settings/BillingSettingsTab'
import { HospitalInfoTab } from '@/pages/settings/HospitalInfoTab'
import { UsersRolesTab } from '@/pages/settings/UsersRolesTab'
import { IntegrationsTab } from '@/pages/settings/IntegrationsTab'
import { BackupRestoreTab } from '@/pages/settings/BackupRestoreTab'
import { SystemLogsTab } from '@/pages/settings/SystemLogsTab'

const settingsNav = [
  { label: 'General Settings', icon: Settings2, Component: GeneralSettingsTab },
  { label: 'Profile Settings', icon: UserCircle, Component: ProfileSettingsTab },
  { label: 'Password & Security', icon: Lock, Component: PasswordSecurityTab },
  { label: 'Notifications', icon: Bell, Component: NotificationsTab },
  { label: 'Email Settings', icon: Mail, Component: EmailSettingsTab },
  { label: 'SMS Settings', icon: MessageSquare, Component: SmsSettingsTab },
  { label: 'Billing Settings', icon: Receipt, Component: BillingSettingsTab },
  { label: 'Hospital Information', icon: Building2, Component: HospitalInfoTab },
  { label: 'Users & Roles', icon: UsersRound, Component: UsersRolesTab },
  { label: 'Integrations', icon: Blocks, Component: IntegrationsTab },
  { label: 'Backup & Restore', icon: DatabaseBackup, Component: BackupRestoreTab },
  { label: 'System Logs', icon: ScrollText, Component: SystemLogsTab },
]

const securityStatus = [
  { label: 'SSL Certificate', value: 'Valid' },
  { label: 'Firewall', value: 'Active' },
  { label: 'Two Factor Auth', value: 'Enabled' },
  { label: 'Last Backup', value: 'Today, 02:30 AM' },
]

const quickActions = [
  { icon: Trash2, label: 'Clear Cache' },
  { icon: HardDriveUpload, label: 'Backup Database' },
  { icon: RefreshCcw, label: 'System Update' },
  { icon: FileSearch, label: 'View System Logs' },
]

export function Settings() {
  const [activeTab, setActiveTab] = useState('General Settings')
  const active = settingsNav.find((item) => item.label === activeTab) ?? settingsNav[0]
  const ActiveComponent = active.Component

  return (
    <div>
      <PageHeader
        breadcrumb={['Settings', activeTab]}
        title="Settings"
        description="Manage your account, preferences and system configurations."
        actions={
          <Button>
            <Check className="size-4" /> Save Changes
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_1fr_280px]">
        <div className="flex h-full flex-col rounded-xl border border-border bg-card p-3">
          <ul className="flex flex-col gap-1">
            {settingsNav.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActiveTab(item.label)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeTab === item.label ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <item.icon className="size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-4 pt-5">
            <div className="border-t border-border pt-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <HardDrive className="size-3.5 text-muted-foreground" /> Storage
                </span>
                <span className="text-muted-foreground">245 GB / 1 TB</span>
              </div>
              <Progress value={24} />
            </div>

            <Link to="/" className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
              <ArrowLeft className="size-4" /> Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ActiveComponent />
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">System Information</h3>
            <dl className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Version</dt>
                <dd className="font-medium text-foreground">v2.4.0</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Environment</dt>
                <dd>
                  <Badge className="bg-emerald-100 text-emerald-700">Production</Badge>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Last Updated</dt>
                <dd className="font-medium text-foreground">28 May 2024, 10:30 AM</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Database</dt>
                <dd>
                  <Badge className="bg-emerald-100 text-emerald-700">Connected</Badge>
                </dd>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <dt className="text-muted-foreground">Storage Used</dt>
                  <dd className="font-medium text-foreground">245 GB / 1 TB</dd>
                </div>
                <Progress value={24} />
                <p className="mt-1 text-right text-xs text-primary">24%</p>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Security Status</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {securityStatus.map((s) => (
                <li key={s.label} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-foreground">
                    <ShieldCheck className="size-4 text-emerald-500" /> {s.label}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-2 text-base font-semibold text-foreground">Quick Actions</h3>
            <ul className="flex flex-col gap-1">
              {quickActions.map((a) => (
                <li key={a.label}>
                  <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-accent">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                      <a.icon className="size-4" />
                    </span>
                    <span className="flex-1 text-sm font-medium text-foreground">{a.label}</span>
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
