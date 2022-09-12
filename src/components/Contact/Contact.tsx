import React from "react";

import "./contact.scss";

import { ContactProps } from "./interface";
import Social from "./Social/Social";

function Contact({ socials, email }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__header">Contact me</h2>
      <p className="contact__description">
        I'm open for new opportunities. If you have one for me we should talk!
      </p>
      <div className="contact__links">
        <ul className="socials">
          {socials.map((social) => (
            <Social {...social} />
          ))}
        </ul>
        <a className="contact__mail" href="”mailto:filipryba@gmail.com”">
          {email}
        </a>
      </div>
    </section>
  );
}

export default Contact;
