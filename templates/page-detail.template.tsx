// TEMPLATE — copy into src/pages/my-section/MyDetailPage.tsx and rename everything marked TODO.
//
// Shape: header (breadcrumb, title, status badge, action buttons) -> info card row ->
// tabs -> right column summary. Matches src/pages/patients/PatientProfile.tsx and
// src/pages/appointments/AppointmentDetails.tsx — copy whichever is closer to your data.

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ArrowLeft, Pencil, Boxes } from 'lucide-react' // TODO: swap icons
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'

// TODO: replace with a real lookup from src/data/myEntity.ts, e.g. getEntityById(id)
const mockEntity = {
  id: 'ENT-001',
  name: 'Example Record',
  status: 'Active',
}

// TODO: move into src/lib/formFields.ts
const editFields = [
  { name: 'name', label: 'Name', type: 'text' as const, span: 2 as const },
  { name: 'status', label: 'Status', type: 'select' as const, options: ['Active', 'Inactive'] },
]

const quickActions: QuickAction[] = [
  { icon: Boxes, label: 'Example Action', color: 'blue' },
]

const placeholderTabs = [
  ['history', 'History will appear here.'],
  ['documents', 'Documents will appear here.'],
] as const

export function MyDetailPage() {
  const { id } = useParams() // TODO: use this to look up the real record
  const entity = mockEntity
  const [editOpen, setEditOpen] = useState(false)

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>TODO Section</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">TODO Detail</span>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-foreground">{entity.name}</h1>
            <StatusBadge status={entity.status} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">ID: {entity.id} (route param: {id})</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="size-4" /> Back
            </Link>
          </Button>
          <Button size="sm" onClick={() => setEditOpen(true)}>
            <Pencil className="size-4" /> Edit
          </Button>
        </div>
      </div>

      <EntityFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit Record"
        description={`Update details for ${entity.name}.`}
        icon={Pencil}
        fields={editFields}
        submitLabel="Save Changes"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 flex-wrap justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {placeholderTabs.map(([value]) => (
                <TabsTrigger key={value} value={value} className="capitalize">
                  {value}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview">
              <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
                TODO: overview content (recent activity, related records, etc.)
              </div>
            </TabsContent>

            {placeholderTabs.map(([value, text]) => (
              <TabsContent key={value} value={value}>
                <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">{text}</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-base font-semibold text-foreground">Summary</h3>
            <dl className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-medium text-foreground">{entity.status}</dd>
              </div>
            </dl>
          </div>

          <QuickActionsGrid actions={quickActions} />
        </div>
      </div>
    </div>
  )
}
