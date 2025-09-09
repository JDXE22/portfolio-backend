import { AboutInfo } from "@/about/domain/aboutInfo";
import aboutData from "@/about/about.json";
import { CloudinaryAdapter } from "@/shared/adapters/cloudinary.config";
import { ICONS } from "@/shared/types";

export async function getAbout(): Promise<AboutInfo[]> {
  const normalized: AboutInfo = {
    ...aboutData,
    avatarIconUrl: CloudinaryAdapter.url(aboutData.avatarIconUrl, {
      width: 150,
      height: 150,
      crop: "fill",
    }),
    socialLinks: aboutData.socialLinks.map((link) => ({
      ...link,
      iconPublicId: CloudinaryAdapter.url(link.iconPublicId),
    })),
    techStack: aboutData.techStack.map((tech) => ({
      ...tech,
      iconPublicId: CloudinaryAdapter.url(ICONS[tech.name], {
        width: 32,
        height: 32,
      }),
    })),
    education: aboutData.education.map((edu) => ({
      ...edu,
      iconPublicId: CloudinaryAdapter.url("education", {
        width: 32,
        height: 32,
      }),
    })),
  };
  return [normalized];
}
