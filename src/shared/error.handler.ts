import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { MulterCode, MulterErrorLike, NamedErrorLike } from "./types";

/* ---------- Maps / configuration ---------- */

const errorMap: Record<
  string,
  { status: number; message: (e: NamedErrorLike) => string }
> = {
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

const multerMap: Record<
  MulterCode,
  { status: number; message: (error: MulterErrorLike) => string }
> = {
  LIMIT_FILE_SIZE: { status: 400, message: () => "File too large" },
  LIMIT_FILE_COUNT: { status: 400, message: () => "Too many files" },
  LIMIT_PART_COUNT: { status: 400, message: () => "Too many multipart parts" },
  LIMIT_FIELD_KEY: { status: 400, message: () => "Field name too long" },
  LIMIT_FIELD_VALUE: { status: 400, message: () => "Field value too long" },
  LIMIT_FIELD_COUNT: { status: 400, message: () => "Too many non-file fields" },
  LIMIT_UNEXPECTED_FILE: {
    status: 400,
    message: (e) =>
      `Unexpected file field${e.field ? ` '${e.field}'` : ""}. Use 'files'.`,
  },
};

export const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((error as any).code === 11000) {
    return res.status(400).json({ error: error.message });
  }

  const errorDefinition = errorMap[(error as any).name] || errorMap.default;
  if (errorDefinition) {
    return res.status(errorDefinition.status).json({
      error: errorDefinition.message(error),
    });
  }

  next(error);
};
