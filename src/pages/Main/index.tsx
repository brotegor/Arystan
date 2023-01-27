
import { Header } from "../../components/Header";
import background from "../../images/main.jpg";
import s from './styles.module.scss';

export function Main() {
    return <>
        <Header />
        <main className={s.main}>
            <div className={s.concepts}>
                <div className={`${s.concept} ${s.leftConcept}`}>
                    <h3 className={s.defaultText}>Цель</h3>
                    <p className={s.hoverText}>Обучить</p>
                </div>
                <div className={`${s.concept} ${s.middleConcept}`}>
                    <h3 className={s.defaultText}>Важность</h3>
                    <p className={s.hoverText}>Очень важно</p>
                </div>
                <div className={`${s.concept} ${s.rightConcept}`}>
                    <h3 className={s.defaultText}>Уникальность</h3>
                    <p className={s.hoverText}>Самый уникальный</p>
                </div>
            </div>
            <img src={background} alt="background image" className={s.mainimage}/>
        </main>  
    </> 
}



