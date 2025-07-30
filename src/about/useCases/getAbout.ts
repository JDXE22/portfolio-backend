import { AboutInfo } from "../domain/aboutInfo";
import aboutData from "../about.json";
export function getAbout():AboutInfo {
    return aboutData;
}