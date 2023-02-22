import s from './styles.module.scss';

interface Props {
  level: number;
  recieved: number;
  total: number;
}

export function LevelBar({ level, recieved, total }: Props) {
  return (
      <div className={s.levelBar}>
          <div className={s.levelValue}>Уровень: {level}</div>
          <div className={s.total}>
              <div style={{ width: `${recieved / total * 100}%` }} className={s.recieved}></div>
          </div>
          <div className={s.levelPoints}>
              {recieved}/{total}
          </div>
      </div>
  );
}