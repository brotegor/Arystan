import { Link } from 'react-router-dom';
import s from './styles.module.scss';

interface Props {
  source: string;
  title: string;
}

export function MainLink({ source, title }: Props) {
  return (
    <Link to={source} className={s.link}>
      {title}
    </Link>
  );
}
