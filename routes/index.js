const router = require('express').Router();
const userController = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const { MESSAGES } = require('../utils/constants');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const {
  validationCreateUser,
  validationLoginUser,
} = require('../middlewares/validation');

router.post('/signup', validationCreateUser, userController.createUser);
router.post('/signin', validationLoginUser, userController.loginUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(MESSAGES.PAGE_NOT_FOUND));
});

module.exports = router;
