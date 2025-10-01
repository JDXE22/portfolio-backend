import { AboutInfo } from "@/about/domain/aboutInfo";
import aboutData from "@/about/about.json";
import { CloudinaryAdapter } from "@/shared/adapters/cloudinary.config";

export async function getAbout(): Promise<AboutInfo[]> {
  const normalized: AboutInfo = {
    ...aboutData,
    avatarIconUrl: CloudinaryAdapter.url(aboutData.avatarIconUrl, {
      crop: "fill",
      width: 128,
      height: 128,
    }),
    socialLinks: aboutData.socialLinks.map((link) => ({
      ...link,
      iconPublicId: CloudinaryAdapter.url(link.iconPublicId, {
        width: 32,
        height: 32,
      }),
    })),
  };
  return [normalized];
}
