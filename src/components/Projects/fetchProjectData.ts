import { RepositoryData } from "./interface";
import { ProjectProps  as ProjectData } from "../Project/interface"; 

export const fetchProjectData = (username: string): Promise<ProjectData[]> => {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=created&direction=asc`
  )
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`.trim())
      }

      return resp.json()})
    .then((data) =>
      data
        .map(({ name, description, html_url, homepage }: RepositoryData): RepositoryData => ({
          name,
          description,
          html_url,
          homepage,
        }))
        .filter((repo: ProjectData) => repo.homepage !== null)
    )
    .catch((error) => {
      console.log(error);
    });
};
