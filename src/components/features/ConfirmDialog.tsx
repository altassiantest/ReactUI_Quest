import { Button } from '../ui/Button';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({ open, title, message, onConfirm, onCancel }: ConfirmDialogProps) {
  if (!open) return null;
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="bg-white rounded-card shadow-lg w-full max-w-sm">
        <div className="bg-brand-headerBg text-white px-4 py-2.5 rounded-t-card">
          <h2 id="confirm-title" className="text-base font-semibold">
            {title}
          </h2>
        </div>
        <div className="p-5 text-sm text-brand-textPrimary">{message}</div>
        <div className="flex justify-center gap-3 px-4 py-4 border-t border-brand-border">
          <Button variant="primary" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
