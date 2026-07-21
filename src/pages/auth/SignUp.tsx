import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Phone, Lock, Eye, EyeOff, UserPlus } from 'lucide-react'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Get started with DeepCity Care Hospital"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-primary hover:underline">
            Sign In
          </Link>
        </>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <Label htmlFor="name" className="mb-1.5">
            Full Name
          </Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="name" placeholder="Dr. Arjun Mehta" className="pl-9" />
          </div>
        </div>

        <div>
          <Label htmlFor="signup-email" className="mb-1.5">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-email" type="email" placeholder="you@deepcitycare.com" className="pl-9" />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="mb-1.5">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="phone" type="tel" placeholder="98765 43210" className="pl-9" />
          </div>
        </div>

        <div>
          <Label htmlFor="signup-password" className="mb-1.5">
            Password
          </Label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" className="px-9" />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <Checkbox className="mt-0.5" />
          <span>
            I agree to the{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        <Button type="submit" className="mt-1 w-full">
          <UserPlus className="size-4" /> Create Account
        </Button>
      </form>
    </AuthLayout>
  )
}
