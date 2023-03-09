import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import s from './styles.module.scss';
import { MainLink } from '../../components/MainLink';
import { ProfileData } from './ProfileData';
import background from '../../images/negro.jpg';
import { RouteLinks } from '../../types';
import { NavLink, Outlet } from 'react-router-dom';
import { LevelBar } from './LevelBar';

interface Profile {
    image: string;
    name: string;
};
  
const fakeMyProfile: Profile = { 
    image: 'https://sportishka.com/uploads/posts/2022-08/1661324439_28-sportishka-com-p-nakachennii-muzhik-negr-pinterest-51.jpg', 
    name: "Bubilda" 
};

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
                <LevelBar level={1} recieved={70} total={100} />
                <div className={s.informationWrapper}>
                    <div className={s.tabs}>
                        <NavLink className={s.tab} to={RouteLinks.ACHIEVEMENTS}>Достижения</NavLink>
                        <NavLink className={s.tab} to={RouteLinks.ACTIVITY}>Активность</NavLink>
                        <NavLink className={s.tab} to={RouteLinks.CERTIFICATES}>Сертификаты</NavLink>
                    </div>
                    <Outlet />
                </div>
            </Container>
        </>
    );
}

export { Achievements } from '../Profile/Achievements';
export { Activity } from './Activity';
export { Certificates } from '../Profile/Сertificates';