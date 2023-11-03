import { UserEntity } from "../user.entity";
import { v4 as uuid } from 'uuid';
const data: UserEntity[] = [];

export const add = (user: UserEntity): UserEntity => {
  user._id = uuid();
  data.push(user);
  return user;
};

export const findOne = (_id: String): UserEntity | undefined => {
  const user = data.find(user => user._id === _id);
  return user;
};

export const list = (): UserEntity[] | undefined => {
  return data;
};