import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Getting in touch is easy !</h1>
      <div className="icons-container">
        <a
          href="https://github.com/Michael-Melis"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-meli%C5%A1-0a7348102/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
        </a>
        <a
          href="https://www.instagram.com/michaelmelis/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagramSquare} className="icons" />
        </a>
        <a
          href="https://twitter.com/MichaelMeli1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitterSquare} className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
