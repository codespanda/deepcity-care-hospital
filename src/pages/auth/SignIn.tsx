import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      footer={
        <>
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-primary hover:underline">
            Sign Up
          </Link>
        </>
      }
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <Label htmlFor="email" className="mb-1.5">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="email" type="email" placeholder="you@deepcitycare.com" className="pl-9" defaultValue="arjun.mehta@deepcitycare.com" />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="mb-1.5">
            Password
          </Label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="px-9" />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <Checkbox /> Remember me
          </label>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="mt-1 w-full">
          <LogIn className="size-4" /> Sign In
        </Button>
      </form>
    </AuthLayout>
  )
}
