import { CreditCard, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const invoiceHistory = [
  { date: '01 May 2024', desc: 'DeepCity Care Pro - Monthly', amount: '₹4,999', status: 'Paid' },
  { date: '01 Apr 2024', desc: 'DeepCity Care Pro - Monthly', amount: '₹4,999', status: 'Paid' },
  { date: '01 Mar 2024', desc: 'DeepCity Care Pro - Monthly', amount: '₹4,999', status: 'Paid' },
]

export function BillingSettingsTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">Current Plan</h3>
            <p className="text-sm text-muted-foreground">Manage your subscription plan.</p>
          </div>
          <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border p-4">
          <div>
            <p className="text-lg font-bold text-foreground">DeepCity Care Pro</p>
            <p className="text-sm text-muted-foreground">₹4,999 / month · Renews on 01 Jun 2024</p>
          </div>
          <Button variant="outline" size="sm">
            Upgrade Plan
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Payment Method</h3>
        <div className="flex items-center justify-between rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
              <CreditCard className="size-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">Visa ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 08/27</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Update
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Billing History</h3>
        <ul className="flex flex-col gap-1">
          {invoiceHistory.map((inv) => (
            <li key={inv.date} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm hover:bg-accent">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{inv.desc}</p>
                <p className="text-xs text-muted-foreground">{inv.date}</p>
              </div>
              <span className="font-medium text-foreground">{inv.amount}</span>
              <Badge className="bg-emerald-100 text-emerald-700">{inv.status}</Badge>
              <button className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary">
                <Download className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
