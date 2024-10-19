import { Request, Response, NextFunction } from "express";

export function errorhandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.log("Error Raised!! Panic");
  console.log(err.stack);

  res.status(500).json({ message: "Internal Server Error" });
}
