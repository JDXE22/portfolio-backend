import mongoose, { Schema } from "mongoose";
import { DifficultyLevel, LiveStatus } from "../../shared/types";

const projectSchema = new Schema({

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
  },
  difficultyLevel: {
    type: String,
    enum: Object.values(DifficultyLevel),
    required: true,
  },
});

projectSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        (returnedObject as any).id = (returnedObject as any)._id?.toString();
        delete (returnedObject as any)._id;
        delete (returnedObject as any).__v;
    }
})

export const ProjectModel = mongoose.model("Project", projectSchema);


