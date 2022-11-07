import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
const FrontPage = React.lazy(() => import('../Pages/FrontPage'));
const Page1Section1 = React.lazy(() => import('../Pages/Page1/Section1'));
const Page1Section2 = React.lazy(() => import('../Pages/Page1/Section2'));
const Page1Section3 = React.lazy(() => import('../Pages/Page1/Section3'));
const Page1Section4 = React.lazy(() => import('../Pages/Page1/Section4'));
const Page1Section5 = React.lazy(() => import('../Pages/Page1/Section5'));
const Page2Section1 = React.lazy(() => import('../Pages/Page2/Section1'));
const Page2Section2 = React.lazy(() => import('../Pages/Page2/Section2'));
const Page2Section3 = React.lazy(() => import('../Pages/Page2/Section3'));
const Page2Section4 = React.lazy(() => import('../Pages/Page2/Section4'));
const Page2Section5 = React.lazy(() => import('../Pages/Page2/Section5'));
const Page2Section6 = React.lazy(() => import('../Pages/Page2/Section6'));
const Page2Section7 = React.lazy(() => import('../Pages/Page2/Section7'));
const Page3Section1 = React.lazy(() => import('../Pages/Page3/Section1'));
const Page3Section2 = React.lazy(() => import('../Pages/Page3/Section2'));
const Page3Section3 = React.lazy(() => import('../Pages/Page3/Section3'));
const Page3Section4 = React.lazy(() => import('../Pages/Page3/Section4'));

import {AnimatePresence} from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<FrontPage />} />
                <Route path="/pages/1/1" element={<Page1Section1 />} />
                <Route path="/pages/1/2" element={<Page1Section2 />} />
                <Route path="/pages/1/3" element={<Page1Section3 />} />
                <Route path="/pages/1/4" element={<Page1Section4 />} />
                <Route path="/pages/1/5" element={<Page1Section5 />} />
                <Route path="/pages/2/1" element={<Page2Section1 />} />
                <Route path="/pages/2/2" element={<Page2Section2 />} />
                <Route path="/pages/2/3" element={<Page2Section3 />} />
                <Route path="/pages/2/4" element={<Page2Section4 />} />
                <Route path="/pages/2/5" element={<Page2Section5 />} />
                <Route path="/pages/2/6" element={<Page2Section6 />} />
                <Route path="/pages/2/7" element={<Page2Section7 />} />
                <Route path="/pages/3/1" element={<Page3Section1 />} />
                <Route path="/pages/3/2" element={<Page3Section2 />} />
                <Route path="/pages/3/3" element={<Page3Section3 />} />
                <Route path="/pages/3/4" element={<Page3Section4 />} />
            </Routes>
        </AnimatePresence>

    );
}