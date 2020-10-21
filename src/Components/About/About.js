import React from "react";
import "../../scss/About.scss";
import image3 from "./meprofile3.jpeg";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutBox">
          <div className="triangleLeft">
            <div className="triangleLeft1"></div>
          </div>
          <div className="helloContainer">
            <div className="aboutMe">ABOUT ME</div>
            <div className="hello">
              Hello!, i'm Nikki Brooks. I'm a web developer based in Boston
              Massachusettes. I am passionate about building amazing websites
              that influence and improve the lives of those around me. When im
              not coding i enjoy, skateboarding, and hanging with my dogs Paco
              and Archie.
            </div>
          </div>
        </div>
        <div className="imgTechContainer">
          <div className="imgContainer">
            <img src={image3}></img>
          </div>
          <div className="lfContainer">
            <div className="triangle-row">
              <div className="technologies">
                <div className="triangle-group"></div>Technical Skills
                <div className="triangle-group"></div>
              </div>
            </div>

            <div className="technologies-list">
              <div className="technologies-list-group">
                <div>-Node.js</div>
                <div>-Javascript</div>
              </div>
              <div className="technologies-list-group">
                <div>-React</div>
                <div>-HTML & CSS</div>
              </div>
              <div className="technologies-list-group">
                <div>-Ruby/Rails</div>
                <div>-SQL</div>
              </div>
              <div className="technologies-list-group">-MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
