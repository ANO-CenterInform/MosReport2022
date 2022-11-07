import Sidebar from "../Components/Sidebar";
import {useEffect} from "react";
import AOS from "aos";
import Footer from "../Components/Footer";
import {motion} from "framer-motion";

type PageLayoutTypes = {
    id: number,
    links: number,
    children: JSX.Element,
    prevPage: string,
    nextPage: string
}

export default function PageLayout({id, links, children, prevPage, nextPage}: PageLayoutTypes) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <motion.div
            className={'flex flex-col h-full justify-between'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            <section className="relative flex-1 grid sm:grid-cols-[7rem_1fr]">
                {/*@ts-ignore*/}
                <Sidebar pageId={id} links={links} />
                <main>
                    {children}
                </main>
            </section>
            <Footer prev={prevPage} next={nextPage} />
        </motion.div>
    );
}
