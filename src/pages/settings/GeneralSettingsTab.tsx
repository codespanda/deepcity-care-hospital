import { useState } from 'react'
import { Building2, Check, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { Moon, Clock3, Database, ShieldOff, ScrollText as AuditIcon, ShieldCheck } from 'lucide-react'
import { useTheme } from '@/lib/theme'

const colorSwatches = ['#3b82f6', '#8b5cf6', '#22c55e', '#06b6d4', '#f59e0b', '#f43f5e', '#94a3b8']

const preferences = [
  { icon: Moon, label: 'Enable Dark Mode', subtitle: 'Switch between light and dark mode' },
  { icon: Clock3, label: 'Auto Logout', subtitle: 'Automatically logout after inactivity', select: '30 min' },
  { icon: Database, label: 'Enable Data Export', subtitle: 'Allow export of reports and data', defaultChecked: true },
  { icon: ShieldOff, label: 'Maintenance Mode', subtitle: 'Put system in maintenance mode', defaultChecked: false },
  { icon: AuditIcon, label: 'Enable Audit Logs', subtitle: 'Track user activities and changes', defaultChecked: true },
  { icon: ShieldCheck, label: 'Two Factor Authentication', subtitle: 'Add an extra layer of security', defaultChecked: true },
]

export function GeneralSettingsTab() {
  const [selectedColor, setSelectedColor] = useState(colorSwatches[0])
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">General Settings</h3>
            <p className="text-sm text-muted-foreground">Update your general preferences and system settings.</p>
          </div>
          <Button variant="outline" size="sm">
            <RotateCcw className="size-4" /> Reset to Default
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5">Hospital Name</Label>
            <Input defaultValue="DeepCity Care Hospital" />
          </div>
          <div>
            <Label className="mb-1.5">Hospital Logo</Label>
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">DeepCity Care Hospital</p>
              </div>
              <Button variant="outline" size="sm">
                Change Logo
              </Button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">PNG, JPG or SVG. Max size 2MB.</p>
          </div>

          <div>
            <Label className="mb-1.5">Time Zone</Label>
            <FilterSelect placeholder="Time Zone" options={['(GMT +05:30) Asia/Kolkata', '(GMT +00:00) UTC', '(GMT -05:00) EST']} />
          </div>
          <div>
            <Label className="mb-1.5">Favicon</Label>
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Building2 className="size-5" />
              </div>
              <p className="min-w-0 flex-1 text-xs text-muted-foreground">ICO, PNG. Max size 512KB.</p>
              <Button variant="outline" size="sm">
                Change Favicon
              </Button>
            </div>
          </div>

          <div>
            <Label className="mb-1.5">Date Format</Label>
            <FilterSelect placeholder="Date Format" options={['DD MMM YYYY (31 May 2024)', 'MM/DD/YYYY', 'YYYY-MM-DD']} />
          </div>
          <div>
            <Label className="mb-1.5">Primary Color</Label>
            <div className="flex items-center gap-2.5">
              {colorSwatches.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  className="flex size-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: c }}
                >
                  {selectedColor === c && <Check className="size-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="mb-2">Time Format</Label>
            <RadioGroup defaultValue="12" className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <RadioGroupItem value="12" /> 12 Hours (02:30 PM)
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground">
                <RadioGroupItem value="24" /> 24 Hours (14:30)
              </label>
            </RadioGroup>
          </div>
          <div>
            <Label className="mb-1.5">Default Dashboard</Label>
            <FilterSelect placeholder="Default Dashboard" options={['Dashboard Overview', 'Appointments', 'Patients']} />
          </div>

          <div>
            <Label className="mb-1.5">Language</Label>
            <FilterSelect placeholder="Language" options={['English', 'Hindi', 'Punjabi']} />
          </div>
          <div>
            <Label className="mb-1.5">Currency</Label>
            <FilterSelect placeholder="Currency" options={['INR - Indian Rupee (₹)', 'USD - US Dollar ($)']} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-base font-semibold text-foreground">Additional Preferences</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {preferences.map((p) => (
            <div key={p.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                  <p.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{p.label}</p>
                  <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                </div>
              </div>
              {p.select ? (
                <FilterSelect placeholder={p.select} defaultValue={p.select} options={['15 min', '30 min', '1 hour']} />
              ) : p.label === 'Enable Dark Mode' ? (
                <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
              ) : (
                <Switch defaultChecked={p.defaultChecked} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
