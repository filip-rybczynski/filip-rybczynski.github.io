import React from 'react';

import "./contact.scss";

import githubLogo from '../../assets/img/github-icon.svg';
import linkedInLogo from '../../assets/img/linkedin-icon.svg';

function Contact () {
return (
<section className="contact" id="contact">
      <h2 className="contact__header">Contact me</h2>
      <p className="contact__description">
        I'm open for new opportunities. If you have one for me we should talk!
      </p>
      <div className="contact__links">
        <ul className="socials">
          <li className="socials__item">
            <a
              className="socials__link"
              href="https://github.com/filip-rybczynski"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                className="socials__icon"
                src={githubLogo}
                alt="Filip Rybczyński github"
            /></a>
          </li>
          <li className="socials__item">
            <a
              className="socials__link"
              href="https://www.linkedin.com/in/filip-rybczy%C5%84ski/"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                className="socials__icon"
                src={linkedInLogo}
                alt="Filip Rybczyński LinkedIn"
            /></a>
          </li>
        </ul>
        <a className="contact__mail" href="”mailto:filipryba@gmail.com”"
          >filipryba@gmail.com</a
        >
      </div>
    </section>
)
}

export default Contact;