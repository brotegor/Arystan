import { RouteLinks } from '../../types';
import { Link } from 'react-router-dom';
import s from './styles.module.scss';

export function Header() {
    return (
        <header className={s.header}>
            <Link className={s.logo} to={RouteLinks.MAIN}>Logo</Link>
            <nav>
                <ul className={s.links}>
                    <li><Link className={s.link} to='#'>О нас</Link></li>
                    <li><Link className={s.link} to='#'>Контакты</Link></li>
                    <li><Link className={s.link} to='#'>Курсы</Link></li>
                    <li><Link className={s.link} to={RouteLinks.LOGIN}>Войти в личный кабинет</Link></li>
                </ul>
            </nav>
        </header>
    );
}