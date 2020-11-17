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
        <div className="left-side-home">
        <div className="box1">
            <div className="triangle"></div>
          <div className="myName1">Nicole
           
          {/* <div className="underline"></div> */}
          <div className="webDeveloper1"> Full Stack</div>
</div>
          </div>

        </div>
        <div className="right-side-home">
        <div className="box2">
          <div className="myName2">
           Brooks
          {/* <div className="underline"></div> */}
          <div className="webDeveloper2"> Web Developer</div>
</div>
            <div className="triangleup"></div>
          </div>

        </div>
        <div className="home-scroll-button">
          <ScrollLink
            className="arrow"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
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
