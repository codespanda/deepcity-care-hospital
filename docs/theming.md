# Theming

## How it works

Colors are defined as CSS custom properties in `src/index.css`, split into a `:root`
(light) block and a `.dark` block, using [shadcn/ui](https://ui.shadcn.com/)'s token names
(`--background`, `--card`, `--primary`, `--border`, ...). Tailwind v4 maps these to utility
classes via the `@theme inline` block at the top of the file, so `bg-card`,
`text-foreground`, `border-border`, `bg-primary`, etc. automatically pick the right value
for whichever theme is active.

**Always use the semantic token classes** (`bg-card`, `text-muted-foreground`, ...) instead
of raw Tailwind colors (`bg-white`, `text-gray-600`) for anything structural — that's what
makes dark mode work for free. Status colors (green/amber/red/blue/violet pills in
`StatusBadge`, icon badge tints in `StatCard`) are an intentional exception: they use fixed
Tailwind palette classes (`bg-emerald-100 text-emerald-700`, etc.) because those need to
stay legible and consistent regardless of theme.

## Dark mode

`src/lib/theme.tsx` exports a `ThemeProvider` (wraps the whole app in `main.tsx`) and a
`useTheme()` hook:

```ts
const { theme, toggleTheme } = useTheme() // theme: 'light' | 'dark'
```

Toggling adds/removes the `dark` class on `<html>`, which is what flips every `@theme`
token over to the `.dark` block. The choice is persisted to `localStorage` under
`deepcity-theme` and falls back to the OS `prefers-color-scheme` on first load. The
Settings → General Settings → "Enable Dark Mode" switch is the only UI entry point right
now — wire `useTheme()` into a topbar button too if you want a faster toggle.

## Changing the brand color

The primary blue is `--primary` (and its dark-mode variant) in `src/index.css`, expressed
as `oklch(...)`. To rebrand:

1. Pick a new hue in [oklch.com](https://oklch.com/) — keep the lightness/chroma similar to
   the existing value so contrast against `--primary-foreground` (white) stays readable.
2. Update `--primary`, `--ring`, `--sidebar-primary`, `--sidebar-ring` in both the `:root`
   and `.dark` blocks (they should usually match each other; the `.dark` one is often a
   touch lighter for contrast against a dark background).
3. `--chart-1` doubles as the sparkline color in `StatCard` — update it too if you want
   sparklines to match the new brand color.

## Settings → General Settings → "Primary Color" swatches

The color picker on that tab is currently cosmetic (it updates local component state but
doesn't repaint the app) — it's a placeholder for a future per-user accent-color feature,
not a bug. If you want to make it real, the cleanest approach is to extend `ThemeProvider`
with a second CSS variable (e.g. `--accent-color`) that the swatch picker writes to.
