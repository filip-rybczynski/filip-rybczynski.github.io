// React
import React, { useState } from "react";

// Interfaces and types
import { HeroProps } from "./interface";

// Styles
import "./hero.scss";

// Assets
import portrait from "./../../assets/img/portrait.jpg";
import { EmailButton } from "../EmailButton/EmailButton";

const Hero = ({
  givenName,
  familyName,
  email,
  role,
  portraitUrl,
}: HeroProps) => {
  const [animateGreeting, setAnimateGreeting] = useState<boolean>(false);

  const portraitAlt: string = `Photo of ${givenName} ${familyName}`;

  // Welcome message and classes that animate it
  const messageClass: string =
    "hero__welcome" + (animateGreeting ? " hero__pop" : "");
  const waveClass: string = animateGreeting ? "hero__wave" : "";

  const welcomeMessage: JSX.Element = (
    <span className={messageClass}>
      Hey there! <span className={waveClass}>👋</span>
    </span>
  );

  return (
    <>
      <section className="hero" id="top">
        <div
          className="hero__portrait-container"
          onMouseEnter={(): void => {
            setAnimateGreeting(true);
          }}
          onMouseLeave={(): void => {
            setAnimateGreeting(false);
          }}
        >
          <img
            className="hero__portrait portrait--js"
            src={portraitUrl || portrait}
            alt={portraitAlt}
          />
          {welcomeMessage}
        </div>
        <div className="hero__text-container">
          <h1 className="hero__header">
            My name is {givenName} and I'm&nbsp;a{" "}
            <strong className="hero__header-emphasis">{role}</strong>
          </h1>
          <p className="hero__introduction">
            You might be interested in checking the list of{" "}
            <a className="hero__introduction-link" href="#skills">
              my skills
            </a>
            . Don’t forget to take a look at{" "}
            <a className="hero__introduction-link" href="#projects">
              my projects
            </a>
            . Currently I’m looking for a new challenges so if you have one -{" "}
            <a className="hero__introduction-link" href="#contact">
              contact me!
            </a>
          </p>
        </div>
        <EmailButton email={email} />
      </section>
      <a className="top-link" href="#top">
        Back to top
      </a>
    </>
  );
};

export default Hero;
