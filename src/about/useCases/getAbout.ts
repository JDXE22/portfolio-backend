import { AboutInfo } from "../domain/aboutInfo";
import aboutData from "../about.json";
export async function getAbout(): Promise<AboutInfo> {
  return {
    ...aboutData,
    socialLinks: aboutData.socialLinks.map((link) => ({
      name: link.name,
<<<<<<< HEAD
      url: link.url || undefined,
      username: link.username || undefined,
=======
      url: link.url,
      username: link.username,
>>>>>>> about
    })),
  };
}
