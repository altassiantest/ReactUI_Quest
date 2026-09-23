import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionPanelProps {
  title: string;
  headerActions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SectionPanel({ title, headerActions, children, className }: SectionPanelProps) {
  return (
    <section
      className={cn(
        'border border-brand-border rounded bg-brand-sectionBg',
        className
      )}
    >
      <header className="flex items-center justify-between px-4 py-2">
        <h2 className="text-sm font-semibold text-brand-textPrimary">{title}</h2>
        {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
      </header>
      <div className="px-4 pb-4">{children}</div>
    </section>
  );
}
