import s from './styles.module.scss';

interface SearchFieldProps {
  search: string;
  setSearch: (search: string) => void
}

function SearchField({ search, setSearch }: SearchFieldProps) {
  return (
    <fieldset className={s.search}>
      <input
        name="search"
        className={s.searchInput}
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className={s.searchButton} type="submit"></button>
    </fieldset>
  );
}