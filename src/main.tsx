import React, {Suspense} from 'react'
import ReactDOM from 'react-dom';
import Loader from "./Components/Loader";
import './index.css'
import {
    BrowserRouter as Router
} from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader />}>
            <Router>
                <ScrollToTop />
                <AnimatedRoutes />
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
