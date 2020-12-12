import React, { useEffect, useState } from "react";
import "../../scss/Projects.scss";
import Doglife from "./dog-project.png";
import Starsale from "./project-sale.png";
import Skatespots from "./spots-project.png";
import Movieapp from "./movie-app.png";

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
      name: "Dog Dictionary",
      description:
        "An app for learning about different dog breeds utlizing an API.",
      description2: " - React  - CSS  - The Dog API",
      pic: Doglife,
      github: "https://github.com/nbrooks89/doglife",
      appLink: "https://dogs-rule-33.herokuapp.com",
    },
    {
      id: 2,
      name: "Skate Spots",
      description:
        "A full stack app for users to create & share there favorite skate spots. Features include: user authentication, photo uploading, viewing current distance to location, & full CRUD operation on user’s “spots”.",
      description2: "  - React  - Node.js -express  - MongoDB",
      pic: Skatespots,
      github: "https://github.com/nbrooks89/Spots",
      appLink: "https://skate-spots-23.herokuapp.com",
    },
    {
      id: 3,
      name: "Star Sale",
      description:
        "A full stack yard sale app. That allows users to filter yard sales by distance & date, star favorite ones.Features include: User authentication, location capability, favoriting, and full CRUD operations.",
      description2: " - React  - Ruby/Rails - Postgres SQL",
      pic: Starsale,
      github: "https://github.com/TANC-LEARN-Bravo2020/StarSale",
      appLink: "https://frozen-falls-51923.herokuapp.com/",
    },
    {
      id: 4,
      name: "Movie App",
      description:
        "An app for searching movies utlizing a robust API. Including a built in favoriting sytem.",
      description2: " - React  - CSS - The Movie Database API",
      pic: Movieapp,
      github: "https://github.com/nbrooks89/movie-app",
      appLink: "https://movie-dictionary-123.herokuapp.com/",
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
                <img src={data.pic} alt=" dog modal pic" />
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
                <div className="decription">{data.description}</div>
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
              <img className="projects-img" src={data.pic} alt="dog app pic" />
              <div className="project-inner-container-2">
                <div className="app-name">{data.name}</div>
                <div
                  className="info-button"
                  onClick={() => toggleModalState(data.id)}
                >
                  About
                </div>

                {/* <div className="description2">{data.description2}</div> */}
              </div>
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
