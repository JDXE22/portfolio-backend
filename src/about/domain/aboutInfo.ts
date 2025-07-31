export interface AboutInfo {
    headline: string
    bio: string,
    avatarUrl: string,
    skills: string[],
    techStack: {name: string, icon: string}[],
    experience?: {title: string, company: string, duration: string}[],
    socialLinks: {name: string, url: string}[]
}