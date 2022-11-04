import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer'

export default function Index() {

    useEffect(() => {
        AOS.init();
    }, [])

    const pageLinks = [
        { "name": '01', "path": "#first" },
        { "name": '02', "path": "#second" },
        { "name": '03', "path": "#third" },
        { "name": '04', "path": "#forth" },
        { "name": '05', "path": "#fith" }
    ];

    return (
        <>
            <section className="relative grid sm:grid-cols-[7rem_1fr]">
                <Sidebar pageId={1} links={5}/>

                <main>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </main>
            </section>
            <Footer prev={'/'} next={'/pages/2'} />
        </>
    )
}
