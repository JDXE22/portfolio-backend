"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const config_env_1 = require("@/shared/config.env");
async function connectToDatabase() {
    if (!config_env_1.MONGO_URI) {
        throw new Error("MONGO_URI is not defined.");
    }
    try {
        await mongoose_1.default.connect(config_env_1.MONGO_URI);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}
