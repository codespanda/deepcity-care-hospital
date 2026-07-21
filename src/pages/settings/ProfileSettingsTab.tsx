import { Camera, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FilterSelect } from '@/components/shared/FilterSelect'

export function ProfileSettingsTab() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-foreground">Profile Settings</h3>
        <p className="text-sm text-muted-foreground">Update your personal information and photo.</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <img src="https://i.pravatar.cc/120?img=13" alt="Dr. Arjun Mehta" className="size-20 rounded-full object-cover" />
        <div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Camera className="size-4" /> Change Photo
            </Button>
            <Button variant="outline" size="sm" className="text-rose-600 hover:text-rose-600">
              <Trash2 className="size-4" /> Remove
            </Button>
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <div>
          <Label className="mb-1.5">Full Name</Label>
          <Input defaultValue="Dr. Arjun Mehta" />
        </div>
        <div>
          <Label className="mb-1.5">Role</Label>
          <Input defaultValue="Admin · Cardiologist" disabled />
        </div>
        <div>
          <Label className="mb-1.5">Email Address</Label>
          <Input type="email" defaultValue="arjun.mehta@deepcitycare.com" />
        </div>
        <div>
          <Label className="mb-1.5">Phone Number</Label>
          <Input type="tel" defaultValue="XXXXXXXXXX" />
        </div>
        <div>
          <Label className="mb-1.5">Department</Label>
          <FilterSelect placeholder="Department" defaultValue="Cardiology" options={['Cardiology', 'Orthopedics', 'Neurology', 'General Medicine']} />
        </div>
        <div>
          <Label className="mb-1.5">Employee ID</Label>
          <Input defaultValue="DM1024" disabled />
        </div>
        <div className="sm:col-span-2">
          <Label className="mb-1.5">Bio</Label>
          <Textarea rows={3} defaultValue="Senior Cardiologist with 12 years of experience in interventional cardiology and heart failure management." />
        </div>
      </div>
    </div>
  )
}
