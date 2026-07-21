import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { SearchInput } from '@/components/shared/SearchInput'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const logs = [
  { time: '21 Jul 2026, 10:30 AM', user: 'Dr. Arjun Mehta', action: 'Updated patient record', module: 'Patients', ip: '192.168.1.24', status: 'Success' },
  { time: '21 Jul 2026, 09:45 AM', user: 'Rohan Verma', action: 'Booked new appointment', module: 'Appointments', ip: '192.168.1.31', status: 'Success' },
  { time: '20 Jul 2026, 06:12 PM', user: 'System', action: 'Automatic backup completed', module: 'System', ip: '—', status: 'Success' },
  { time: '20 Jul 2026, 03:20 PM', user: 'Priya Malhotra', action: 'Failed login attempt', module: 'Authentication', ip: '203.0.113.5', status: 'Failed' },
  { time: '20 Jul 2026, 11:05 AM', user: 'Dr. Neha Singh', action: 'Uploaded lab report', module: 'Lab Reports', ip: '192.168.1.19', status: 'Success' },
  { time: '19 Jul 2026, 04:40 PM', user: 'Admin', action: 'Changed system settings', module: 'Settings', ip: '192.168.1.2', status: 'Success' },
]

export function SystemLogsTab() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-foreground">System Logs</h3>
          <p className="text-sm text-muted-foreground">Audit trail of activity across the system.</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="size-4" /> Export Logs
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        <SearchInput placeholder="Search logs by user or action..." />
        <FilterSelect placeholder="Module" options={['All Modules', 'Patients', 'Appointments', 'System', 'Authentication', 'Settings']} />
        <FilterSelect placeholder="Status" options={['All Status', 'Success', 'Failed']} />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Module</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((l, i) => (
              <TableRow key={i}>
                <TableCell className="whitespace-nowrap text-muted-foreground">{l.time}</TableCell>
                <TableCell className="font-medium text-foreground">{l.user}</TableCell>
                <TableCell>{l.action}</TableCell>
                <TableCell>{l.module}</TableCell>
                <TableCell className="text-muted-foreground">{l.ip}</TableCell>
                <TableCell>
                  <StatusBadge status={l.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
