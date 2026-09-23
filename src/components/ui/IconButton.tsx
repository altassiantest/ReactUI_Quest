import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type IconColor = 'primary' | 'danger';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  color?: IconColor;
  label: string;
}

const colorClasses: Record<IconColor, string> = {
  primary: 'bg-brand-primary hover:bg-[#6ba565] text-white',
  danger: 'bg-brand-danger hover:bg-[#d69330] text-white',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, color = 'primary', label, className, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        aria-label={label}
        title={label}
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand-primary',
          'disabled:opacity-60 disabled:cursor-not-allowed',
          colorClasses[color],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
