"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const types_1 = require("@/shared/types");
const projectSchema = new mongoose_1.Schema({
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
        enum: Object.values(types_1.LiveStatus),
        required: true,
        default: types_1.LiveStatus.LIVE,
    },
    difficultyLevel: {
        type: String,
        enum: Object.values(types_1.DifficultyLevel),
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
exports.ProjectModel = mongoose_1.default.model("Project", projectSchema);
