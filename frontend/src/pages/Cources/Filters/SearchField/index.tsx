import s from './styles.module.scss';
import searchIcon from '../../../../images/search.svg';

interface SearchFieldProps {
  search: string;
  setSearch: (search: string) => void
}

export function SearchField({ search, setSearch }: SearchFieldProps) {
  return (
    <fieldset className={s.search}>
      <span className={s.searchIcon}>
        <img src={searchIcon} alt="search" />
      </span>
      <input
        name="search"
        className={s.searchInput}
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </fieldset>
  );
}