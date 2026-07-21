import { UserPlus, Pencil, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const roleCounts = [
  { role: 'Admin', count: 3, color: 'bg-blue-100 text-blue-600' },
  { role: 'Doctor', count: 28, color: 'bg-emerald-100 text-emerald-600' },
  { role: 'Receptionist', count: 6, color: 'bg-violet-100 text-violet-600' },
  { role: 'Accountant', count: 4, color: 'bg-amber-100 text-amber-600' },
]

const users = [
  { name: 'Dr. Arjun Mehta', email: 'arjun.mehta@deepcitycare.com', role: 'Admin', avatar: 'https://i.pravatar.cc/80?img=13', status: 'Active', lastActive: 'Active now' },
  { name: 'Rohan Verma', email: 'rohan.verma@deepcitycare.com', role: 'Receptionist', avatar: 'https://i.pravatar.cc/80?img=51', status: 'Active', lastActive: '10 min ago' },
  { name: 'Priya Malhotra', email: 'priya.malhotra@deepcitycare.com', role: 'Accountant', avatar: 'https://i.pravatar.cc/80?img=44', status: 'Active', lastActive: '2 hours ago' },
  { name: 'Dr. Neha Singh', email: 'neha.singh@deepcitycare.com', role: 'Doctor', avatar: 'https://i.pravatar.cc/80?img=32', status: 'Inactive', lastActive: '3 days ago' },
]

export function UsersRolesTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {roleCounts.map((r) => (
            <div key={r.role} className="rounded-lg border border-border p-3 text-center">
              <p className={`mx-auto mb-1 flex size-8 items-center justify-center rounded-full text-sm font-bold ${r.color}`}>{r.count}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground">Users</h3>
          <Button size="sm">
            <UserPlus className="size-4" /> Add User
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.email}>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <img src={u.avatar} alt={u.name} className="size-8 rounded-full object-cover" />
                      <div>
                        <p className="font-medium text-foreground">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell>
                    <StatusBadge status={u.status} />
                  </TableCell>
                  <TableCell>{u.lastActive}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-1">
                      <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                        <Pencil className="size-4" />
                      </button>
                      <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                        <MoreVertical className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
