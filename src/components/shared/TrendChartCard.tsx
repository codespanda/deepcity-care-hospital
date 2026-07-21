import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export type ChartSeries = {
  key: string
  label: string
  color: string
}

export function TrendChartCard({
  title,
  periodLabel = 'This Month',
  type = 'area',
  data,
  xKey,
  series,
  yFormatter,
  className,
  stretch = false,
}: {
  title: string
  periodLabel?: string
  type?: 'area' | 'line' | 'bar'
  data: Record<string, string | number>[]
  xKey: string
  series: ChartSeries[]
  yFormatter?: (v: number) => string
  className?: string
  stretch?: boolean
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 ${stretch ? 'flex flex-1 flex-col' : ''} ${className ?? ''}`}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <span className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
          {periodLabel}
        </span>
      </div>

      {series.length > 1 && (
        <div className="mb-2 flex items-center gap-4">
          {series.map((s) => (
            <span key={s.key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-0.5 w-4 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      )}

      <div className={stretch ? 'min-h-[220px] w-full flex-1' : 'h-[220px] w-full'}>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data} margin={{ left: -12, right: 8, top: 8 }}>
              <CartesianGrid vertical={false} stroke="var(--color-border)" />
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" tickFormatter={yFormatter} />
              <Tooltip
                cursor={{ fill: 'var(--color-accent)' }}
                contentStyle={{ borderRadius: 8, border: '1px solid var(--color-border)', fontSize: 12 }}
              />
              {series.map((s) => (
                <Bar key={s.key} dataKey={s.key} fill={s.color} radius={[4, 4, 0, 0]} />
              ))}
            </BarChart>
          ) : type === 'line' ? (
            <LineChart data={data} margin={{ left: -12, right: 8, top: 8 }}>
              <CartesianGrid vertical={false} stroke="var(--color-border)" />
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" tickFormatter={yFormatter} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid var(--color-border)', fontSize: 12 }} />
              {series.map((s) => (
                <Line
                  key={s.key}
                  type="monotone"
                  dataKey={s.key}
                  stroke={s.color}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: s.color, strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          ) : (
            <AreaChart data={data} margin={{ left: -12, right: 8, top: 8 }}>
              <defs>
                {series.map((s) => (
                  <linearGradient key={s.key} id={`area-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={s.color} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={s.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid vertical={false} stroke="var(--color-border)" />
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" tickFormatter={yFormatter} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid var(--color-border)', fontSize: 12 }} />
              {series.map((s) => (
                <Area
                  key={s.key}
                  type="monotone"
                  dataKey={s.key}
                  stroke={s.color}
                  strokeWidth={2.5}
                  fill={`url(#area-${s.key})`}
                  dot={{ r: 3, fill: s.color, strokeWidth: 0 }}
                />
              ))}
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
