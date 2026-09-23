import { Input } from './Input';

interface ReadOnlyFieldProps {
  id: string;
  label: string;
  value: string;
}

export function ReadOnlyField({ id, label, value }: ReadOnlyFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-bold text-brand-textPrimary">
        {label}
      </label>
      <Input id={id} value={value} readOnly />
    </div>
  );
}
