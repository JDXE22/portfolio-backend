import { AboutInfo } from '@/about/domain/aboutInfo';
import aboutData from '@/about/about.json';
import { CloudinaryAdapter } from '@/shared/adapters/cloudinary.config';
import { TechSkill } from '@/shared/types';

export async function getAbout(): Promise<AboutInfo[]> {
  const normalized: AboutInfo = {
    ...aboutData,
    techSkills: aboutData.techSkills as TechSkill[],
    avatarIconUrl: CloudinaryAdapter.url(aboutData.avatarPublicId, {
      crop: 'fill',
      width: 128,
      height: 128,
    }),
  };
  return [normalized];
}
