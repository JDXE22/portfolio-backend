import mongoose, { Schema } from "mongoose";
import { DifficultyLevel, LiveStatus } from "../../shared/types.ts";
import { IProject } from "../domain/project.domain.ts";

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  imgUrl: {
    type: String,
  },
  repoUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },

  reasoning: {
    type: String,
    required: true,
  },
  liveStatus: {
    type: String,
    enum: Object.values(LiveStatus),
    required: true,
    default: LiveStatus.LIVE,
  },
  difficultyLevel: {
    type: String,
    enum: Object.values(DifficultyLevel),
    required: true,
  },
});

projectSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
projectSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

export const ProjectModel = mongoose.model("Project", projectSchema);
