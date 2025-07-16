import { server } from "./server";
import { PORT } from "./shared/config.env";
import mongoose from "mongoose";
import { MONGO_URI } from "./shared/config.env";

async function startServer(): Promise<void> {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined.");
  }
  try {
    await mongoose.connect(MONGO_URI);
    server.listen(PORT);
  } catch (error) {
    console.error("Error starting the server:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

startServer();
