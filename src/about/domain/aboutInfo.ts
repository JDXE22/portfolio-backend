import { Certifications, SocialLink, TechStack } from "@/shared/types";

export interface AboutInfo {
  headline: string;
  bio: string;
  avatarIconUrl: string;
  skills: string[];
  techStack: TechStack[];
  socialLinks: SocialLink[];
}
