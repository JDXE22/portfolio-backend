"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICONS = exports.DifficultyLevel = exports.LiveStatus = void 0;
var LiveStatus;
(function (LiveStatus) {
    LiveStatus["LIVE"] = "Live";
    LiveStatus["DOWN"] = "Down";
    LiveStatus["MAINTENANCE"] = "Maintenance";
    LiveStatus["DEVELOPMENT"] = "Development";
})(LiveStatus || (exports.LiveStatus = LiveStatus = {}));
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["EASY"] = "Easy";
    DifficultyLevel["MEDIUM"] = "Medium";
    DifficultyLevel["HARD"] = "Hard";
})(DifficultyLevel || (exports.DifficultyLevel = DifficultyLevel = {}));
exports.ICONS = {
    TypeScript: "typescript",
    JavaScript: "javascript",
    React: "react",
    NodeJS: "nodejs",
    Express: "express",
    MongoDB: "mongodb",
    PostgreSQL: "postgresql",
    Docker: "docker",
    SQL: "sql",
    AWS: "aws",
    NestJS: "nestjs",
    Stripe: "stripe",
    Nodemailer: "nodemailer",
    HTML5: "html5",
    CSS3: "css3",
    Tailwind: "tailwindcss",
    Swagger: "swagger",
};
