import {  SocialLink  } from "@/shared/types";

export interface AboutInfo {
  headline: string;
  bio: string;
  avatarIconUrl: string;
  skills: string[];
  socialLinks: SocialLink[];
}
