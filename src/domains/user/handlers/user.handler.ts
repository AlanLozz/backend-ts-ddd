import { Request, Response, NextFunction } from 'express';
import { UserValidationSchema, ValidationID } from '../validators/user.validator';
import { verifyToken } from '../../../middlewares/jwt';

export const UserHandler = async ({ body }: Request, res: Response, next: NextFunction) => {
  try {
    const validation = await UserValidationSchema.parseAsync(body);
    if (validation) next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const IDParam = async ({ params }: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = params;
    const validation = await ValidationID.parseAsync({ _id });
    if (validation) next();
  } catch (error) {
    return res.status(400).send(error);
  }
}

export const ValidateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = verifyToken(req, res, next);
  } catch (error) {
    return res.status(400).send(error);
  }
}