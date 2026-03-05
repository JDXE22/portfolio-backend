"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContact = getContact;
const contact_json_1 = __importDefault(require("../../contact/contact.json"));
const cloudinary_config_1 = require("../../shared/adapters/cloudinary.config");
async function getContact() {
    return {
        socialLinks: contact_json_1.default.socialLinks.map((link) => ({
            ...link,
            iconPublicId: cloudinary_config_1.CloudinaryAdapter.url(link.iconPublicId, {
                width: 32,
                height: 32,
            }),
        })),
    };
}
