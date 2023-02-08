import { Container } from '../../../components/Container';
import s from './styles.module.scss';
import book from '../../../images/book.svg';
import dialog from '../../../images/dialog.svg';
import stats from '../../../images/stats.svg';
import flag from '../../../images/flag.svg';
import dashboard from '../../../images/dashboard.svg';

const cards: ICard[] = [
  {
    img: book,
    heading: 'Учитесь с нуля',
    description: 'На нашей платформе существует множество курсов для начинающих'
  },
  {
    img: dialog,
    heading: 'Начните разговаривать на казахском языке',
    description: 'С нами вы сможете улучшить свои разговорные навыки'
  },
  {
    img: stats,
    heading: 'Ведите статистику обучения',
    description: 'Платформа позволяет контролировать своё обучение'
  },
  {
    img: flag,
    heading: 'Закрепляйте материал',
    description: 'Повторение - важный аспект обучения; просматривайте уже пройденные курсы'
  },
  {
    img: dashboard,
    heading: 'Подбирайте лучшие курсы',
    description: 'Проходите курсы и задания разного уровня сложности для повышения навыков'
  },
];

export function Cards() {
  return (
    <Container className={s.container}>
      <h2 className={s.heading}>Наши преимущества</h2>
      <div className={s.cards}>
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </Container>
  );
}

interface ICard {
  img: string;
  heading: string;
  description: string;
}

function Card({ img, heading, description }: ICard) {
  return (
    <div className={s.card}>
      <div className={s.cardImage}>
        <img src={img} alt="card" />
      </div>
      <div className={s.cardText}>
        <h3 className={s.cardHeading}>{heading}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
}