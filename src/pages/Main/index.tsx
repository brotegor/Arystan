import { Header } from "../../components/Header";
import { Fullscreen } from "./Fullscreen";
import { Cards } from './Cards';

export function Main() {
    return <>
        <Header />
        <main>
            <Fullscreen />
            <Cards />
        </main>
    </>;
}
