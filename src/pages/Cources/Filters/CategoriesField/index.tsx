import s from './styles.module.scss';

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

export function CategoriesField({ categoryId, setCategoryId }: CategoriesFieldProps) {
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
            onChange={() => setCategoryId(category.id)}
          />
          {category.name}
        </label>
      ))}
    </fieldset>
  );
}
