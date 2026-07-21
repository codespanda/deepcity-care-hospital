import { Wand2, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { FilterSelect } from '@/components/shared/FilterSelect'

const templates = [
  { name: 'Appointment Reminder', meta: '"Hi {name}, reminder for your appointment on {date} at {time}."' },
  { name: 'Appointment Cancelled', meta: '"Your appointment on {date} has been cancelled."' },
  { name: 'Payment Confirmation', meta: '"Payment of ₹{amount} received. Thank you."' },
]

export function SmsSettingsTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-foreground">SMS Gateway</h3>
          <p className="text-sm text-muted-foreground">Configure the SMS provider used for patient notifications.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">Provider</Label>
            <FilterSelect placeholder="Provider" defaultValue="Twilio" options={['Twilio', 'MSG91', 'Textlocal', 'AWS SNS']} />
          </div>
          <div>
            <Label className="mb-1.5">Sender ID</Label>
            <Input defaultValue="DPCITY" />
          </div>
          <div>
            <Label className="mb-1.5">API Key</Label>
            <Input type="password" defaultValue="sk_live_9c72a1e4b8" />
          </div>
          <div>
            <Label className="mb-1.5">API Secret</Label>
            <Input type="password" placeholder="••••••••••••" />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-lg border border-border p-3">
          <div>
            <p className="text-sm font-medium text-foreground">Enable SMS Notifications</p>
            <p className="text-xs text-muted-foreground">Turn off to pause all outgoing SMS messages.</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="mt-5 flex gap-2">
          <Button variant="outline" size="sm">
            <Wand2 className="size-4" /> Send Test SMS
          </Button>
          <Button size="sm">Save Configuration</Button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">SMS Templates</h3>
        <ul className="flex flex-col gap-1">
          {templates.map((t) => (
            <li key={t.name} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 hover:bg-accent">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.meta}</p>
              </div>
              <Button variant="outline" size="sm" className="shrink-0">
                <Pencil className="size-3.5" /> Edit
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
