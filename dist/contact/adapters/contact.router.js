"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
const sendContact_1 = require("@/contact/useCases/sendContact");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.contactRouter = (0, express_1.Router)();
exports.contactRouter.post("/", upload.array("attachments"), async (req, res, next) => {
    try {
        const result = await (0, sendContact_1.sendContact)(req.body, next, req.files);
        res.status(200).json({ success: result });
    }
    catch (err) {
        next(err);
    }
});
