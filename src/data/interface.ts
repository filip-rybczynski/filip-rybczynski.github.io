interface Socials {
    socialName: string,
    socialUrl: string,
    socialIconUrl?: string,
}

export interface PersonalInfo {
    givenName: string,
    familyName: string,
    email: string,
    repository: string,
    portraitUrl?: string,
    socials?: Array<Socials>,
    role: string,
    isAspiring?: boolean,
}