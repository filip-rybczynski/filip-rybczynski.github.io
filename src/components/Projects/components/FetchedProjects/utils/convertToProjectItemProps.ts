import { ProjectItemProps as ProjectData } from "../components";
import { RepositoryData } from "../types";

type ProjectKeys = keyof ProjectData;

export interface UnfilteredProjectData extends Pick<RepositoryData, ProjectKeys> { }

export const convertToProjectItemProps = (
  repos: RepositoryData[],
  username: string
): ProjectData[] => {
  return repos
    .map(
      ({
        name,
        description,
        homepage,
        html_url,
      }: RepositoryData): UnfilteredProjectData => ({
        name,
        description,
        homepage,
        html_url,
      })
    )
    .filter((repo: UnfilteredProjectData): repo is ProjectData => { // type predicate
        // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
        // Functions that are declared as type predicate, must return a boolean. When the return value is true, TypeScript assumes that the return type is the one that's declared in the type predicate.
      return !!repo.homepage && !repo.name.includes(username);
    });
};
