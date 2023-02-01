import { RouteLinks } from '../../types';
import { Link } from 'react-router-dom';
import s from './styles.module.scss';
import { Container } from '../Container';
import logo from '../../images/logo.jpg';

export function Header() {
    return (
        <header className={s.header}>
            <Container className={s.container}>
                <Link className={`${s.logo} ${s.link}`} to={RouteLinks.MAIN}>
                    <img src={logo} alt="lion logo" />
                    <span>Арыстан</span>
                </Link>
                <nav>
                    <ul className={s.links}>
                        <li><Link className={s.link} to='#'>О сервисе</Link></li>
                        <li><Link className={s.link} to='#'>Чат</Link></li>
                        <li><Link className={s.link} to='#'>Курсы</Link></li>
                    </ul>
                </nav>
                <Link className={s.link} to={RouteLinks.LOGIN}>Войти</Link>
            </Container>
        </header>
    );
}