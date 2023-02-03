import s from './styles.module.scss';
import { CSSProperties } from 'react';

interface Props {
  level: string;
  color: CSSProperties["color"];
}

export function KnolegdeLevel({ level, color }: Props) {
  return (
      <p className={s.wrapper}>
        Уровень знаний: <span style={{ background: color }} className={s.level}>{level}</span>
      </p>
  );
}

// example:
// <KnolegdeLevel level={'Базовый'} color="#2dce70" />