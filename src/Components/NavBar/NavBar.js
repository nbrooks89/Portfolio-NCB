import React, { useState } from "react";
import IosHome from "react-ionicons/lib/IosHome";
import IosMail from "react-ionicons/lib/IosMail";
import IosWoman from "react-ionicons/lib/IosWoman";
import IosApps from "react-ionicons/lib/IosApps";
import IosBriefcase from "react-ionicons/lib/IosBriefcase";


import "../../scss/NavBar.scss";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const NavBar = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="navContainer">
        <ul className={navOpen ? "active" : ""}>
          <figure onClick={() => setNavOpen(!navOpen)}>
            <IosApps fontSize="35px" color="white" />
          </figure>

          <ScrollLink
            className="nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => setNavOpen(!navOpen)}
          >
            <i>
              <IosHome fontSize="20px" color="white" />
            </i>
            Home
          </ScrollLink>

          <ScrollLink
            className="nav-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => setNavOpen(!navOpen)}
          >
            <i>
              <IosWoman fontSize="20px" color="white" />
            </i>
            About
          </ScrollLink>

          <ScrollLink
            className="nav-link"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => setNavOpen(!navOpen)}
          >
            <i>
              <IosBriefcase fontSize="20px" color="white" />
            </i>
            Portfolio
          </ScrollLink>

          <ScrollLink
            className="nav-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => setNavOpen(!navOpen)}
          >
            <i>
              <IosMail fontSize="23px" color="white" />
            </i>
            Contact
          </ScrollLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
