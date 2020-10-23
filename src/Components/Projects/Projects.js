import React, { useEffect, useState } from "react";
import "../../scss/Projects.scss";
import Doglife from "./doglife.png";
import Starsale from "./starsale.png";
import Skatespots from "./skatespots.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  const [showModal, setShowModal] = useState(null);
  useEffect(() => {
    console.log(showModal);
  });

  const data = [
    {
      id: 1,
      name: "Barking lot",
      description:
        "The Barking Lot is a web app for learning the different dog breeds! Giving you detailed information and pictures for every breed. Including a favoriting sytem to keep track of your favorites!",
      description2: " - React  - CSS  - The Dog API",
      pic: { Doglife },
      github: "https://github.com/nbrooks89/doglife",
      appLink: "https://quantum-gearbox-291114.ue.r.appspot.com",
    },
    {
      id: 2,
      name: "Skate Spots",
      description:
        "Skate Spots app is a location based skate app that lets users create and share there favorite skate spots and skateparks with other skaters. Traveling to a new city and dont know where to skate? Skate Spots has you covered!",
      description2: "  - React  - Node.js -express  - MongoDB",
      pic: { Doglife },
      github: "https://github.com/nbrooks89/doglife",
      appLink: "https://skate-spots-23.herokuapp.com",
    },
    {
      id: 3,
      name: "Star Sale",
      description:
        "Finding a yard sale has never been easier! The Star Sale web app was built to fufill all your yard-sale needs. You can filter yard sales by distance and date, and star your favorite ones! If you want to host your own sale, no problem! you can create,update, and delete a sale at any time.",
      description2: " - React  - Ruby/Rails - Postgres SQL",
      pic: { Doglife },
      github: "https://github.com/TANC-LEARN-Bravo2020/StarSale",
      appLink: "https://frozen-falls-51923.herokuapp.com/",
    },
  ];
  const toggleModalState = (id) => {
    setShowModal(id);
  };

  return (
    <>
      <div className="projectsContainer">
        {data.map((data) => (
          <div
            key={data.id}
            className={`modalBackground modalShowing-${data.id === showModal}`}
          >
            <div className="modal-inner">
              <div className="modal-img">
                <img src={Doglife} alt=" dog modal pic" />
              </div>

              <div className="modal-text">
                <div className="name-x">
                  <div className="app-name-modal">{data.name}</div>
                  <div
                    className="name-button"
                    onClick={() => toggleModalState()}
                  >
                    x
                  </div>
                </div>
                <div>{data.description}</div>
                <div className="modal-text2">{data.description2}</div>
                <div className="external-links-modal">
                  <a href={data.github}>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  &nbsp;&nbsp;
                  <a href={data.appLink}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="projects-header">PROJECTS</div>
        <div className="underline-projects"></div>
        <div className="projects-inner-container">
          {data.map((data) => (
            <div className="projects">
              <img className="projects-img" src={Doglife} alt="dog app pic" />

              <div className="app-name">
                <div className="underline-name"></div> {data.name}
                <div className="underline-name"></div>
              </div>
              <div
                className="info-button"
                onClick={() => toggleModalState(data.id)}
              >
                About
              </div>
              <div className="description">{data.description}</div>
              <div className="description2">{data.description2}</div>
              <div className="external-links">
                <a href={data.github}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                &nbsp;&nbsp;
                <a href={data.appLink}>
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
