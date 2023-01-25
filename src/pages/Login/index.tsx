import { Header } from '../../components/Header';
import s from './styles.module.scss';

export function Login() {
    return <>
        <Header />
        <main className={s.wapper}>
            <form className={s.form}>
                <h1 className={s.heading}>Вход</h1>
                <input
                    className={s.input}
                    type="text"
                    name="username"
                    placeholder="E-mail"
                />
                <input
                    className={s.input}
                    type="password" 
                    name="password"
                    placeholder="Пароль"
                />
                <button type="submit" className={s.button}>Войти</button>
            </form>
        </main>
    </>;
}