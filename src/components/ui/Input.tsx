import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly, ...props }, ref) => {
    return (
      <input
        ref={ref}
        readOnly={readOnly}
        aria-readonly={readOnly ? 'true' : undefined}
        className={cn(
          'w-full px-3 py-2 text-sm rounded border border-brand-border',
          'focus:outline-none focus:ring-2 focus:ring-brand-primary/40',
          readOnly ? 'bg-brand-readOnly cursor-default' : 'bg-white',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
