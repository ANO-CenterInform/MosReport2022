import Sidebar from '../../Components/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

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
        <main className="relative grid sm:grid-cols-[7rem_1fr]">
            <Sidebar links={pageLinks}/>
            <div>
                <Section1 />
                <Section2 />
            </div>
        </main>
    )
}
