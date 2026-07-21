import { Mail, MessageSquare, Bell } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

const groups = [
  {
    title: 'Email Notifications',
    icon: Mail,
    items: [
      { label: 'New Appointment Booked', defaultChecked: true },
      { label: 'Appointment Reminders', defaultChecked: true },
      { label: 'Lab Report Ready', defaultChecked: true },
      { label: 'Payment Received', defaultChecked: false },
      { label: 'System Alerts', defaultChecked: true },
    ],
  },
  {
    title: 'SMS Notifications',
    icon: MessageSquare,
    items: [
      { label: 'Appointment Reminders', defaultChecked: true },
      { label: 'Appointment Cancellations', defaultChecked: true },
      { label: 'Billing & Payment Alerts', defaultChecked: false },
    ],
  },
  {
    title: 'Push Notifications',
    icon: Bell,
    items: [
      { label: 'New Messages', defaultChecked: true },
      { label: 'Doctor Availability Changes', defaultChecked: false },
      { label: 'Critical Lab Results', defaultChecked: true },
    ],
  },
]

export function NotificationsTab() {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title} className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
            <group.icon className="size-4 text-primary" /> {group.title}
          </h3>
          <ul className="flex flex-col gap-4">
            {group.items.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3">
                <span className="text-sm text-foreground">{item.label}</span>
                <Switch defaultChecked={item.defaultChecked} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
