import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import { NavLink, Link, Outlet } from 'react-router-dom';
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

export function Login() {
    return (
        <form className={s.form}>
            <input
                className={s.input}
                type="text"
                name="username"
                placeholder="E-mail или Логин"
            />
            <input
                className={s.input}
                type="password" 
                name="password"
                placeholder="Пароль"
            />
            <button type="submit" className={s.signIn}>Войти</button>
            <div className={s.separator}></div>
            <Link className={s.link} to='#'>Забыли пароль?</Link>
        </form>
    );
}

export function Registration() {
    return (
        <form className={s.form}>
            <input
                className={s.input}
                type="text"
                name="username"
                placeholder="E-mail или Логин"
            />
            <input
                className={s.input}
                type="password" 
                name="password1"
                placeholder="Пароль"
            />
            <input
                className={s.input}
                type="password" 
                name="password2"
                placeholder="Повторите пароль"
            />
            <button type="submit" className={s.signIn}>Регистрация</button>
        </form>
    );
}