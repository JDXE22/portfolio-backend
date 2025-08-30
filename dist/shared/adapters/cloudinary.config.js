"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryAdapter = void 0;
const cloudinary_1 = require("cloudinary");
const config_env_1 = require("@/shared/config.env");
cloudinary_1.v2.config({
    cloud_name: config_env_1.CLOUDINARY_CLOUD_NAME,
    api_key: config_env_1.CLOUDINARY_API_KEY,
    api_secret: config_env_1.CLOUDINARY_API_SECRET,
});
exports.CloudinaryAdapter = {
    url: (publicId, options) => {
        return cloudinary_1.v2.url(publicId, options);
    },
};
