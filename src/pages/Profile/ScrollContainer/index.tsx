import { CSSProperties, ReactNode } from 'react';
import s from './styles.module.scss';

interface Props {
  heading: string;
  height: CSSProperties['height'];
  children: ReactNode;
  className?: string;
}

export function ScrollContainer({ heading, height, children, className }: Props) {
  const finalClassName = className ? `${s.wrapper} ${className}` : s.wrapper;
  
  return (
      <div className={finalClassName}>
          <h2 className={s.heading}>{heading}</h2>
          <div className={s.scrollContainer} style={{ height }}>
              {children}
          </div>
      </div>
  );
}
