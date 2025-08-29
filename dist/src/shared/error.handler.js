const errorMap = {
    CastError: { status: 400, getMessage: () => "malformatted id" },
    ValidationError: { status: 400, getMessage: (err) => err.message },
    JsonWebTokenError: { status: 401, getMessage: () => "invalid token" },
    NotFoundError: { status: 404, getMessage: () => "resource not found" },
    ForbiddenError: { status: 403, getMessage: () => "forbidden" },
    UnauthorizedError: { status: 401, getMessage: () => "unauthorized" },
    default: { status: 500, getMessage: (err) => err.message },
};
export const errorHandler = (error, req, res, next) => {
    console.error(error);
    if (error.name === "MongoServerError" &&
        error.code === 11000) {
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
