"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("@/db");
const server_1 = require("@/server");
const config_env_1 = require("@/shared/config.env");
const mongoose_1 = __importDefault(require("mongoose"));
async function startServer() {
    try {
        await (0, db_1.connectToDatabase)();
        console.log("Connected to MongoDB successfully.");
        server_1.server.listen(config_env_1.PORT);
        console.log(`Server is running on port ${config_env_1.PORT}`);
    }
    catch (error) {
        console.error(`Error starting the server ${error}`);
        await mongoose_1.default.disconnect();
        process.exit(1);
    }
}
startServer();
