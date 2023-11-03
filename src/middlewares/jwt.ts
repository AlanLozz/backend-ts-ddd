import { Request, NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

export const jwt_secret: string = process.env.JWT_SECRET || "";

export const signToken = (payload: Object) => jwt.sign(payload, jwt_secret, { expiresIn: "1h" });

export const verifyToken = ({ headers }: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = headers;
    if (!authorization) throw new Error("Bearer token is required");
    const decoded = jwt.verify(authorization, jwt_secret);
    if (!decoded) throw new Error("Something was wrong");
    next();
  } catch (error) {
    res.send(error);
  }
}
