import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import { NavLink, Outlet } from 'react-router-dom';
import s from './styles.module.scss';
import { RouteLinks } from '../../types';

export function Auth() {
    return <>
        <Header />
        <Container className={s.container}>
            <div className={s.formWrapper}>
                <div className={s.tabs}>
                    <NavLink className={s.tab} to={RouteLinks.LOGIN}>Вход</NavLink>
                    <NavLink className={s.tab} to={RouteLinks.REGISTRATION}>Регистрация</NavLink>
                </div>
                <Outlet />
            </div>
        </Container>
    </>;
}

export { Login } from './Login';
export { Registration } from './Registration';
