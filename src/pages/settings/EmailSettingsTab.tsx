import { Wand2, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FilterSelect } from '@/components/shared/FilterSelect'

const templates = [
  { name: 'Appointment Confirmation', meta: 'Sent when a new appointment is booked' },
  { name: 'Appointment Reminder', meta: 'Sent 24 hours before an appointment' },
  { name: 'Invoice & Payment Receipt', meta: 'Sent after a payment is recorded' },
  { name: 'Password Reset', meta: 'Sent when a password reset is requested' },
]

export function EmailSettingsTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-foreground">SMTP Configuration</h3>
          <p className="text-sm text-muted-foreground">Configure the mail server used to send emails.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">SMTP Host</Label>
            <Input defaultValue="smtp.deepcitycare.com" />
          </div>
          <div>
            <Label className="mb-1.5">SMTP Port</Label>
            <Input defaultValue="587" />
          </div>
          <div>
            <Label className="mb-1.5">Username</Label>
            <Input defaultValue="notifications@deepcitycare.com" />
          </div>
          <div>
            <Label className="mb-1.5">Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label className="mb-1.5">Encryption</Label>
            <FilterSelect placeholder="Encryption" defaultValue="TLS" options={['TLS', 'SSL', 'None']} />
          </div>
          <div>
            <Label className="mb-1.5">From Name</Label>
            <Input defaultValue="DeepCity Care Hospital" />
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <Button variant="outline" size="sm">
            <Wand2 className="size-4" /> Send Test Email
          </Button>
          <Button size="sm">Save Configuration</Button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Email Templates</h3>
        <ul className="flex flex-col gap-1">
          {templates.map((t) => (
            <li key={t.name} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 hover:bg-accent">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.meta}</p>
              </div>
              <Button variant="outline" size="sm">
                <Pencil className="size-3.5" /> Edit
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
