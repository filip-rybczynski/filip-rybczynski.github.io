import React from 'react';

import "./projects.scss";

function Projects () {
return (
    <section className="projects" id="projects">
    <h2 className="projects__header">Recent projects</h2>
    <p className="projects__description">
      I started my frontend developer path in 2020. Since then, I've built
      some projects. Here's a list of some of the things I've done so far:
    </p>
    <div className="projects__container projects--js"></div>
  </section>
)
}

export default Projects;