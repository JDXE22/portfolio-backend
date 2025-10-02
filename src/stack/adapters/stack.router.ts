import { NextFunction, Request, Response, Router } from "express";
import { getStack } from "../useCases/getStack";

export const stackRouterv1 = Router()

stackRouterv1.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = getStack()
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})