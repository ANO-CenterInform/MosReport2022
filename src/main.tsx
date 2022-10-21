import React from 'react'
import ReactDOM from 'react-dom/client'
import FrontPage from './FrontPage'
import Page_1 from './Pages/Page_1'
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/pages/1" element={<Page_1 />} />
          </Routes>
      </Router>
  </React.StrictMode>
)
