"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
const sendContact_1 = require("../../contact/useCases/sendContact");
exports.contactRouter = (0, express_1.Router)();
exports.contactRouter.get('/', async (req, res, next) => {
    try {
        const contactInfo = await (0, sendContact_1.getContact)();
        res.status(200).json(contactInfo);
    }
    catch (err) {
        next(err);
    }
});
