import { Header } from '../../components/Header';
import { Container } from "../../components/Container";
import { Link } from 'react-router-dom';
import s from './styles.module.scss';

export function Login() {
    return <>
        <Header />
        <Container className={s.container}>
            <form className={s.form}>
                <h1 className={s.heading}>Вход</h1>
                <input
                    className={s.input}
                    type="text"
                    name="username"
                    placeholder="E-mail\Логин"
                />
                <input
                    className={s.input}
                    type="password" 
                    name="password"
                    placeholder="Пароль"
                />
                <button className={s.signIn}>Войти</button>
                <div className={s.separator}></div>
                <Link className={s.link} to='#'>Забыли пароль?</Link>
            </form>
        </Container>
    </>;
}