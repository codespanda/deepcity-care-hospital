import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function FilterSelect({
  placeholder,
  options,
  defaultValue,
}: {
  placeholder: string
  options: string[]
  defaultValue?: string
}) {
  return (
    <Select defaultValue={defaultValue ?? options[0]}>
      <SelectTrigger className="h-9 w-full min-w-[150px] sm:w-auto">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
