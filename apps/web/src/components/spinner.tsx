import { cn } from '@usepulse/ui/lib/utils';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ className, size = 'md', ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      className={cn('animate-spin', className)}
      {...props}
    >
      <div
        className={cn(
          'rounded-full border-background/20',
          'border-t-foreground',
          {
            'h-4 w-4 border-2': size === 'sm',
            'h-6 w-6 border-2': size === 'md',
            'h-8 w-8 border-[3px]': size === 'lg',
          }
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
