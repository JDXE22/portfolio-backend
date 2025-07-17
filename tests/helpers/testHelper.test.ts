import {IProject} from "../../src/projects/Domain/project.domain"
import { DifficultyLevel, LiveStatus } from "../../src/shared/types"
export const initialProject: IProject[] = [{
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    techStack: ["React", "TypeScript", "Node.js", "Express"],
    liveStatus: LiveStatus.LIVE,
    difficultyLevel: DifficultyLevel.EASY,
    reasoning: "Demonstrates frontend and backend integration with a modern tech stack."
}]