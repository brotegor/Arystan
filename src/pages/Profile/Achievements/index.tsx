import s from './styles.module.scss';
import { AchievementCard } from './AchievementCard';

interface Achievement {
  id: number;
  name: string;
  points: string;
};

const fakeMyAchievement: Achievement[] = [
  { id: 1, name: "Прошел тестирование", points: '+20' },
  { id: 2, name: "Начал новый курс: Базовый казахский", points: '+10' },
];

export function Achievements(){
  return(
    <>
      <div className={s.subInfoWrapper}>
          <h1 className={s.infoHeading}>Достижения</h1>
          {fakeMyAchievement.map(achievement => (
              <AchievementCard
              key={achievement.id}
              name={achievement.name}
              points={achievement.points}
              />
          ))}
      </div>
    </>
  )
}