import mongoose from "mongoose";
import { MONGO_URI } from "@/shared/config.env";

export async function connectToDatabase(): Promise<void> {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined.");
  }

  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
