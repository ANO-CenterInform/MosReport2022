import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect, Suspense} from "react";

const Sidebar = React.lazy(() => import('../../Components/Sidebar'));
const Section1 = React.lazy(() => import('./Section1'));
const Section2 = React.lazy(() => import('./Section2'));
const Section3 = React.lazy(() => import('./Section3'));
const Footer = React.lazy(() => import('../../Components/Footer'));


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
                <Suspense fallback={<div>Загрузка</div>}>
                    <Sidebar pageId={1} links={pageLinks}/>
                </Suspense>

                <main>
                    <Suspense fallback={<div className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10 text-center">Загрузка...</div>}>
                        <Section1 />
                    </Suspense>

                    <Suspense fallback={<div className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10 text-center">Загрузка...</div>}>
                        <Section2 />
                    </Suspense>

                    <Suspense fallback={<div className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10 text-center">Загрузка...</div>}>
                        <Section3 />
                    </Suspense>
                </main>
            </section>
            <Suspense fallback={<div>Загрузка</div>}>
                <Footer prev={'/'} next={'/pages/2'} />
            </Suspense>
        </>
    )
}
