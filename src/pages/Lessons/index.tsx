import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import s from './styles.module.scss';

export function Lessons(){
    return<>
      <Header />
      <Container className={s.container}>
          <h1>Уроки</h1>
          <div className={s.knowledgeLevel}>
            <p>Ваш уровень знаний:</p>
            <div className={s.level}>Базовый</div>
          </div>
          <h2>Мои курсы</h2>
          <div className={s.Lessons}>
            <div className={s.line}>
             <div className={s.myLesson}>Курс</div>
             <div className={s.myLesson}>Курс</div>
            </div>
            <div className={s.line}>
             <div className={s.myLesson}>Курс</div>
             <div className={s.myLesson}>Курс</div>
            </div>
            <div className={s.line}>
             <div className={s.myLesson}>Курс</div>
             <div className={s.myLesson}>Курс</div>
            </div>
          </div>
          <h2>Прочие</h2>
          <div className={s.navWrapper}>
            <form className={s.search}>
              <input className={s.searchInput} type="text" placeholder="Поиск"/>
              <button className={s.searchButton} type="submit"></button>
            </form>
            <div className={s.dropdown}>
              <button className={s.dropbutton}>Фильтры</button>
              <div className={s.dropdownContent}>
                <a href="#">Фильтр1</a>
                <a href="#">Фильтр2</a>
                <a href="#">Фильтр3</a>
              </div>
            </div>
          </div>
          <div className={s.Lessons}>
            <div className={s.line}>
             <div className={s.anotherLesson}>Курс</div>
             <div className={s.anotherLesson}>Курс</div>
            </div>
            <div className={s.line}>
             <div className={s.anotherLesson}>Курс</div>
             <div className={s.anotherLesson}>Курс</div>
            </div>
            <div className={s.line}>
             <div className={s.anotherLesson}>Курс</div>
             <div className={s.anotherLesson}>Курс</div>
            </div>
          </div>
      </Container>
    </>
}