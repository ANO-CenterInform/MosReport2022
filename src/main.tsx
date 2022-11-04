import React, {Suspense} from 'react'
import ReactDOM from 'react-dom';
import Loader from "./Components/Loader";
const FrontPage = React.lazy(() => import('./Pages/FrontPage'));
const Page1Section1 = React.lazy(() => import('./Pages/Page1/Section1'));
const Page1Section2 = React.lazy(() => import('./Pages/Page1/Section2'));
const Page1Section3 = React.lazy(() => import('./Pages/Page1/Section3'));
const Page1Section4 = React.lazy(() => import('./Pages/Page1/Section4'));
const Page1Section5 = React.lazy(() => import('./Pages/Page1/Section5'));
const Page2Section1 = React.lazy(() => import('./Pages/Page2/Section1'));
const Page2Section2 = React.lazy(() => import('./Pages/Page2/Section2'));
const Page2Section3 = React.lazy(() => import('./Pages/Page2/Section3'));
const Page2Section4 = React.lazy(() => import('./Pages/Page2/Section4'));
const Page3Section1 = React.lazy(() => import('./Pages/Page3/Section1'));
const Page3Section2 = React.lazy(() => import('./Pages/Page3/Section2'));
const Page3Section3 = React.lazy(() => import('./Pages/Page3/Section3'));
const Page3Section4 = React.lazy(() => import('./Pages/Page3/Section4'));
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader />}>
            <Router>
                <Routes>
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
                    <Route path="/pages/3/1" element={<Page3Section1 />} />
                    <Route path="/pages/3/2" element={<Page3Section2 />} />
                    <Route path="/pages/3/3" element={<Page3Section3 />} />
                    <Route path="/pages/3/4" element={<Page3Section4 />} />
                </Routes>
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
