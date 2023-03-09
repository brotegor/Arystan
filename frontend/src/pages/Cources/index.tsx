import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import s from './styles.module.scss';
import { CourseCard } from './CourseCard';
import { Filters } from './Filters';

interface Course {
  id: number;
  name: string;
};

const fakeMyCourses: Course[] = [
  { id: 1, name: "Базовый курс по казахскому" },
  { id: 2, name: "Продвинутый курс по казахскому" },
];

const fakeAllCourses: Course[] = [
  { id: 3, name: "Разговорный казахский язык" },
  { id: 4, name: "Грамматика казахского языка" },
  { id: 5, name: "Повышение словарного запаса" },
  { id: 6, name: "Казахский для дедов" },
];

export function Courses(){
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <Container className={s.container}>
          <h1 className={s.heading}>Курсы по изучению казахского языка</h1>

          <Filters />
          <h2 className={s.sectionHeading}>Мои курсы</h2>
          <div className={s.courcesContainer}>
              {fakeMyCourses.map(course => (
                <CourseCard
                  key={course.id}
                  name={course.name}
                />
              ))}
          </div>
          
          <h2 className={s.sectionHeading}>Прочие</h2>
          <div className={s.courcesContainer}>
              {fakeAllCourses.map(course => (
                <CourseCard
                  key={course.id}
                  name={course.name}
                />
              ))}
          </div>
        </Container>
      </div>
    </>
  );
}
