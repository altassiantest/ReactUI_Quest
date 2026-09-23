import { Button } from '../ui/Button';

interface FooterActionsProps {
  onSave: () => void;
  onCancel: () => void;
  saving?: boolean;
}

export function FooterActions({ onSave, onCancel, saving }: FooterActionsProps) {
  return (
    <>
      <Button variant="primary" onClick={onSave} disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </Button>
      <Button variant="secondary" onClick={onCancel} disabled={saving}>
        Cancel
      </Button>
    </>
  );
}
