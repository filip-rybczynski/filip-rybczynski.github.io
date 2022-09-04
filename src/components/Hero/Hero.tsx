import React from "react";

import "./hero.scss";

import portrait from "./../../assets/img/portrait.jpg";

function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero__portrait-container">
          <img
            className="hero__portrait portrait--js"
            src={portrait}
            alt="Photo of Filip Rybczyński"
          />
          <span className="hero__welcome welcome--js">
            Hey there! <span className="wave--js">👋</span>
          </span>
        </div>
        <div className="hero__text-container">
          <h1 className="hero__header">
            My name is Filip and I'm&nbsp;an aspiring{" "}
            <strong className="hero__header-emphasis">
              Frontend developer
            </strong>
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
        <a className="hero__mail" href="mailto:filipryba@gmail.com">
          filipryba@gmail.com
        </a>
      </section>
      <a className="top-link" href="#top">
        Back to top
      </a>
    </>
  );
}

export default Hero;
