import s from './styles.module.scss';
import { useState } from 'react';
import { Level, LevelField } from './LevelField';
import { SearchField } from './SearchField';
import { CategoriesField } from './CategoriesField';
// import { useDebounce } from '../../../hooks';

export function Filters() {
  const [search, setSearch] = useState('');
  /*
    Обновляет свое значение только после истечения 300мс,
    то есть запрос на сервер будет отправляться не на каждое изменение значения в input,
    а только после 300мс после прекращения ввода символов в input.
  */
  // const debouncedSearch = useDebounce(search, 300);

  const [categoryId, setCategoryId] = useState<number | 'All'>('All');

  const [currentLevel, setCurrentLevel] = useState<Level | 'All'>('All');

  return (
    <form className={s.filters}>
      <SearchField search={search} setSearch={setSearch} />
      <CategoriesField categoryId={categoryId} setCategoryId={setCategoryId} />
      <LevelField currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
    </form>
  );
}
