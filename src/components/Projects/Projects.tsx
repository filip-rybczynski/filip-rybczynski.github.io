// React
import React, { useEffect, useState } from "react";

// Components
import Project from "../Project/Project";

// Interfaces
import { fetchProjectData } from "./fetchProjectData";
import { ProjectProps as ProjectData } from "../Project/interface";

// Styles
import "./projects.scss";

function Projects() {
  const [projectDataArray, setProjectDataArray] = useState<ProjectData[]>();

  useEffect(() => {
    (async () => {
      const projectData: ProjectData[] = await fetchProjectData();

      setProjectDataArray(projectData);
    })();
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="projects__header">Recent projects</h2>
      <p className="projects__description">
        I started my frontend developer path in 2020. Since then, I've built
        some projects. Here's a list of some of the things I've done so far:
      </p>
      <div className="projects__container projects--js">
        {projectDataArray?.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
