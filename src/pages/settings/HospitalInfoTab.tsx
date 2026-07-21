import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FilterSelect } from '@/components/shared/FilterSelect'

export function HospitalInfoTab() {
  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-foreground">Hospital Details</h3>
          <p className="text-sm text-muted-foreground">Basic information about your hospital.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">Hospital Name</Label>
            <Input defaultValue="DeepCity Care Hospital" />
          </div>
          <div>
            <Label className="mb-1.5">Registration Number</Label>
            <Input defaultValue="HR/2012/00842" />
          </div>
          <div>
            <Label className="mb-1.5">Hospital Type</Label>
            <FilterSelect placeholder="Type" defaultValue="Multi-Specialty" options={['Multi-Specialty', 'General', 'Clinic', 'Specialty Center']} />
          </div>
          <div>
            <Label className="mb-1.5">Established Year</Label>
            <Input defaultValue="2012" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Address</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label className="mb-1.5">Street Address</Label>
            <Input defaultValue="Plot 42, Sector 34-A" />
          </div>
          <div>
            <Label className="mb-1.5">City</Label>
            <Input defaultValue="Mohali" />
          </div>
          <div>
            <Label className="mb-1.5">State</Label>
            <Input defaultValue="Punjab" />
          </div>
          <div>
            <Label className="mb-1.5">PIN Code</Label>
            <Input defaultValue="160034" />
          </div>
          <div>
            <Label className="mb-1.5">Country</Label>
            <Input defaultValue="India" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Contact & Hours</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">Phone Number</Label>
            <Input defaultValue="+91 XXXXXXXXXX" />
          </div>
          <div>
            <Label className="mb-1.5">Emergency Number</Label>
            <Input defaultValue="+91 XXXXXXXXXX" />
          </div>
          <div>
            <Label className="mb-1.5">Email</Label>
            <Input type="email" defaultValue="info@deepcitycare.com" />
          </div>
          <div>
            <Label className="mb-1.5">Website</Label>
            <Input defaultValue="www.deepcitycare.com" />
          </div>
          <div>
            <Label className="mb-1.5">OPD Hours</Label>
            <Input defaultValue="Mon - Sat, 9:00 AM - 8:00 PM" />
          </div>
          <div>
            <Label className="mb-1.5">Emergency Hours</Label>
            <Input defaultValue="24 x 7" />
          </div>
        </div>
      </div>
    </>
  )
}
