import { Certifications, SocialLink, TechStack } from "@/shared/types";

export interface AboutInfo {
  headline: string;
  bio: string;
  avatarIconUrl: string;
  skills: string[];
  techStack: TechStack[];
  experience?: { title: string; company: string; duration: string }[];
  education?: { degree: string; institution: string; duration: string }[];
  certifications?: Certifications[];
  socialLinks: SocialLink[];
}
