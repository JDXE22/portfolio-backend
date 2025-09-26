import {
  DuplicateKeyErrorLike,
  MULTER_ERROR_CODES,
  MulterCode,
  MulterErrorLike,
  NamedErrorLike,
} from "../types";

export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const hasString = (
  object: Record<string, unknown>,
  key: string
): object is Record<string, string> => typeof object[key] === "string";

export const isMulterError = (error: unknown): error is MulterErrorLike => {
  if (!isObject(error)) return false;

  const code = (error as Record<string, unknown>)["code"];

  if (typeof code !== "string" || !MULTER_ERROR_CODES.has(code as MulterCode))
    return false;
  const name = (error as { name?: unknown }).name;
  if (name && name !== "MulterError") return false;

  return true;
};

export const isNamedError = (error: unknown): error is NamedErrorLike =>
  isObject(error) && hasString(error, "name") && hasString(error, "message");

export const isDuplicateKey = (
  error: unknown
): error is DuplicateKeyErrorLike =>
  isObject(error) &&
  error["name"] === "MongoServerError" &&
  error["code"] === 11000 &&
  hasString(error as Record<string, unknown>, "message");
