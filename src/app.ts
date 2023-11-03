import { Router } from 'express'
import UserRouter from './domains/user/user.router';
const GlobalRouter = Router();

GlobalRouter.use("/user", UserRouter);

module.exports = GlobalRouter;