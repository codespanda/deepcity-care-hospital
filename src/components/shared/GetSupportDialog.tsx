import {
  Headset,
  MessageSquare,
  Phone,
  Mail,
  BookOpen,
  Monitor,
  ChevronRight,
  FileText,
  ThumbsUp,
  ThumbsDown,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Check,
  ShieldCheck,
  Clock3,
  UserRound,
} from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const supportChannels = [
  { icon: MessageSquare, label: 'Live Chat', subtitle: 'Chat with our support team', active: true, color: 'bg-blue-100 text-blue-600' },
  { icon: Phone, label: 'Call Support', subtitle: '+91 98765 43210', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Mail, label: 'Email Support', subtitle: 'support@deepcitycare.com', color: 'bg-amber-100 text-amber-600' },
  { icon: BookOpen, label: 'Help Center', subtitle: 'Browse articles & guides', color: 'bg-violet-100 text-violet-600' },
  { icon: Monitor, label: 'Remote Assistance', subtitle: 'Allow our team to assist you', color: 'bg-sky-100 text-sky-600' },
]

const popularTopics = ['How to book an appointment', 'Insurance claim process', 'Billing & payment issues', 'Medical report not found', 'How to download invoice']

const messages = [
  { from: 'them', text: "Hi there! 👋 Welcome to DeepCity Care Hospital Support. How can I help you today?", time: '10:30 AM' },
  { from: 'me', text: 'I need help with my insurance claim.', time: '10:31 AM' },
  { from: 'them', text: 'Sure, I can help you with that. Could you please share your policy number or registered mobile number?', time: '10:31 AM' },
  { from: 'me', text: 'Sure, my policy number is POL-2024-1248.', time: '10:32 AM' },
]

export function GetSupportDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] gap-0 overflow-hidden p-0 sm:max-w-4xl">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-accent text-primary">
              <Headset className="size-5" />
            </span>
            <div>
              <p className="text-base font-semibold text-foreground">Get Support</p>
              <p className="text-xs text-muted-foreground">We're here to help you 24/7</p>
            </div>
          </div>
          <span className="mr-8 flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Online
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-[280px_1fr]">
          <div className="flex max-h-[60vh] flex-col gap-5 overflow-y-auto border-r border-border p-4">
            <div>
              <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Support Channels</p>
              <ul className="flex flex-col gap-1">
                {supportChannels.map((c) => (
                  <li key={c.label}>
                    <button
                      type="button"
                      className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors ${
                        c.active ? 'bg-accent' : 'hover:bg-accent'
                      }`}
                    >
                      <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${c.color}`}>
                        <c.icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">{c.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{c.subtitle}</span>
                      </span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Popular Topics</p>
              <ul className="flex flex-col gap-0.5">
                {popularTopics.map((t) => (
                  <li key={t}>
                    <button type="button" className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left hover:bg-accent">
                      <FileText className="size-4 shrink-0 text-muted-foreground" />
                      <span className="min-w-0 flex-1 truncate text-sm text-foreground">{t}</span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center gap-3 rounded-lg bg-secondary p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <UserRound className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Average response time</p>
                <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
                  <Clock3 className="size-3.5" /> Under 2 minutes
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-border p-4">
              <img src="https://i.pravatar.cc/100?img=47" alt="Sneha Sharma" className="size-10 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">Sneha Sharma</p>
                <p className="text-xs text-muted-foreground">Support Executive</p>
              </div>
              <div className="flex items-center gap-1">
                <button className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
                  <ThumbsUp className="size-4" />
                </button>
                <button className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
                  <ThumbsDown className="size-4" />
                </button>
                <button className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent">
                  <MoreVertical className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex max-h-[42vh] min-h-[240px] flex-1 flex-col gap-4 overflow-y-auto p-4">
              <div className="flex items-center justify-center">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">Today</span>
              </div>
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                  {m.from === 'them' && <img src="https://i.pravatar.cc/100?img=47" alt="" className="size-7 shrink-0 rounded-full object-cover" />}
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.from === 'me' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'}`}>
                    <p>{m.text}</p>
                    <p className={`mt-1 flex items-center gap-1 text-[11px] ${m.from === 'me' ? 'justify-end text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {m.time}
                      {m.from === 'me' && <Check className="size-3.5" />}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/100?img=47" alt="" className="size-7 shrink-0 rounded-full object-cover" />
                <div className="flex items-center gap-1 rounded-2xl bg-secondary px-4 py-3">
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2">
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
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5" /> We respect your privacy.{' '}
                <a href="#" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
