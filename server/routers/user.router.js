const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');

userRouter.post('/register', userController.userRegister);
userRouter.post('/login', userController.userLogin);
userRouter.get('/info', userController.getUser);
userRouter.post('/logout', userController.userLogout);
userRouter.get('/auth', userController.verifyAuth);

module.exports = userRouter;