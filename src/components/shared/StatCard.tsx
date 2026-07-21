import type { LucideIcon } from 'lucide-react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'

const colorMap = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  purple: 'bg-violet-100 text-violet-600',
  orange: 'bg-amber-100 text-amber-600',
  red: 'bg-rose-100 text-rose-600',
  teal: 'bg-teal-100 text-teal-600',
} as const

export type StatCardColor = keyof typeof colorMap

export function StatCard({
  icon: Icon,
  color = 'blue',
  label,
  value,
  delta,
  deltaDirection = 'up',
  deltaLabel = 'from last month',
  note,
  sparkline,
}: {
  icon: LucideIcon
  color?: StatCardColor
  label: string
  value: string
  delta?: string
  deltaDirection?: 'up' | 'down'
  deltaLabel?: string
  note?: string
  sparkline?: number[]
}) {
  const isUp = deltaDirection === 'up'
  return (
    <div className="flex-1 min-w-[190px] rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl', colorMap[color])}>
          <Icon className="size-5" />
        </div>
        {sparkline && sparkline.length > 1 && (
          <div className="h-10 w-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparkline.map((v, i) => ({ i, v }))}>
                <defs>
                  <linearGradient id={`spark-${label.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                  fill={`url(#spark-${label.replace(/\s/g, '')})`}
                  dot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-2xl font-bold text-foreground">{value}</p>
      {delta && (
        <p className={cn('mt-1.5 flex items-center gap-1 text-xs font-medium', isUp ? 'text-emerald-600' : 'text-rose-600')}>
          {isUp ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
          {delta}
          <span className="font-normal text-muted-foreground">{deltaLabel}</span>
        </p>
      )}
      {!delta && note && <p className="mt-1.5 text-xs text-muted-foreground">{note}</p>}
    </div>
  )
}
