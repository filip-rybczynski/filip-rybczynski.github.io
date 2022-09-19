import React, { ReactNode, Fragment, useState } from "react";

// Components (+ related types)
import { ProjectItem, ProjectItemProps } from "./components";

// Types
import { FetchedProjectsProps } from "./FetchedProjects.interface";
import { RepositoryData } from "./types";

// Utils
import { convertToProjectItemProps } from "./utils";

// Styles
import "./FetchedProjects.styles.scss";

export const FetchedProjects = ({ username }: FetchedProjectsProps) => {
  const [projects, setProjects] = useState<ProjectItemProps[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getProjects = (username: string): void => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=created&direction=asc`
    )
      .then((resp) => {
        if (!resp.ok) {
          setError(new Error(`${resp.status} ${resp.statusText}`.trim()));
        }
        return resp.json();
      })
      .then((resp: RepositoryData[]) => {
        setProjects(convertToProjectItemProps(resp, username));
      });
  };

  getProjects(username);

  const fetchResult: ReactNode = error ? (
    <div className={"fetched-projects__error"}>{error.toString()}</div>
  ) : projects.length > 0 ? (
    <Fragment>
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </Fragment>
  ) : (
    <div className={"fetched-projects__loading"}>Loading...</div>
  );

  return <div className="fetched-projects">{fetchResult}</div>;
};
