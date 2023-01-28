import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Cards } from './Cards';
import background from "../../images/main.jpg";
import s from './styles.module.scss';

export function Main() {
    return <>
        <Header />
        <main className={`ibg ${s.main}`}>
            <Container>
                <Cards />
            </Container>
            <img src={background} alt="background image" className={s.mainimage}/>
        </main>  
    </> 
}
