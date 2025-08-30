"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorMap = {
    CastError: { status: 400, getMessage: () => "malformatted id" },
    ValidationError: { status: 400, getMessage: (err) => err.message },
    JsonWebTokenError: { status: 401, getMessage: () => "invalid token" },
    NotFoundError: { status: 404, getMessage: () => "resource not found" },
    ForbiddenError: { status: 403, getMessage: () => "forbidden" },
    UnauthorizedError: { status: 401, getMessage: () => "unauthorized" },
    MongoServerError: {
        status: 400,
        getMessage: (err) => `MongoDB error: ${err.message}`,
    },
    ConflictError: { status: 409, getMessage: (err) => `Conflict: ${err.message}` },
    InternalServerError: { status: 500, getMessage: () => "internal server error" },
    BadRequestError: { status: 400, getMessage: (err) => `Bad request: ${err.message}` },
    DuplicateKeyError: {
        status: 400,
        getMessage: (err) => `Duplicate key error: ${err.message}`,
    },
    default: { status: 500, getMessage: (err) => err.message },
};
const errorHandler = (error, req, res, next) => {
    console.error(error);
    if (error.code === 11000) {
        return res.status(400).json({ error: error.message });
    }
    const errorDefinition = errorMap[error.name] || errorMap.default;
    if (errorDefinition) {
        return res.status(errorDefinition.status).json({
            error: errorDefinition.getMessage(error),
        });
    }
    next(error);
};
exports.errorHandler = errorHandler;
