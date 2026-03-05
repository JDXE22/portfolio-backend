"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = getAbout;
const about_json_1 = __importDefault(require("../../about/about.json"));
const cloudinary_config_1 = require("../../shared/adapters/cloudinary.config");
async function getAbout() {
    const normalized = {
        ...about_json_1.default,
        techSkills: about_json_1.default.techSkills,
        avatarIconUrl: cloudinary_config_1.CloudinaryAdapter.url(about_json_1.default.avatarIconUrl, {
            crop: 'fill',
            width: 128,
            height: 128,
        }),
    };
    return [normalized];
}
