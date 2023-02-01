import { MainLink } from '../../../components/MainLink';
import { Container } from "../../../components/Container";
import s from './styles.module.scss';

export function Fullscreen() {
  return (
    <div className={s.body}>
      <Container className={s.container}>
        <div className={s.mainParagraph}>
          <h1 className={s.heading}>Обучение казахскому языку бесплатно</h1>
          <p className={s.paragraph}>Наш сервис поможет быстро и эффективно изучить государственныый язык для подготовки к экзаменам и поступлению в казахскае вузы</p>
          <MainLink source='#' title='Начать сейчас' />
        </div>
        <div className={s.slider}></div>
      </Container>
    </div>
  );
}
