import { Request, Response } from 'express';
import bycrypt from 'bcryptjs';
import { add, findOne, list } from '../service/user.mock';
import { signToken } from "../../../middlewares/jwt";

export const createUser = async ({ body, headers }: Request, res: Response) => {
  body.password =  bycrypt.hashSync(body.password, 10);
  const user = add(body);
  const token = signToken(user);
  res.status(200).json({
    created: true,
    token,
    _id: user._id,
  });
}

export const findUserByID = ({ params }: Request, res: Response) => {
  const user = findOne(params._id);
  if(!user) {
    return res.status(404).json({
      error: "No se encontro al usuario"
    });
  }
  return res.status(200).json({ user });
};

export const getUsers = (req: Request, res: Response) => {
  return res.status(200).json({ users: list });
};