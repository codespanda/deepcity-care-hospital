import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time' | 'file' | 'select' | 'textarea'
  placeholder?: string
  options?: string[]
  span?: 1 | 2
}

export function EntityFormDialog({
  open,
  onOpenChange,
  title,
  description,
  fields,
  submitLabel = 'Save',
  icon: Icon,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  fields: FormField[]
  submitLabel?: string
  icon?: LucideIcon
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {Icon && (
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" />
              </span>
            )}
            <div>
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </div>
          </div>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onOpenChange(false)
          }}
          className="grid grid-cols-2 gap-4 pt-1"
        >
          {fields.map((f) => (
            <div key={f.name} className={f.span === 2 ? 'col-span-2' : 'col-span-2 sm:col-span-1'}>
              <Label htmlFor={f.name} className="mb-1.5">
                {f.label}
              </Label>
              {f.type === 'select' ? (
                <Select>
                  <SelectTrigger id={f.name} className="w-full">
                    <SelectValue placeholder={f.placeholder ?? `Select ${f.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {(f.options ?? []).map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : f.type === 'textarea' ? (
                <Textarea id={f.name} placeholder={f.placeholder} rows={3} />
              ) : (
                <Input id={f.name} type={f.type} placeholder={f.placeholder} />
              )}
            </div>
          ))}

          <DialogFooter className="col-span-2 mt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{submitLabel}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
