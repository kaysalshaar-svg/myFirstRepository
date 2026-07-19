import FilterChip from '@/components/ui/FilterChip'

interface TherapistFiltersProps {
  filters:   string[]
  active:    string
  onChange:  (f: string) => void
}

export default function TherapistFilters({ filters, active, onChange }: TherapistFiltersProps) {
  return (
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
      {filters.map((f) => (
        <FilterChip
          key={f}
          label={f}
          active={active === f}
          onClick={() => onChange(f)}
        />
      ))}
    </div>
  )
}
