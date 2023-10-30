import { Router } from 'express'
import UserApp from './domains/user/user.app';
const GlobalRouter = Router();

GlobalRouter.use("/user", UserApp);

module.exports = GlobalRouter;