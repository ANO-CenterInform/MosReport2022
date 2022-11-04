import React, {Suspense} from 'react'
import ReactDOM from 'react-dom';
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
const FrontPage = React.lazy(() => import('./Pages/FrontPage'));
const Page1Section1 = React.lazy(() => import('./Pages/Page1/Section1'));
const Page1Section2 = React.lazy(() => import('./Pages/Page1/Section2'));
const Page1Section3 = React.lazy(() => import('./Pages/Page1/Section3'));
const Page1Section4 = React.lazy(() => import('./Pages/Page1/Section4'));
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div></div>}>
            <Router>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/pages/1/1" element={<Page1Section1 />} />
                    <Route path="/pages/1/2" element={<Page1Section2 />} />
                    <Route path="/pages/1/3" element={<Page1Section3 />} />
                    <Route path="/pages/1/4" element={<Page1Section4 />} />
                </Routes>
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
