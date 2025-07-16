import { Document } from "mongoose"
import { DifficultyLevel, LiveStatus } from "../../shared/types"

export interface Project extends Document {
    id: string
    title: string
    description: string
    techStack: string[]
    imgUrl?:string
    repoUrl?: string
    liveUrl?: string
    liveStatus: LiveStatus
    difficultyLevel: DifficultyLevel
    reasoning: string
}