import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client';
import Loader from "./Components/Loader";
import './index.css'
import {
    BrowserRouter as Router
} from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <React.StrictMode>
            <Suspense fallback={<Loader />}>
                <Router>
                    <ScrollToTop />
                    <AnimatedRoutes />
                </Router>
            </Suspense>
        </React.StrictMode>
    </React.StrictMode>
);
