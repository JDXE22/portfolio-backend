"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const helpers_1 = require("../shared/adapters/helpers");
/* ---------- Maps / configuration ---------- */
const errorMap = {
    CastError: { status: 400, message: () => "malformatted id" },
    ValidationError: { status: 400, message: (err) => err.message },
    JsonWebTokenError: { status: 401, message: () => "invalid token" },
    NotFoundError: { status: 404, message: () => "resource not found" },
    ForbiddenError: { status: 403, message: () => "forbidden" },
    UnauthorizedError: { status: 401, message: () => "unauthorized" },
    MongoServerError: {
        status: 400,
        message: (err) => `MongoDB error: ${err.message}`,
    },
    ConflictError: {
        status: 409,
        message: (err) => `Conflict: ${err.message}`,
    },
    InternalServerError: {
        status: 500,
        message: () => "internal server error",
    },
    BadRequestError: {
        status: 400,
        message: (err) => `Bad request: ${err.message}`,
    },
    DuplicateKeyError: {
        status: 400,
        message: (err) => `Duplicate key error: ${err.message}`,
    },
};
const multerMap = {
    LIMIT_FILE_SIZE: { status: 400, message: () => "File too large" },
    LIMIT_FILE_COUNT: { status: 400, message: () => "Too many files" },
    LIMIT_PART_COUNT: { status: 400, message: () => "Too many multipart parts" },
    LIMIT_FIELD_KEY: { status: 400, message: () => "Field name too long" },
    LIMIT_FIELD_VALUE: { status: 400, message: () => "Field value too long" },
    LIMIT_FIELD_COUNT: { status: 400, message: () => "Too many non-file fields" },
    LIMIT_UNEXPECTED_FILE: {
        status: 400,
        message: (e) => `Unexpected file field${e.field ? ` '${e.field}'` : ""}. Use 'files'.`,
    },
};
/* ---------- Fallback helpers ---------- */
const extractMessage = (error) => {
    if ((0, helpers_1.isNamedError)(error))
        return error.message;
    if ((0, helpers_1.isObject)(error) && typeof error["message"] === "string")
        return error["message"];
    return "Internal server error";
};
/* ---------- Error handler middleware ---------- */
const errorHandler = (error, req, res, next) => {
    if ((0, helpers_1.isDuplicateKey)(error)) {
        const duplicateKeyError = errorMap["DuplicateKeyError"];
        return res
            .status(duplicateKeyError.status)
            .json({ error: duplicateKeyError.message(error) });
    }
    if ((0, helpers_1.isMulterError)(error) && multerMap[error.code]) {
        const defaultMulter = multerMap[error.code];
        return res
            .status(defaultMulter.status)
            .json({ error: defaultMulter.message(error) });
    }
    if ((0, helpers_1.isNamedError)(error) && errorMap[error.name]) {
        const defaultError = errorMap[error.name];
        return res
            .status(defaultError.status)
            .json({ error: defaultError.message(error) });
    }
    return res.status(500).json({ error: extractMessage(error) });
};
exports.errorHandler = errorHandler;
