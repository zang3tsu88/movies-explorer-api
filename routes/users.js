const userRouter = require('express').Router();
const userController = require('../controllers/users');
const { validationUpdateUser } = require('../middlewares/validation');

userRouter.get('/me', userController.getUser);
userRouter.patch('/me', validationUpdateUser, userController.updateUser);

module.exports = userRouter;
