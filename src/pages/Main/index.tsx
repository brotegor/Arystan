import { Header } from "../../components/Header";
import background from "../../images/main.jpg";
import s from './styles.module.scss';

export function Main() {
    return <>
        <Header />
        <main className={s.main}>
            <ul className={s.concepts}>
                <li className={s.concept}>
                    <span className={s.a}>Цель</span>
                    <span className={s.b}>Обучить</span>
                </li>
                <li className={s.concept}>
                    <span className={s.a}>Важность</span>
                    <span className={s.b}>Очень важно</span>
                </li>
                <li className={s.concept}>
                    <span className={s.a}>Уникальность</span>
                    <span className={s.b}>Самый уникальный</span>
                </li>
            </ul>
            <img src={background} alt="wergwgesdewg" className={s.mainimage}/>
        </main>  
    </> 
}



