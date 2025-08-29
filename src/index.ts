import { connectToDatabase } from "@/db";
import { server } from "@/server";
import { PORT } from "@/shared/config.env";
import mongoose from "mongoose";

async function startServer(): Promise<void> {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB successfully.");
    server.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error(`Error starting the server ${error}`);
    await mongoose.disconnect();
    process.exit(1);
  }
}

startServer();
