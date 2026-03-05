"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MULTER_ERROR_CODES = exports.ICONS = exports.KnowledgeLevel = exports.DifficultyLevel = exports.LiveStatus = void 0;
// Shared types and enums
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
var KnowledgeLevel;
(function (KnowledgeLevel) {
    KnowledgeLevel["FOUNDATIONAL"] = "Foundational";
    KnowledgeLevel["INTERMEDIATE"] = "Intermediate";
    KnowledgeLevel["ADVANCED"] = "Advanced";
    KnowledgeLevel["EXPERT"] = "Expert";
})(KnowledgeLevel || (exports.KnowledgeLevel = KnowledgeLevel = {}));
exports.ICONS = {
    TypeScript: 'typescript',
    JavaScript: 'javascript',
    React: 'react',
    NodeJS: 'nodejs',
    Express: 'express',
    MongoDB: 'mongodb',
    PostgreSQL: 'postgresql',
    Docker: 'docker',
    SQL: 'sql',
    AWS: 'aws',
    NestJS: 'nestjs',
    Stripe: 'stripe',
    Nodemailer: 'nodemailer',
    HTML5: 'html5',
    CSS3: 'css3',
    Tailwind: 'tailwindcss',
    Swagger: 'swagger',
};
exports.MULTER_ERROR_CODES = new Set([
    'LIMIT_FILE_SIZE',
    'LIMIT_FILE_COUNT',
    'LIMIT_PART_COUNT',
    'LIMIT_FIELD_KEY',
    'LIMIT_FIELD_VALUE',
    'LIMIT_FIELD_COUNT',
    'LIMIT_UNEXPECTED_FILE',
]);
