import { cn } from '@/lib/utils'

const toneMap = {
  green: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  red: 'bg-rose-100 text-rose-700',
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  gray: 'bg-slate-100 text-slate-600',
} as const

export type BadgeTone = keyof typeof toneMap

const statusToneRules: Array<[RegExp, BadgeTone]> = [
  [/^(active|available|completed|paid|in stock|confirmed|normal)$/i, 'green'],
  [/^(pending|on leave|low stock|busy|waiting|partial|scheduled)$/i, 'amber'],
  [/^(inactive|out of stock|overdue|cancelled|canceled|critical|occupied|unpaid|high|no show)$/i, 'red'],
  [/^(in progress|in consultation|consultation|checked in)$/i, 'blue'],
  [/^(under cleaning|maintenance|re-test|review|follow-up|follow up)$/i, 'violet'],
]

export function statusTone(status: string): BadgeTone {
  const match = statusToneRules.find(([re]) => re.test(status.trim()))
  return match ? match[1] : 'gray'
}

export function StatusBadge({ status, tone }: { status: string; tone?: BadgeTone }) {
  const resolved = tone ?? statusTone(status)
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap',
        toneMap[resolved],
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          resolved === 'green' && 'bg-emerald-500',
          resolved === 'amber' && 'bg-amber-500',
          resolved === 'red' && 'bg-rose-500',
          resolved === 'blue' && 'bg-blue-500',
          resolved === 'violet' && 'bg-violet-500',
          resolved === 'gray' && 'bg-slate-400',
        )}
      />
      {status}
    </span>
  )
}
