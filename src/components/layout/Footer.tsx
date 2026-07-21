export function Footer() {
  return (
    <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border py-5 text-sm text-muted-foreground sm:flex-row">
      <p>© 2024 DeepCity Care Hospital. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <a href="#" className="hover:text-foreground">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-foreground">
          Terms of Service
        </a>
        <a href="#" className="hover:text-foreground">
          Support
        </a>
      </div>
    </footer>
  )
}
