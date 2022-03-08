import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserTie, faDriversLicense, faBriefcase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import './App.css';
function App() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (

    <header className="container-fluid bg-light p-0" style={{ height: "100vh" }}>
      {/* Header Mobile  */}
      <div className="header-mobile">
        <div className="header-toggle" onClick={toggleHandler} ><FontAwesomeIcon icon={faBars} /></div>
        <h2>Mostafa Fathi</h2>
      </div>

      <div className="d-flex">
        <nav
          className={toggle ? "mainNav NavOn" : "mainNav NavOf"}
          style={{ height: "100vh", zIndex: 1000 }}
        >

          <div className="image-container">
            <h2 className="header-name">Mostafa Fathi</h2>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHwPfsk8ovhBw/profile-displayphoto-shrink_200_200/0/1634682530071?e=1651708800&v=beta&t=wh_MPub8sooNHFWWYJ--HwJ8q0DI0YKALc6POvfIekk" alt="profile-pic" />
          </div>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">
                <span className="nav-menu-icon"><FontAwesomeIcon icon={faHouse} /></span>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link ">
                <span className="nav-menu-icon"><FontAwesomeIcon icon={faUserTie} /></span>
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link">
                <span className="nav-menu-icon"><FontAwesomeIcon icon={faDriversLicense} /></span>
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">
                <span className="nav-menu-icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <span className="nav-menu-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-footer">
            {/* <!--Social Links--> */}
            <ul className="social">
              <li><a href="https://www.facebook.com/mostafa.fathi.92167/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
              <li><a href="https://www.instagram.com/mos__tafa_1/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
              <li><a href="https://www.linkedin.com/in/mostafa-fathi-a962a820b/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://github.com/Mostafa142" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
              <li><a href="https://twitter.com/Mos__tafa_1" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
            </ul>
            {/* <!--Copyright Text--> */}
            <div className="copy text-center">
              <p>2022 &copy; Mostafa Fathi<br />All Right Reserved.</p>
            </div>
          </div>
        </nav>
        <main
          id="main"
          className="wrapper"
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </header>
  );
}
<>
  <Home />
  <About />
  <Resume />
  <Portfolio />
  <Contact />
</>



export default App;
