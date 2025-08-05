import { AboutInfo } from "../domain/aboutInfo";
import aboutData from "../about.json";
export async function getAbout(): Promise<AboutInfo> {
  return {
    ...aboutData,
    socialLinks: aboutData.socialLinks.map((link) => ({
      name: link.name,
      url: link.url,
      username: link.username,
    })),
  };
}
