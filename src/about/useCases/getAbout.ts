import { AboutInfo } from '@/about/domain/aboutInfo';
import aboutData from '@/about/about.json';
import { CloudinaryAdapter } from '@/shared/adapters/cloudinary.config';
import { TechSkill } from '@/shared/types';

export async function getAbout(): Promise<AboutInfo[]> {
  const { avatarPublicId, ...rest } = aboutData;
  const normalized: AboutInfo = {
    ...rest,
    techSkills: rest.techSkills as TechSkill[],
    avatarIconUrl: CloudinaryAdapter.url(avatarPublicId, {
      crop: 'fill',
      width: 128,
      height: 128,
    }),
  };
  return [normalized];
}
