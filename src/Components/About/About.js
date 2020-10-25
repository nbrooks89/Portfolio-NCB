import React from "react";
import "../../scss/About.scss";
import image3 from "./meprofile3.jpeg";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutMe">ABOUT ME</div>
        <div className="img-hello">
          <img src={image3} alt="nicole brooks "></img>

          <div className="helloContainer">
            <div className="hello">
              Hello!, i'm Nikki Brooks. I'm a web developer based in Boston
              Massachusettes. I am passionate about building amazing websites
              that influence and improve the lives of those around me. When im
              not coding i enjoy, skateboarding, and hanging with my dogs Paco
              and Archie.
            </div>

            <div className="lfContainer">
              <div className="triangle-row">
                <div className="technologies">
                  <div className="triangle-group"></div>Technical Skills
                  <div className="triangle-group"></div>
                </div>
              </div>
              <div className="technologies-list">
                {/* <div className="list-group"> */}
                <div className="list-item">HTML</div>
                <div className="list-item">Javascript</div>
                <div className="list-item">React</div>
                {/* </div> */}
                {/* <div className="list-group"> */}
                <div className="list-item">Node.js</div>
                <div className="list-item">Ruby/Rails</div>
                <div className="list-item">SQL</div>
                {/* </div> */}
                {/* <div className="list-group"> */}
                <div className="list-item">MongoDB</div>
                <div className="list-item">CSS</div>
                <div className="list-item">SCSS</div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
