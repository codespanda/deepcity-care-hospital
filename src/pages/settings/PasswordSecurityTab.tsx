import { Laptop, Smartphone, ShieldCheck, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const sessions = [
  { device: 'Chrome on Windows', icon: Laptop, location: 'Mohali, Punjab', time: 'Active now', current: true },
  { device: 'DeepCity Care App on iPhone', icon: Smartphone, location: 'Mohali, Punjab', time: '2 hours ago', current: false },
  { device: 'Safari on MacBook', icon: Laptop, location: 'Chandigarh', time: 'Yesterday', current: false },
]

export function PasswordSecurityTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-foreground">Change Password</h3>
          <p className="text-sm text-muted-foreground">Use a strong password you don't use elsewhere.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label className="mb-1.5">Current Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label className="mb-1.5">New Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label className="mb-1.5">Confirm New Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
        <Button className="mt-5">Update Password</Button>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Add an extra layer of security to your account using an authenticator app.</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Active Sessions</h3>
        <ul className="flex flex-col gap-4">
          {sessions.map((s) => (
            <li key={s.device} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                <s.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  {s.device}
                  {s.current && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">This device</span>}
                </p>
                <p className="text-xs text-muted-foreground">
                  {s.location} · {s.time}
                </p>
              </div>
              {!s.current && (
                <Button variant="outline" size="sm" className="text-rose-600 hover:text-rose-600">
                  <LogOut className="size-3.5" /> Log Out
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
