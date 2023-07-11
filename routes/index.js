const router = require('express').Router();
const userController = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const MESSAGES = require('../utils/constants');
const auth = require('../middlewares/auth');

router.post('/signup', userController.createUser);
router.post('/signin', userController.loginUser);

router.use(auth);

router.get('/users/me', userController.getUser);
router.patch('/users/me', userController.updateUser);

router.get('/movies', (req, res) => {
  res.send({ message: 'get /movies' });
});

router.post('/movies', (req, res) => {
  res.send({ message: 'post /movies' });
});

router.delete('/movies/:id', (req, res) => {
  res.send({ message: 'post /movies' });
});

router.use('*', (req, res, next) => {
  next(new NotFoundError(MESSAGES.PAGE_NOT_FOUND));
});

module.exports = router;
