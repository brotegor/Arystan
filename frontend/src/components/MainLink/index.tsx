import { Link } from 'react-router-dom';
import s from './styles.module.scss';

interface Props {
  source: string;
  title: string;
  className?: string;
}

export function MainLink({ source, title, className }: Props) {
  return (
    <Link to={source} className={className ? `${s.link} ${className}` : s.link}>
      {title}
    </Link>
  );
}
