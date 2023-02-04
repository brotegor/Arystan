import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import s from './styles.module.scss';
import { CourseCard } from './CourseCard';
import { ChangeEventHandler, useState } from 'react';
import { useDebounce } from '../../hooks';

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

function Filters() {
  const [search, setSearch] = useState('');
  /*
    Обновляет свое значение только после истечения 300мс,
    то есть запрос на сервер будет отправляться не на каждое изменение значения в input,
    а только после 300мс после прекращения ввода символов в input.
  */
  const debouncedSearch = useDebounce(search, 300);

  const [categoryId, setCategoryId] = useState<number | 'All'>('All');

  const [currentLevel, setCurrentLevel] = useState<Level | 'All'>('All');

  return (
    <form className={s.filters}>
      <SearchField search={debouncedSearch} setSearch={setSearch} />
      <CategoriesField categoryId={categoryId} setCategoryId={setCategoryId} />
      <LevelField currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
    </form>
  );
}


// Search -------------------------------------------------
interface SearchFieldProps {
  search: string;
  setSearch: (search: string) => void
}

function SearchField({ search, setSearch }: SearchFieldProps) {
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <fieldset className={s.search}>
      <input
        name="search"
        className={s.searchInput}
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={onChange}
      />
      <button className={s.searchButton} type="submit"></button>
    </fieldset>
  );
}


// Categories -------------------------------------------------
interface Category {
  id: number
  name: string
}

const fakeCategories: Category[] = [
  { id: 1, name: 'Для себя' },
  { id: 2, name: 'Для работы' },
  { id: 3, name: 'Для учебы' },
];

interface CategoriesFieldProps {
  categoryId: number | 'All';
  setCategoryId: (categoryId: number | 'All') => void;
}

function CategoriesField({ categoryId, setCategoryId }: CategoriesFieldProps) {
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategoryId(Number(event.target.value));
  };

  return (
    <fieldset className={s.categories}>
      <label className={s.category}>
        <input
          type="radio"
          name="category"
          value="All"
          checked={categoryId === 'All'}
          onChange={() => setCategoryId('All')}
        />
        Все
      </label>
      {fakeCategories.map(category => (
        <label className={s.category}>
          <input
            type="radio"
            name="category"
            value={category.id}
            checked={category.id === categoryId}
            onChange={onChange}
          />
          {category.name}
        </label>
      ))}
    </fieldset>
  );
}

// Level -------------------------------------------------
interface LevelFieldProps {
  currentLevel: Level | 'All';
  setCurrentLevel: (levelId: Level | 'All') => void;
}

const fakeLevels: Level[] = [
  { id: 1, name: "Базовый", color: "green" },
  { id: 2, name: "Средний", color: "yellow" },
  { id: 3, name: "Продвинутый", color: "red" },
];

interface Level {
  id: number;
  name: string;
  color: string;
}

function LevelField({ currentLevel, setCurrentLevel }: LevelFieldProps) {
  console.log(currentLevel)
  return (
    <select style={{background: currentLevel !== 'All' ? currentLevel.color : 'var(--black-15)'}} className={s.level} name="level">
      <option 
          onChange={() => setCurrentLevel('All')} 
          selected={currentLevel === 'All'} 
          value= 'All'
        >
          Все уровни
        </option>
      {fakeLevels.map(level => (
        <option 
          onChange={() => setCurrentLevel(level)} 
          selected={currentLevel !== 'All' && level.id === currentLevel.id} 
          value={level.id}
          style={{background: level.color}}
        >
          {level.name}
        </option>
      ))}
    </select>
  );
}