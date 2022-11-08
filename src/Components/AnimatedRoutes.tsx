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
const Page4Section1 = React.lazy(() => import('../Pages/Page4/Section1'));
const Page4Section2 = React.lazy(() => import('../Pages/Page4/Section2'));
const Page5Section1 = React.lazy(() => import('../Pages/Page5/Section1'));
const Page5Section2 = React.lazy(() => import('../Pages/Page5/Section2'));
const Page5Section3 = React.lazy(() => import('../Pages/Page5/Section3'));
const Page5Section4 = React.lazy(() => import('../Pages/Page5/Section4'));
const Page6Section1 = React.lazy(() => import('../Pages/Page6/Section1'));
const Page7Section1 = React.lazy(() => import('../Pages/Page7/Section1'));
const Page8Section1 = React.lazy(() => import('../Pages/Page8/Section1'));
const Page8Section2 = React.lazy(() => import('../Pages/Page8/Section2'));
const Page8Section3 = React.lazy(() => import('../Pages/Page8/Section3'));
const Page8Section4 = React.lazy(() => import('../Pages/Page8/Section4'));
const Page8Section5 = React.lazy(() => import('../Pages/Page8/Section5'));
const Page9Section1 = React.lazy(() => import('../Pages/Page9/Section1'));
const Page9Section2 = React.lazy(() => import('../Pages/Page9/Section2'));
const Page9Section3 = React.lazy(() => import('../Pages/Page9/Section3'));
const Page9Section4 = React.lazy(() => import('../Pages/Page9/Section4'));
const Page9Section5 = React.lazy(() => import('../Pages/Page9/Section5'));
const Page9Section6 = React.lazy(() => import('../Pages/Page9/Section6'));
const Page9Section7 = React.lazy(() => import('../Pages/Page9/Section7'));

import {AnimatePresence} from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence mode='wait'>
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
                <Route path="/pages/4/1" element={<Page4Section1 />} />
                <Route path="/pages/4/2" element={<Page4Section2 />} />
                <Route path="/pages/5/1" element={<Page5Section1 />} />
                <Route path="/pages/5/2" element={<Page5Section2 />} />
                <Route path="/pages/5/3" element={<Page5Section3 />} />
                <Route path="/pages/5/4" element={<Page5Section4 />} />
                <Route path="/pages/6/1" element={<Page6Section1 />} />
                <Route path="/pages/7/1" element={<Page7Section1 />} />
                <Route path="/pages/8/1" element={<Page8Section1 />} />
                <Route path="/pages/8/2" element={<Page8Section2 />} />
                <Route path="/pages/8/3" element={<Page8Section3 />} />
                <Route path="/pages/8/4" element={<Page8Section4 />} />
                <Route path="/pages/8/5" element={<Page8Section5 />} />
                <Route path="/pages/9/1" element={<Page9Section1 />} />
                <Route path="/pages/9/2" element={<Page9Section2 />} />
                <Route path="/pages/9/3" element={<Page9Section3 />} />
                <Route path="/pages/9/4" element={<Page9Section4 />} />
                <Route path="/pages/9/5" element={<Page9Section5 />} />
                <Route path="/pages/9/6" element={<Page9Section6 />} />
                <Route path="/pages/9/7" element={<Page9Section7 />} />
            </Routes>
        </AnimatePresence>

    );
}
