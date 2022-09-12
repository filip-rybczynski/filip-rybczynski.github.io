interface Socials {
    socialName: string,
    socialUrl: string,
    socialIconUrl: string,
}

export interface PersonalInfo {
    givenName: string,
    familyName: string,
    email: string,
    githubUsername: string,
    portraitUrl?: string,
    socials: Array<Socials>,
    role: string,
}

export type SkillCategory = {
    headerEmoji: string,
    headerText: string,
    skills: string[],
} 

export interface SkillSet {
    work: SkillCategory,
    something: SkillCategory,
    learn: SkillCategory
}