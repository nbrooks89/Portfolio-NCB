import React from "react";
import "../../scss/Contact.scss";
import IosCall from "react-ionicons/lib/IosCall";
import IosPin from "react-ionicons/lib/IosPin";
import IosMail from "react-ionicons/lib/IosMail";
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
            <div className="contacts-list">
            <div className="contacts-item"><IosCall fontSize="30px" color="white" /> &nbsp;774-261-2814</div>
            <div className="contacts-item"><IosPin fontSize="30px" color="white" />&nbsp;Boston,MA</div>
            <div className="contacts-item-3"><IosMail fontSize="30px" color="white" />&nbsp;nbrooks2389@gmail.com</div>
            </div>
        {/* <a href="https://www.linkedin.com/in/nicole-brooks89/">linkendin</a> */}
      </div>
    </>
  );
}

export default Contact;
