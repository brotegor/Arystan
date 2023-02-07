import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import s from './styles.module.scss';
import { MainLink } from '../../components/MainLink';

export function Profile() {
    return (
        <>
            <Header />
            <Container className={s.container}>
                <div className={s.profileWrapper}>
                    <img className={s.profileImage} src="" alt="" />
                    <MainLink className={s.button} source='#' title='Настройки'/>
                    <div className={s.banner}></div>
                </div>
                <div className={s.informationWrapper}>
                    <div className={s.achivements}>
                        <p className={s.achivementsHeading}>Достижения</p>
                    </div><div className={s.activity}>
                        <p className={s.activityHeading}>Активность</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
