import Sidebar from '../../Components/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Footer from "../../Components/Footer";

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
        <>
            <section className="relative grid sm:grid-cols-[7rem_1fr]">
                <Sidebar pageId={2} links={pageLinks}/>
                <main>
                    Page 2
                </main>
            </section>

            <Footer prev={'/pages/2'} next={'/pages/3'} />
        </>
    )
}
