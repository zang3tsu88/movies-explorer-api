const router = require('express').Router();
const userController = require('../controllers/users');
const movieController = require('../controllers/movies');
const NotFoundError = require('../errors/NotFoundError');
const MESSAGES = require('../utils/constants');
const auth = require('../middlewares/auth');
const {
  validationCreateUser,
  validationLoginUser,
  validationUpdateUser,
  validationCreateMovie,
  validationMovieId,
} = require('../middlewares/validation');

router.post('/signup', validationCreateUser, userController.createUser);
router.post('/signin', validationLoginUser, userController.loginUser);

router.use(auth);

router.get('/users/me', userController.getUser);
router.patch('/users/me', validationUpdateUser, userController.updateUser);

router.get('/movies', movieController.getMovies);
router.post('/movies', validationCreateMovie, movieController.createMovie);
router.delete('/movies/:_id', validationMovieId, movieController.deleteMovie);

router.use('*', (req, res, next) => {
  next(new NotFoundError(MESSAGES.PAGE_NOT_FOUND));
});

module.exports = router;
