import React from 'react'
import ReactDOM from 'react-dom';
import FrontPage from './Pages/FrontPage'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
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
                <Route exact path="/pages/1" component={Page1} />
                <Route exact path="/pages/2" component={Page2} />
                <Route exact path="/pages/3" component={Page3} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
