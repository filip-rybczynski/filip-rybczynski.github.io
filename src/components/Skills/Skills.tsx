import React from 'react';

import "./skills.scss";

function Skills () {
return (
<section className="skills" id="skills">
      <h2 className="skills__header">My skills</h2>
      <div className="skills__container">
        <section className="skills-section">
          <span className="skills-section__icon">💪</span>
          <h3 className="skills-section__header">Working knowledge</h3>
          <ul className="skills-list skills-list--work">
            <li className="skills-list__item">Semantic HTML5</li>
            <li className="skills-list__item">CSS</li>
            <li className="skills-list__item">SASS</li>
            <li className="skills-list__item">JavaScript ES6</li>
            <li className="skills-list__item">Markdown</li>
            <li className="skills-list__item">Forms</li>
            <li className="skills-list__item">Git</li>
          </ul>
        </section>
        <section className="skills-section">
          <span className="skills-section__icon">🤔</span>
          <h3 className="skills-section__header">Know something about</h3>
          <ul className="skills-list skills-list--something">
            <li className="skills-list__item">React JS</li>
            <li className="skills-list__item">Typescript</li>
            <li className="skills-list__item">Working with APIs</li>
            <li className="skills-list__item">NPM Scripts</li>
            <li className="skills-list__item">Progressive web apps</li>
            <li className="skills-list__item">Accessibility</li>
          </ul>
        </section>
        <section className="skills-section">
          <span className="skills-section__icon">🎓</span>
          <h3 className="skills-section__header">Want to learn</h3>
          <ul className="skills-list skills-list--learn">
            <li className="skills-list__item">Node JS</li>
            <li className="skills-list__item">Ember JS</li>
            <li className="skills-list__item">Gatsby</li>
            <li className="skills-list__item">GraphQL</li>
            <li className="skills-list__item">Server side rendering</li>
            <li className="skills-list__item">Websockets</li>
            <li className="skills-list__item">Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </section>
)
}

export default Skills;