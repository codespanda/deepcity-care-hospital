import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export type DonutDatum = {
  name: string
  value: number
  color: string
  countLabel?: string
}

export function DonutCard({
  title,
  viewAllHref,
  data,
  centerValue,
  centerLabel,
  periodLabel,
}: {
  title: string
  viewAllHref?: string
  data: DonutDatum[]
  centerValue: string
  centerLabel: string
  periodLabel?: string
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {viewAllHref ? (
          <a href={viewAllHref} className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        ) : periodLabel ? (
          <span className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
            {periodLabel}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="relative size-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="70%"
                outerRadius="100%"
                paddingAngle={data.length > 1 ? 2 : 0}
                stroke="none"
                isAnimationActive={false}
              >
                {data.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{centerValue}</span>
            <span className="text-xs text-muted-foreground">{centerLabel}</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2.5">
          {data.map((d) => (
            <div key={d.name} className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: d.color }} />
                {d.name}
              </span>
              <span className="font-medium text-foreground">
                {total ? `${Math.round((d.value / total) * 100)}%` : '0%'}
                {d.countLabel && <span className="ml-1 text-muted-foreground">({d.countLabel})</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
