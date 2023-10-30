import { Router } from 'express';

const UserApp = Router();

UserApp.get('/', (req, res) => {
  res.send('Hello from user app')
});

export default UserApp;