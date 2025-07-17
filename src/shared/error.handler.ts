import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

interface ErrorDefinition {
  status: number;
  getMessage: (error: any) => string;
}

const errorMap: Record<string, ErrorDefinition> = {
  CastError: { status: 400, getMessage: () => "malformatted id" },
  ValidationError: { status: 400, getMessage: (err) => err.message },
  JsonWebTokenError: { status: 401, getMessage: () => "invalid token" },
  NotFoundError: { status: 404, getMessage: () => "resource not found" },
  ForbiddenError: { status: 403, getMessage: () => "forbidden" },
  UnauthorizedError: { status: 401, getMessage: () => "unauthorized" },
  default: { status: 500, getMessage: (err) => err.message },
};

export const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  if (
    (error as any).name === "MongoServerError" &&
    (error as any).code === 11000
  ) {
    return res.status(400).json({ error: error.message });
  }

  const errorDefinition = errorMap[(error as any).name] || errorMap.default;
  if (errorDefinition) {
    return res.status(errorDefinition.status).json({
      error: errorDefinition.getMessage(error),
    });
  }

  next(error);
};
