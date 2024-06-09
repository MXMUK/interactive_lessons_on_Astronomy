import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  'flex px-2 h-10 w-full rounded-lg items-center bg-transparent border-gray-800 focus:outline-0 justify-center text-primary-foreground transition-all',
  {
    variants: {
      variant: {
        form: 'border dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 rounded focus:bg-opacity-10',
        comment: 'p-0 h-6'
      },
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(className, inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };

