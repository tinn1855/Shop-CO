import { cn } from '@/src/lib/utils';
import { PropsWithChildren } from 'react';

export function HeadingH3({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  return (
    <h2 className={cn('font-bold text-2xl lg:text-[40px]', className)}>
      {children}
    </h2>
  );
}
