"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const project_router_1 = require("./projects/adapters/project.router");
const error_handler_1 = require("@/shared/error.handler");
const contact_router_1 = require("@/contact/adapters/contact.router");
const about_router_1 = require("@/about/adapters/about.router");
const http_1 = __importDefault(require("http"));
exports.server = (0, express_1.default)();
exports.httpServer = http_1.default.createServer(exports.server);
exports.server.use(express_1.default.json());
exports.server.use("/projects", project_router_1.projectRouter);
exports.server.use("/contact", contact_router_1.contactRouter);
exports.server.use("/about", about_router_1.aboutRouter);
exports.server.use(error_handler_1.errorHandler);
