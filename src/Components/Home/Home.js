import React from "react";
import "../../scss/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

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
        <ScrollLink
          className="arrow"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />
        </ScrollLink>
      </div>
    </>
  );
}
export default Home;
