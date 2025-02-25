import { cn } from '@/src/lib/utils';
import { PropsWithChildren } from 'react';

export function Heading({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  return (
    <h2
      className={cn(
        'text-center text-3xl lg:text-5xl font-[IntegralCF-Bold]',
        className
      )}
    >
      {children}
    </h2>
  );
}
