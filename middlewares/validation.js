const { celebrate, Joi, Segments } = require('celebrate');
const isURL = require('validator/lib/isURL');
const MESSAGES = require('../utils/constants');

const validationCreateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validationLoginUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validationUpdateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const method = (value, helpers) => {
  if (isURL(value)) {
    return value;
  }
  return helpers.message(MESSAGES.URL_ERROR);
};

const validationCreateMovie = celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().integer().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(method, 'custom url validation'),
    trailerLink: Joi.string().required().custom(method, 'custom url validation'),
    thumbnail: Joi.string().required().custom(method, 'custom url validation'),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validationMovieId = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  validationCreateUser,
  validationLoginUser,
  validationUpdateUser,
  validationCreateMovie,
  validationMovieId,
};
