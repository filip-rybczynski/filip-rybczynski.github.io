import { PersonalInfo } from "./interface"

import githubLogo from '../assets/img/github-icon.svg';
import linkedInLogo from '../assets/img/linkedin-icon.svg';

const developerInfo: PersonalInfo = {
    givenName: "Filip",
    familyName: "Rybczyński",
    email: "filipryba@gmail.com",
    githubUsername: "filip-rybczynski",
    socials: [
        {
            socialName: "GitHub",
            socialUrl: "https://github.com/filip-rybczynski",
            socialIconUrl: githubLogo,
        },
        {
            socialName: "LinkedIn",
            socialUrl: "https://www.linkedin.com/in/filip-rybczy%C5%84ski/",
            socialIconUrl: linkedInLogo,
        }
    ],
    role: "Frontend developer",
}

export default developerInfo;