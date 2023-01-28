import { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  className?: string,
}

export function Container({ children, className }: Props) {
  return (
    <div className={className ? `container ${className}` : 'container'}>
      {children}
    </div>
  );
}
