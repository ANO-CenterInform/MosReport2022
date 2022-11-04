import Sidebar from "../Components/Sidebar";
import {useEffect} from "react";
import AOS from "aos";
import Footer from "../Components/Footer";

type PageLayoutTypes = {
    id: number,
    links: object,
    children: JSX.Element,
    prevPage: string,
    nextPage: string
}

export default function PageLayout({id, links, children, prevPage, nextPage}: PageLayoutTypes) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <section className="relative flex-1 grid sm:grid-cols-[7rem_1fr]">
                {/*@ts-ignore*/}
                <Sidebar pageId={id} links={links} />
                <main>
                    {children}
                </main>
            </section>
            <Footer prev={prevPage} next={nextPage} />
        </>
    );
}
