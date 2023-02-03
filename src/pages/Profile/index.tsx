import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import s from './styles.module.scss';
import profile from '../../images/profile.svg';
import settings from '../../images/settings.svg';

export function Profile() {
    return (
        <>
            <Header />
            <Container className={s.Container}>
                <div className={s.mineCourse}>
                    <div className={s.achievements}>
                        Мои курсы
                    </div>
                    <div className={s.mineCoursesCase}>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        <div className={s.infoBlock}></div>
                        
                    </div>
                </div>
                <div className={s.AccountContainer}>
                    <div className={s.HalfAccount}>
                        <div className={s.microContainer}>
                           <img src={profile} alt="profile" className={s.icon}/>
                           <h1 className={s.Heading}>Bubilda</h1>
                           <img src={settings} alt="settings" className={s.settings}/>
                        </div>
                        <div className={s.levelContainer}>
                            <div className={s.level}>
                                Level: 0
                            </div>
                            <div className={s.progressValue}>
                                70/100
                            </div>        
                        </div>
                        <div className={s.progressBar}>
                            <div className={s.progress}></div>
                        </div>
                    </div>

                    <div className={s.HalfAccount}>
                        <div className={s.achievements}>Достижения</div>
                        <div className={s.mineAchievementsCase}>
                        <div className={s.infoBlock}>
                            <div className={s.infoBlock}></div>
                            <div className={s.infoBlock}></div>
                            <div className={s.infoBlock}></div>
                            <div className={s.infoBlock}></div>
                            <div className={s.infoBlock}></div>
                            <div className={s.infoBlock}></div>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
  }