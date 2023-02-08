import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import s from './styles.module.scss';
import { MainLink } from '../../components/MainLink';
import { ProfileData } from './ProfileData';
import { AchievementCard } from './AchievementCard';
import background from '../../images/negro.jpg';

interface Profile {
    image: string;
    name: string;
};

interface Achievement {
    id: number;
    name: string;
  };
  
const fakeMyProfile: Profile = {
    image: 'https://sportishka.com/uploads/posts/2022-08/1661324439_28-sportishka-com-p-nakachennii-muzhik-negr-pinterest-51.jpg',
    name: "Bubilda"
};

const fakeMyAchievement: Achievement[] = [
    { id: 1, name: "Прошел тестирование" },
    { id: 2, name: "Начал новый курс: Базовый казахский" },
  ];

export function Profile() {
    return (
        <>
            <Header />
            <Container className={s.container}>
                <div className={s.profileWrapper}>
                    <ProfileData
                        image={fakeMyProfile.image}
                        name={fakeMyProfile.name}
                    />
                    <MainLink className={s.button} source='#' title='Настройки'/>
                    <img className={s.banner} src={background}/>
                </div>
                <div className={s.informationWrapper}>
                    <div className={s.subInfoWrapper}>
                        <h1 className={s.infoHeading}>Достижения</h1>
                        {fakeMyAchievement.map(achievement => (
                            <AchievementCard
                            key={achievement.id}
                            name={achievement.name}
                            />
                        ))}
                    </div>
                    <div className={s.subInfoWrapper}>
                        <h1 className={s.infoHeading}>Активность</h1>
                    </div>
                </div>
            </Container>
        </>
    );
}
