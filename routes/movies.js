const movieRouter = require('express').Router();
const movieController = require('../controllers/movies');
const {
  validationCreateMovie,
  validationMovieId,
} = require('../middlewares/validation');

movieRouter.get('/', movieController.getMovies);
movieRouter.post('/', validationCreateMovie, movieController.createMovie);
movieRouter.delete('/:_id', validationMovieId, movieController.deleteMovie);

module.exports = movieRouter;
