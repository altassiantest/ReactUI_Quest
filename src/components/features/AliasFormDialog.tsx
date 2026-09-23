import { FormEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Alias, AliasFormValues } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface AliasFormDialogProps {
  open: boolean;
  initialValue?: Alias | null;
  onClose: () => void;
  onSubmit: (values: AliasFormValues, id?: string) => void;
}

const EMPTY: AliasFormValues = { last: '', first: '', middle: '', suffix: '' };

export function AliasFormDialog({ open, initialValue, onClose, onSubmit }: AliasFormDialogProps) {
  const [values, setValues] = useState<AliasFormValues>(EMPTY);

  useEffect(() => {
    if (open) {
      setValues(
        initialValue
          ? {
              last: initialValue.last,
              first: initialValue.first,
              middle: initialValue.middle,
              suffix: initialValue.suffix,
            }
          : EMPTY
      );
    }
  }, [open, initialValue]);

  if (!open) return null;

  const handleChange = (field: keyof AliasFormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values, initialValue?.id);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="alias-form-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="bg-white rounded-card shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between bg-brand-headerBg text-white px-4 py-2.5 rounded-t-card">
          <h2 id="alias-form-title" className="text-base font-semibold">
            {initialValue ? 'Edit Alias' : 'Add Alias'}
          </h2>
          <button
            type="button"
            aria-label="Close dialog"
            className="p-1 hover:bg-white/10 rounded"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="alias-last" className="text-sm font-bold text-brand-textPrimary">
                Last
              </label>
              <Input
                id="alias-last"
                value={values.last}
                onChange={handleChange('last')}
                required
              />
            </div>
            <div>
              <label htmlFor="alias-first" className="text-sm font-bold text-brand-textPrimary">
                First
              </label>
              <Input
                id="alias-first"
                value={values.first}
                onChange={handleChange('first')}
                required
              />
            </div>
            <div>
              <label htmlFor="alias-middle" className="text-sm font-bold text-brand-textPrimary">
                Middle
              </label>
              <Input
                id="alias-middle"
                value={values.middle}
                onChange={handleChange('middle')}
              />
            </div>
            <div>
              <label htmlFor="alias-suffix" className="text-sm font-bold text-brand-textPrimary">
                Suffix
              </label>
              <Input
                id="alias-suffix"
                value={values.suffix}
                onChange={handleChange('suffix')}
              />
            </div>
          </div>
          <div className="flex justify-center gap-3 pt-2 border-t border-brand-border">
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
