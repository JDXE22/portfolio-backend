import { AboutInfo } from "../domain/aboutInfo";
import aboutData from "../about.json";
import { CloudinaryAdapter } from "../../shared/adapters/cloudinary.config";
import { ICONS } from "../../shared/types";
export async function getAbout(): Promise<AboutInfo> {
  return {
    ...aboutData,
    socialLinks: aboutData.socialLinks.map((link) => ({
      name: link.name,
      url: link.url,
      username: link.username,
      iconPublicId: CloudinaryAdapter.url(link.iconPublicId),
    })),
    techStack: aboutData.techStack.map((tech) => ({
      ...tech,
      iconPublicId: CloudinaryAdapter.url(ICONS[tech.name], {
        width: 32,
        height: 32,
      }),
    })),
  };
}
