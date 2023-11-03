import { Router } from 'express';
import { createUser, findUserByID, getUsers } from './controller/user.controller';
import { UserHandler, IDParam, ValidateToken } from './handlers/user.handler';

const UserApp = Router();

UserApp.post('/signup', UserHandler, createUser);
UserApp.get('/:_id', ValidateToken, IDParam, findUserByID);
UserApp.get('/', ValidateToken, getUsers);

export default UserApp;
