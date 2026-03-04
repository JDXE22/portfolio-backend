import { TechSkill } from '@/shared/types';

export interface AboutInfo {
  headline: string;
  bio: string;
  avatarIconUrl: string;
  techSkills: TechSkill[];
  softSkills: string[];
}
