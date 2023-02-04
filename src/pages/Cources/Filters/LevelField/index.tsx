import s from './styles.module.scss';


interface LevelFieldProps {
  currentLevel: Level | 'All';
  setCurrentLevel: (levelId: Level | 'All') => void;
}

const fakeLevels: Level[] = [
  { id: 1, name: "Базовый", color: "var(--db-level-1)" },
  { id: 2, name: "Средний", color: "var(--db-level-2)" },
  { id: 3, name: "Продвинутый", color: "var(--db-level-3)" },
];

export interface Level {
  id: number;
  name: string;
  color: string;
}

export function LevelField({ currentLevel, setCurrentLevel }: LevelFieldProps) {
  const backgroundColor = currentLevel === 'All' ? 'var(--black-15)' : currentLevel.color;

  return (
    <select
      style={{background: backgroundColor}}
      className={s.levels}
      name="level"
      onChange={(event) => setCurrentLevel(event.target.value === 'All' ? 'All' : fakeLevels.find(level => level.id === Number(event.target.value)) as Level)}
    >
      <option
          onChange={() => setCurrentLevel('All')}
          value= 'All'
        >
          Все уровни
        </option>
      {fakeLevels.map(level => (
        <option
          key={level.id}
          value={level.id}
          style={{background: level.color}}
          className={s.levelColored}
        >
          {level.name}
        </option>
      ))}
    </select>
  );
}