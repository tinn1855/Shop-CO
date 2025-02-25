import { cn } from '@/src/lib/utils';
import { PropsWithChildren } from 'react';

export function Description({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  return (
    <p className={cn('text-gray-600 text-xs lg:text-base', className)}>
      {children}
    </p>
  );
}
