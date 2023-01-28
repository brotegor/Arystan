import s from './styles.module.scss';

export function Cards() {
  return (
    <div className={s.cards}>
      <Card heading='Цель' description='Обучить' />
      <Card heading='Важность' description='Очень важно' />
      <Card heading='Уникальность' description='Самый уникальный' />
    </div>
  );
}

interface CardProps {
  heading: string,
  description: string,
}

function Card({ heading, description }: CardProps) {
  return (
    <div className={s.card}>
      <h3 className={s.heading}>{heading}</h3>
      <div className={s.hoverCard}>
          <p className={s.description}>{description}</p>
      </div>
  </div>   
  );
}