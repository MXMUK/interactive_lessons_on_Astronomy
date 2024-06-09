import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const textareaVariants = cva(
  'flex px-2 min-h-32 w-full rounded-lg items-center bg-transparent border-gray-800 focus:outline-0 justify-center text-primary-foreground transition-opacity',
  {
    variants: {
      variant: {
        form: 'border dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 rounded focus:bg-opacity-10',
      },
    },
  }
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(className, textareaVariants({variant, className}))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };

