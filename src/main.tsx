import React from 'react'
import ReactDOM from 'react-dom';
import FrontPage from './Pages/FrontPage'
import Index from './Pages/Page1'
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import smoothScrollPolyfill from 'smoothscroll-polyfill';

smoothScrollPolyfill.polyfill();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route exact path="/pages/1" component={Index} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
