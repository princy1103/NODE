import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import './App.css'
function App() {
  return (
    <>
       <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1 className="logo">BlogSite</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* Dynamic Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
