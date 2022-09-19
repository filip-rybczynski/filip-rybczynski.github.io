// React
import React, { FunctionComponent } from "react";

// Components
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { FetchedProjects } from "./components";

// Interfaces
import { ProjectsProps } from "./Projects.interface";

// Styles
import "./Projects.styles.scss";

export const Projects = ({username}: ProjectsProps) => {

  return (
    <section className="projects" id="projects">
      <h2 className="projects__header">Recent projects</h2>
      <p className="projects__description">
        I started my frontend developer path in 2020. Since then, I've built
        some projects. Here's a list of some of the things I've done so far:
      </p>
      <ErrorBoundary>
        <FetchedProjects username={username} />
      </ErrorBoundary>
    </section>
  );
}
