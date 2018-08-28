const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/api/user/register', userController.userRegister);
userRouter.post('/api/user/login', userController.userLogin);
userRouter.get('/api/user/info', userController.getUser);
userRouter.post('/api/user/logout', userController.userLogout);

module.exports = userRouter;