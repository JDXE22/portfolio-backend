"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = getAbout;
const about_json_1 = __importDefault(require("@/about/about.json"));
const cloudinary_config_1 = require("@/shared/adapters/cloudinary.config");
const types_1 = require("@/shared/types");
async function getAbout() {
    return {
        ...about_json_1.default,
        avatarIconUrl: cloudinary_config_1.CloudinaryAdapter.url(about_json_1.default.avatarIconUrl, {
            width: 150,
            height: 150,
            crop: "fill",
        }),
        socialLinks: about_json_1.default.socialLinks.map((link) => ({
            ...link,
            iconPublicId: cloudinary_config_1.CloudinaryAdapter.url(link.iconPublicId),
        })),
        techStack: about_json_1.default.techStack.map((tech) => ({
            ...tech,
            iconPublicId: cloudinary_config_1.CloudinaryAdapter.url(types_1.ICONS[tech.name], {
                width: 32,
                height: 32,
            }),
        })),
    };
}
