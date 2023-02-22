import s from './styles.module.scss';

interface Props {
  name: string;
}

export function CourseCard({ name }: Props) {
  return (
    <div className={s.course}>
      {name}
    </div>
  )
}