import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-navbar text-white font-mono py-4 flex justify-center md:justify-around md:px-10 px-4 flex-wrap  fixed bottom-0 w-full ">
      <div className="flex flex-col items-center">
        <h1>Getting in touch is easy !</h1>
        <div className="my-4">
          <a
            href="https://github.com/Michael-Melis"
            target="_blank"
            className="px-4 "
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-meli%C5%A1-0a7348102/"
            target="_blank"
            className="px-4"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/michaelmelis/"
            target="_blank"
            className="px-4"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/MichaelMeli1"
            target="_blank"
            className="px-4"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center text-center ">
        <h3>&copy; Designed & created by Michael Melis 2022</h3>
      </div>
    </div>
  );
};

export default Footer;
