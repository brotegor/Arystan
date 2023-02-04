import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import s from './styles.module.scss';
import { repeat } from '../../utils';
import { AccountCard } from "./AccountCard";
import { ScrollContainer } from "./ScrollContainer";

export function Profile() {
    return (
        <>
            <Header />
            <Container className={s.container}>
                <ScrollContainer height="calc(100vh - 270px)" className={s.courses} heading="Мои курсы">
                    {repeat(() => <div className={s.skeleton}></div>, 10)}
                </ScrollContainer>
                <div className={s.accountContainer}>
                    <AccountCard />
                    <ScrollContainer height="calc(100vh - 523px)" className={s.achievements} heading="Достижения">
                        {repeat(() => <div className={s.skeleton}></div>, 4)}
                    </ScrollContainer>
                </div>
            </Container>
        </>
    );
}
