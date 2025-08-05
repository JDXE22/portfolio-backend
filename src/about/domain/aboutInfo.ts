import { Education, SocialLink, TechStack } from "../../shared/types"

export interface AboutInfo {
    headline: string
    bio: string,
    avatarIconUrl: string,
    skills: string[],
    techStack: TechStack[],
    experience?: {title: string, company: string, duration: string}[],
    education: Education[],
    certifications?: {title: string, issuer: string, date: string}[],
    socialLinks: SocialLink[]
}