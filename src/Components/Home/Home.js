import React from "react";
import "../../scss/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;
function Home() {
  return (
    <>
      <div className=" homeContainer">
        <div className="box">
          <div className="myName">
            <div className="triangle"></div>Nicole Brooks
            <div className="triangleup"></div>
          </div>

          <div className="underline"></div>
          <div className="webDeveloper"> Full Stack Web Developer</div>
        </div>
        <div className="home-scroll-button">
          <ScrollLink
            className="arrow"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </ScrollLink>
        </div>
      </div>
    </>
  );
}
export default Home;
