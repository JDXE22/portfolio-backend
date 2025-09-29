import mongoose, { Schema } from "mongoose";
import type { HydratedDocument } from "mongoose";
import { DifficultyLevel, IProject, LiveStatus } from "@/shared/types";

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
  role: {
    type: String,
  }
});

type ProjectDoc = HydratedDocument<IProject>;

projectSchema.virtual("id").get(function (this: ProjectDoc) {
  return this._id.toHexString();
});
projectSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

export const ProjectModel = mongoose.model("Project", projectSchema);
