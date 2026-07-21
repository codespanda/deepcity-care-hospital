import { useState } from 'react'
import {
  Search,
  Video,
  Phone,
  Info,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  CheckCheck,
  MailPlus,
  Users,
  Megaphone,
  FileText,
  Ambulance,
  Droplet,
  HeartPulse,
  Pill,
  Bone,
  Building2,
  CheckCheck as MarkReadIcon,
  Plus,
  ChevronDown,
} from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { ActionList, type ActionListItem } from '@/components/shared/ActionList'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { messageFields } from '@/lib/formFields'

const conversations = [
  { name: 'Priya Sharma', time: '10:30 AM', preview: 'Thank you doctor, I will follow...', unread: 2, avatar: 'https://i.pravatar.cc/100?img=25', online: true, active: true },
  { name: 'Rohan Verma', time: '10:15 AM', preview: 'When is the next follow-up?', unread: 1, avatar: 'https://i.pravatar.cc/100?img=53', online: true },
  { name: 'Cardiology Department', time: '09:45 AM', preview: 'Team meeting scheduled for...', unread: 3, icon: HeartPulse, color: 'bg-violet-100 text-violet-600', online: true },
  { name: 'Ananya Gupta', time: 'Yesterday', preview: 'Prescription clarification needed.', unread: 1, avatar: 'https://i.pravatar.cc/100?img=26' },
  { name: 'Dr. Neha Singh', time: 'Yesterday', preview: 'Please review the lab report.', avatar: 'https://i.pravatar.cc/100?img=32', online: true },
  { name: 'Pharmacy Team', time: 'Yesterday', preview: 'New stock received for...', unread: 2, icon: Pill, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Suresh Patel', time: '21 May', preview: 'Billing issue has been resolved.', avatar: 'https://i.pravatar.cc/100?img=59' },
  { name: 'Orthopedics Department', time: '20 May', preview: 'Patient referral discussion', unread: 1, icon: Bone, color: 'bg-orange-100 text-orange-600' },
  { name: 'Amit Kumar', time: '20 May', preview: 'Report is ready for pickup.', avatar: 'https://i.pravatar.cc/100?img=60' },
  { name: 'HR Department', time: '19 May', preview: 'Leave request approved.', icon: Building2, color: 'bg-teal-100 text-teal-600' },
]

const messages = [
  { from: 'them', text: 'Good morning Dr. Arjun 😊', time: '10:28 AM' },
  { from: 'them', text: 'I wanted to ask about my test results. Are all the values normal?', time: '10:29 AM' },
  { from: 'me', text: "Good morning Priya. I've reviewed your reports. Overall, everything looks good.", time: '10:30 AM' },
  { from: 'them', text: 'That’s a relief! Is there anything I should avoid in my diet?', time: '10:31 AM' },
  { from: 'me', text: 'Yes, please avoid oily and spicy food. Eat more fruits and keep yourself hydrated.', time: '10:32 AM' },
  { from: 'them', text: 'Thank you doctor, I will follow your advice. 🙏', time: '10:33 AM' },
  { from: 'me', text: "You're welcome! Take care and feel free to reach out if you have any concerns.", time: '10:34 AM' },
]

const quickActions: ActionListItem[] = [
  { icon: MailPlus, color: 'blue', label: 'New Message', subtitle: 'Start a new conversation' },
  { icon: Users, color: 'green', label: 'Create Group', subtitle: 'Message multiple people' },
  { icon: Megaphone, color: 'orange', label: 'Broadcast Message', subtitle: 'Send message to all staff' },
  { icon: FileText, color: 'red', label: 'Message Templates', subtitle: 'Use saved templates' },
]

const announcements = [
  { title: 'Hospital Holiday Notice', text: 'The hospital will remain closed on 26 May 2024 on account of Republic Day.', time: '2 hours ago' },
  { title: 'New OPD Timings', text: 'OPD timings have been updated from 1 June 2024. Please check the details.', time: '1 day ago' },
  { title: 'Health Camp', text: 'Free health checkup camp on 30 May 2024 at DeepCity Care Hospital.', time: '2 days ago' },
]

const importantContacts = [
  { name: 'Emergency Desk', phone: '+91 98765 43210', icon: Phone, color: 'bg-rose-100 text-rose-600' },
  { name: 'Ambulance Service', phone: '+91 98765 43211', icon: Ambulance, color: 'bg-amber-100 text-amber-600' },
  { name: 'Blood Bank', phone: '+91 98765 43212', icon: Droplet, color: 'bg-red-100 text-red-600' },
]

const messageStats = [
  { label: 'Total Messages', value: '24', color: 'bg-blue-50 text-blue-600' },
  { label: 'Sent', value: '18', color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Received', value: '6', color: 'bg-amber-50 text-amber-600' },
  { label: 'Unread', value: '5', color: 'bg-violet-50 text-violet-600' },
]

export function Messages() {
  const [newMessageOpen, setNewMessageOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Messages', 'Inbox']}
        title="Messages"
        description="Communicate with patients, staff and departments."
        actions={
          <>
            <Button variant="outline">
              <MarkReadIcon className="size-4" /> Mark all as read
            </Button>
            <Button onClick={() => setNewMessageOpen(true)}>
              <Plus className="size-4" /> New Message <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <EntityFormDialog
        open={newMessageOpen}
        onOpenChange={setNewMessageOpen}
        title="New Message"
        description="Send a message to a patient, staff member or department."
        icon={MailPlus}
        fields={messageFields}
        submitLabel="Send Message"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[300px_1fr_300px]">
        <div className="flex flex-col rounded-xl border border-border bg-card p-4">
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="h-9 pl-9" />
          </div>
          <Tabs defaultValue="all" className="mb-2">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">
                All <span className="ml-1 text-xs text-muted-foreground">24</span>
              </TabsTrigger>
              <TabsTrigger value="unread" className="flex-1">
                Unread <span className="ml-1 text-xs text-muted-foreground">5</span>
              </TabsTrigger>
              <TabsTrigger value="groups" className="flex-1">
                Groups <span className="ml-1 text-xs text-muted-foreground">3</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto">
            {conversations.map((c) => (
              <li key={c.name}>
                <button
                  type="button"
                  className={`flex w-full items-start gap-2.5 rounded-lg border-l-2 px-2.5 py-2.5 text-left transition-colors ${
                    c.active ? 'border-primary bg-accent' : 'border-transparent hover:bg-accent'
                  }`}
                >
                  <span className="relative shrink-0">
                    {c.avatar ? (
                      <img src={c.avatar} alt={c.name} className="size-10 rounded-full object-cover" />
                    ) : (
                      <span className={`flex size-10 items-center justify-center rounded-full ${c.color}`}>
                        {c.icon && <c.icon className="size-4" />}
                      </span>
                    )}
                    {c.online && <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-card bg-emerald-500" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium text-foreground">{c.name}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{c.time}</span>
                    </span>
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-xs text-muted-foreground">{c.preview}</span>
                      {c.unread && (
                        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                          {c.unread}
                        </span>
                      )}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            <span>Showing 1 to 10 of 24 conversations</span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <img src="https://i.pravatar.cc/100?img=25" alt="Priya Sharma" className="size-10 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Priya Sharma</p>
              <p className="flex items-center gap-1 text-xs text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Online
              </p>
            </div>
            <div className="flex items-center gap-1">
              {[Video, Phone, Info, MoreVertical].map((Icon, i) => (
                <button key={i} className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">Today</span>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                {m.from === 'them' && <img src="https://i.pravatar.cc/100?img=25" alt="" className="size-7 shrink-0 rounded-full object-cover" />}
                <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${m.from === 'me' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'}`}>
                  <p>{m.text}</p>
                  <p className={`mt-1 flex items-center gap-1 text-[11px] ${m.from === 'me' ? 'justify-end text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {m.time}
                    {m.from === 'me' && <CheckCheck className="size-3.5" />}
                  </p>
                </div>
                {m.from === 'me' && <img src="https://i.pravatar.cc/100?img=13" alt="" className="size-7 shrink-0 rounded-full object-cover" />}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-border p-3">
            <button className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
              <Paperclip className="size-4" />
            </button>
            <Input placeholder="Type your message..." className="h-10 flex-1 rounded-full" />
            <button className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
              <Smile className="size-4" />
            </button>
            <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Send className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ActionList title="Quick Actions" items={quickActions} />

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
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Megaphone className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center justify-between gap-2 text-sm font-medium text-foreground">
                      {a.title} <span className="shrink-0 text-xs font-normal text-muted-foreground">{a.time}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Important Contacts</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {importantContacts.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${c.color}`}>
                    <c.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.phone}</p>
                  </div>
                  <button className="flex size-8 shrink-0 items-center justify-center rounded-full text-primary hover:bg-accent">
                    <Phone className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Message Statistics</h3>
              <span className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">This Month</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {messageStats.map((s) => (
                <div key={s.label} className={`rounded-lg p-3 ${s.color}`}>
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
