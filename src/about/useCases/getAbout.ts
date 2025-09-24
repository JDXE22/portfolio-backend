import { AboutInfo } from "@/about/domain/aboutInfo";
import aboutData from "@/about/about.json";
import { CloudinaryAdapter } from "@/shared/adapters/cloudinary.config";

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
      iconPublicId: CloudinaryAdapter.url(tech.iconPublicId, {
        width: 32,
        height: 32,
      }),
    })),
    cerficateUrl: aboutData.certificateUrl,
    cvUrl: aboutData.cvUrl,
  };
  return [normalized];
}
