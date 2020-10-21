import React, { useState } from "react";
import "../../scss/Projects.scss";
import Doglife from "./doglife.png";
import Starsale from "./starsale.png";
import Skatespots from "./skatespots.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const toggleModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="projectsContainer">
        <div className={`modalBackground modalShowing-${showModal}`}>
          <div className="modal-inner">
            <div className="modal-img">
              <img src={Doglife} alt=" dog modal pic" />
            </div>

            <div className="modal-text">
              <div className="name-x">
                <div className="app-name-modal">Barking Lot</div>
                <div className="name-button" onClick={() => toggleModalState()}>
                  x
                </div>
              </div>
              <div>
                The Barking Lot is a web app for learning the different dog
                breeds! Giving you detailed information and pictures for every
                breed. Including a favoriting sytem to keep track of your
                favorites!
              </div>
              <div className="modal-text2">
                - React &nbsp; - CSS &nbsp; - The Dog API
              </div>
              <div className="external-links-modal">
                <a href="https://github.com/nbrooks89/doglife">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                &nbsp;&nbsp;
                <a href="https://quantum-gearbox-291114.ue.r.appspot.com">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-header">PROJECTS</div>
        <div className="underline-projects"></div>
        <div className="projects-inner-container">
          <div className="projects">
            <img className="projects-img" src={Doglife} alt="dog app pic" />

            <div className="app-name">
              <div className="underline-name"></div> Barking Lot
              <div className="underline-name"></div>
            </div>
            <div className="info-button" onClick={() => toggleModalState()}>
              Info
            </div>
            <div className="description">
              The Barking Lot is a web app for learning the different dog
              breeds! Giving you detailed information and pictures for every
              breed. Including a favoriting sytem to keep track of your
              favorites!
            </div>
            <div className="description2">
              -React &nbsp; -CSS &nbsp; -The Dog API
            </div>
            <div className="external-links">
              <a href="https://github.com/nbrooks89/doglife">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;&nbsp;
              <a href="https://quantum-gearbox-291114.ue.r.appspot.com">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="projects">
            <img className="projects-img" src={Doglife} />
            <div className="app-name">
              <div className="underline-name"></div>Star Sale
              <div className="underline-name"></div>
            </div>
            <div className="info-button" onClick={() => toggleModalState()}>
              Info
            </div>
            <div className="description">
              The Barking Lot is a web app for learning the different dog
              breeds! Giving you detailed information and pictures for every
              breed. Including a favoriting sytem to keep track of your
              favorites!
            </div>
            <div className="description2">
              -React &nbsp; -CSS &nbsp; -The Dog API
            </div>
            <div className="external-links">
              <a href="https://github.com/nbrooks89/doglife">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;&nbsp;
              <a href="https://quantum-gearbox-291114.ue.r.appspot.com">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="projects">
            <img className="projects-img" src={Doglife} />
            <div className="app-name">
              <div className="underline-name"></div>Skate Spots
              <div className="underline-name"></div>
            </div>
            <div className="info-button" onClick={() => toggleModalState()}>
              Info
            </div>
            <div className="description">
              The Barking Lot is a web app for learning the different dog
              breeds! Giving you detailed information and pictures for every
              breed. Including a favoriting sytem to keep track of your
              favorites!
            </div>
            <div className="description2">
              -React &nbsp; -CSS &nbsp; -The Dog API
            </div>
            <div className="external-links">
              <a href="https://github.com/nbrooks89/doglife">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;&nbsp;
              <a href="https://quantum-gearbox-291114.ue.r.appspot.com">
                <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
