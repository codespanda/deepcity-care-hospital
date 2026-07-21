import { Menu, Search, MessageSquare, Bell, CalendarDays, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function IconButton({
  icon: Icon,
  badge,
}: {
  icon: typeof Bell
  badge?: number
}) {
  return (
    <button
      type="button"
      className="relative flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Icon className="size-5" />
      {badge !== undefined && badge > 0 && (
        <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          {badge}
        </span>
      )}
    </button>
  )
}

export function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6">
      <button
        type="button"
        onClick={onToggleSidebar}
        className="flex size-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <Menu className="size-5" />
      </button>

      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search patients, appointments, doctors..."
          className="h-10 rounded-lg bg-secondary/60 pl-9 pr-14"
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <IconButton icon={MessageSquare} badge={3} />
        <IconButton icon={Bell} badge={6} />
        <IconButton icon={CalendarDays} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-1 flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 hover:bg-accent">
              <Avatar className="size-9">
                <AvatarImage src="https://i.pravatar.cc/80?img=13" alt="Dr. Arjun Mehta" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-sm font-semibold text-foreground">Dr. Arjun Mehta</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
