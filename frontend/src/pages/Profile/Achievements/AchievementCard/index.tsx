import s from './styles.module.scss';

interface Props {
  name: string;
  points: string;
}

export function AchievementCard({ name, points }: Props) {
  return (
    <div className={s.achievement}>
      <div>{name}</div>
      <div>{points}</div>
    </div>
  )
}