import type { ReactNode } from 'react'

export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-3">
      {children}
    </div>
  )
}
