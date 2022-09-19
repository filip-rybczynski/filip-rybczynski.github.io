// import { RepositoryData } from "./Projects.interface";
// import { ProjectProps  as ProjectData } from "./components/FetchedProjects/components/ProjectItem/ProjectItem.interface"; 

// import { FetchResult } from "./components/FetchedProjects/components/ProjectItem/ProjectItem.interface";

// export const fetchProjectData = (username: string): Promise<ProjectData[]> => {

//   const fetchResult = {
//     projectData: [],
//     errorMessage: null
//   } as FetchResult

//   fetch(
//     `https://api.github.com/users/${username}/repos?sort=created&direction=asc`
//   )
//     .then((resp) => {
//       if (!resp.ok) {
//         fetchResult.errorMessage = new Error(`${resp.status} ${resp.statusText}`.trim()); 
//       }

//       return resp.json()})
//     .then((data) =>
//       data
//         .map(({ name, description, html_url, homepage }: RepositoryData): RepositoryData => ({
//           name,
//           description,
//           html_url,
//           homepage,
//         }))
//         .filter((repo: ProjectData) => repo.homepage !== null)
//     )
// };
export {}
