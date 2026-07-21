// TEMPLATE — a minimal example of wiring a new "Add/Create" popup to a page header
// button using the shared EntityFormDialog. This is the pattern used by every
// "+ Add New X" button across the app (see src/pages/Doctors.tsx for a full example).

import { useState } from 'react'
import { Plus } from 'lucide-react' // TODO: swap icon
import { EntityFormDialog, type FormField } from '@/components/shared/EntityFormDialog'
import { Button } from '@/components/ui/button'

// Step 1 — define the field set. Move this into src/lib/formFields.ts alongside the
// other exports (appointmentFields, doctorFields, ...) once it's finalized so it can
// be reused from more than one page if needed.
const myFormFields: FormField[] = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'e.g. Jane Doe', span: 2 },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '98765 43210' },
  { name: 'department', label: 'Department', type: 'select', options: ['Cardiology', 'Orthopedics', 'Neurology'] },
  { name: 'joinDate', label: 'Join Date', type: 'date' },
  { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Optional notes...', span: 2 },
]

export function MyPageWithADialog() {
  // Step 2 — one boolean per dialog. Name it after what it opens, e.g. addStaffOpen.
  const [addOpen, setAddOpen] = useState(false)

  return (
    <div>
      {/* Step 3 — wire the trigger button */}
      <Button onClick={() => setAddOpen(true)}>
        <Plus className="size-4" /> Add New
      </Button>

      {/* Step 4 — render the dialog anywhere in the tree; it's controlled by addOpen */}
      <EntityFormDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        title="Add New"
        description="One sentence describing what this form creates."
        icon={Plus}
        fields={myFormFields}
        submitLabel="Add"
      />
    </div>
  )
}

// Field types available: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time' | 'file'
// | 'select' (needs `options: string[]`) | 'textarea'. Every field defaults to half-width
// (`span: 1`) inside the 2-column form grid — pass `span: 2` for full-width fields like
// notes/reason/textarea. The dialog is presentational only: submitting just closes it
// (see docs/components.md#entityformdialog for why, and how to wire real persistence).
