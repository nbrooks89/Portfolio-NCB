import React from "react";
import "../../scss/Contact.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  return (
    <>
      <div className=" contactContainer">
        <div className="contactName">Contact</div>
        <div className="questions">
          Have any questions or want to work together?
        </div>
        <div className="link-mail">
          <a href="mailto:nbrooks2389@gmail.com">
            <div className="contact-button">
              {/* <FontAwesomeIcon icon={faEnvelope} size="lg" /> */}
              Get In Touch
            </div>
          </a>
        </div>
        <a href="https://www.linkedin.com/in/nicole-brooks89/">linkendin</a>
      </div>
    </>
  );
}

export default Contact;
