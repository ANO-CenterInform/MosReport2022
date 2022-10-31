import Sidebar from '../../Components/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Index() {

    useEffect(() => {
        AOS.init();
    }, [])

    const pageLinks = [
        { "name": '01', "path": "#first" },
        { "name": '02', "path": "#second" },
        { "name": '03', "path": "#third" }
    ];

    return (
        <section className="relative grid sm:grid-cols-[7rem_1fr]">
            <Sidebar pageId={3} links={pageLinks}/>
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
        </section>
    )
}
