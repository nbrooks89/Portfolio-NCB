import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Projects/Projects";
import { Element } from "react-scroll";
import "./App.scss";

const App = () => {
  return (
    <div className="appContainer">
      <NavBar />
      <Element id="home" className="home">
        <Home />
      </Element>
      <Element id="about" className="about">
        <About />
      </Element>
      <Element id="portfolio" className="portfolio">
        <Portfolio />
      </Element>
      <Element id="contact" className="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
