import { cn } from '@usepulse/ui/lib/utils';
import { Spinner } from './spinner';

interface FullLoadingProps {
  message?: string;
  className?: string;
  spinnerSize?: 'sm' | 'md' | 'lg';
}

export function FullLoading({ 
  message = 'Loading...', 
  className,
  spinnerSize = 'lg' 
}: FullLoadingProps) {
  return (
    <div 
      className={cn(
        'fixed inset-0 z-50',
        'flex flex-col items-center justify-center',
        'bg-background/80 backdrop-blur-sm',
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <Spinner size={spinnerSize} />
        {message && (
          <p className="text-sm text-muted-foreground animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}