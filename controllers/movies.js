const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { MESSAGES } = require('../utils/constants');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    /* TODO(zang3tsu88): clarify why this orFail and err message is not needed.
     *
     * https://github.com/zang3tsu88/movies-explorer-api/pull/1#discussion_r1268546005
     *
     * Когда запрос подразумевает поиск нескольких объектов или строк,
     * этой ошибки быть не может. Отсутствие объектов или строк
     * в таком случае считается нормальным результатом.
     * Нужно исправить здесь и в других местах.
     */
    .orFail(() => new NotFoundError(MESSAGES.SAVED_MOVIES_NOT_FOUND))
    .then((movie) => res.send(movie))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then(() => res.send({ message: MESSAGES.MOVIE_CREATED }))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestError(err.message));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail(() => new NotFoundError(MESSAGES.MOVIE_NOT_FOUND))
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) {
        throw new UnauthorizedError(MESSAGES.FORBIDDEN_DELETE_MOVIE);
      }
      // TODO(zang3tsu88): remove method.
      // return Movie.findByIdAndDelete(req.params._id);
      return movie.deleteOne();
    })
    .then(() => res.send({ message: MESSAGES.MOVIE_DELETED }))
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequestError(MESSAGES.INCORRECT_DATA));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
