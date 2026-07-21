import { DatabaseBackup, Download, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { Label } from '@/components/ui/label'

const backupHistory = [
  { date: '21 Jul 2026, 02:30 AM', size: '4.2 GB', status: 'Completed' },
  { date: '20 Jul 2026, 02:30 AM', size: '4.1 GB', status: 'Completed' },
  { date: '19 Jul 2026, 02:30 AM', size: '4.1 GB', status: 'Completed' },
  { date: '18 Jul 2026, 02:30 AM', size: '4.0 GB', status: 'Failed' },
]

export function BackupRestoreTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">Automatic Backups</h3>
            <p className="text-sm text-muted-foreground">Keep your data safe with scheduled backups.</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">Backup Frequency</Label>
            <FilterSelect placeholder="Frequency" defaultValue="Daily" options={['Daily', 'Weekly', 'Monthly']} />
          </div>
          <div>
            <Label className="mb-1.5">Backup Time</Label>
            <FilterSelect placeholder="Time" defaultValue="02:30 AM" options={['12:00 AM', '02:30 AM', '04:00 AM']} />
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <Button size="sm">
            <DatabaseBackup className="size-4" /> Backup Now
          </Button>
          <Button variant="outline" size="sm">
            <RotateCcw className="size-4" /> Restore from Backup
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Backup History</h3>
        <ul className="flex flex-col gap-1">
          {backupHistory.map((b) => (
            <li key={b.date} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm hover:bg-accent">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{b.date}</p>
                <p className="text-xs text-muted-foreground">{b.size}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${b.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {b.status}
              </span>
              <button className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary disabled:opacity-40" disabled={b.status !== 'Completed'}>
                <Download className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
