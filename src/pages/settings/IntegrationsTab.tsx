import { CalendarDays, MessageCircle, IndianRupee, Video, Mail, Hash } from 'lucide-react'
import { Button } from '@/components/ui/button'

const integrations = [
  { name: 'Google Calendar', desc: 'Sync doctor schedules and appointments.', icon: CalendarDays, color: 'bg-blue-100 text-blue-600', connected: true },
  { name: 'WhatsApp Business', desc: 'Send appointment reminders via WhatsApp.', icon: MessageCircle, color: 'bg-emerald-100 text-emerald-600', connected: true },
  { name: 'Razorpay', desc: 'Accept online payments for invoices.', icon: IndianRupee, color: 'bg-violet-100 text-violet-600', connected: true },
  { name: 'Zoom', desc: 'Enable video consultations with patients.', icon: Video, color: 'bg-sky-100 text-sky-600', connected: false },
  { name: 'Mailchimp', desc: 'Send newsletters and health camp updates.', icon: Mail, color: 'bg-amber-100 text-amber-600', connected: false },
  { name: 'Slack', desc: 'Get real-time alerts in your team channel.', icon: Hash, color: 'bg-rose-100 text-rose-600', connected: false },
]

export function IntegrationsTab() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-foreground">Integrations</h3>
        <p className="text-sm text-muted-foreground">Connect third-party tools and services.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {integrations.map((i) => (
          <div key={i.name} className="flex items-start gap-3 rounded-lg border border-border p-4">
            <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${i.color}`}>
              <i.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">{i.name}</p>
              <p className="text-xs text-muted-foreground">{i.desc}</p>
              <Button variant={i.connected ? 'outline' : 'default'} size="sm" className="mt-3">
                {i.connected ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
