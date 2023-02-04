import s from './styles.module.scss';


interface LevelFieldProps {
  currentLevel: Level | 'All';
  setCurrentLevel: (levelId: Level | 'All') => void;
}

const fakeLevels: Level[] = [
  { id: 1, name: "Базовый", color: "green" },
  { id: 2, name: "Средний", color: "yellow" },
  { id: 3, name: "Продвинутый", color: "red" },
];

export interface Level {
  id: number;
  name: string;
  color: string;
}

export function LevelField({ currentLevel, setCurrentLevel }: LevelFieldProps) {
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