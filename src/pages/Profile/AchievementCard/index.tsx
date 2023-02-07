import s from './styles.module.scss';

interface Props {
  name: string;
}

export function AchievementCard({ name }: Props) {
  return (
    <div className={s.achievement}>
      {name}
    </div>
  )
}