"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutRouter = void 0;
const express_1 = require("express");
const getAbout_1 = require("@/about/useCases/getAbout");
exports.aboutRouter = (0, express_1.Router)();
exports.aboutRouter.get("/", async (req, res, next) => {
    try {
        const aboutInfo = await (0, getAbout_1.getAbout)();
        res.status(200).json(aboutInfo);
    }
    catch (error) {
        next(error);
    }
});
