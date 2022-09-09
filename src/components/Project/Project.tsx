// React
import React from "react";

// Interface
import { ProjectProps } from "./interface";

// Styles
import "./project.scss";

// Assets
import githubIcon from "../../assets/img/github-icon-white.svg";

function Project({ name, description, homepage, html_url }: ProjectProps) {
  return (
    <article className="project">
      <div className="project__bar">
        <span className="project__dot"></span>
      </div>
      <div className="project__content">
        <img src={githubIcon} alt="" />
        <h3 className="project__name project__grid">
          <span className="project__label">project:</span>
          <span>{name}</span>
        </h3>
        <p className="project__description project__grid">
          <span className="project__label">description:</span>
          <span>{description || "N/A"}</span>
        </p>
        <p className="project__demo project__grid">
          <span className="project__label">demo:</span>
          <span>
            &lt;
            <a
              href={homepage}
              target="_blank"
              title={`${name} - demo`}
              rel="noopener noreferrer"
            >
              see here
            </a>
            &gt;
          </span>
        </p>
        <p className="project__github project__grid">
          <span className="project__label">github:</span>
          <span>
            &lt;
            <a
              href={html_url}
              target="_blank"
              title={`${name} - GitHub`}
              rel="noopener noreferrer"
            >
              source code
            </a>
            &gt;
          </span>
        </p>
      </div>
    </article>
  );
}

export default Project;
