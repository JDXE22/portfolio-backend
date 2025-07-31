import { AboutInfo } from "../domain/aboutInfo";
import aboutData from "../about.json";
import { SocialLink } from "../../shared/types";
export async function getAbout(): Promise<AboutInfo> {
  return {
    ...aboutData,
    socialLinks: aboutData.socialLinks.map((link) => ({
      name: link.name,
      url: link.url,
      username: link.username || "",
    })) as SocialLink[],
  };
}
