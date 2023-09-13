const mongoose = require('mongoose');
const http2 = require('http2').constants;
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const { signToken } = require('../utils/jwt');
const {
  MESSAGES,
  MONGOOSE_DUPLICATE_ERROR_NAME,
  MONGOOSE_DUPLICATE_ERROR_CODE,
} = require('../utils/constants');

const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => {
      res.status(http2.HTTP_STATUS_CREATED).send({
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (
        err.name === MONGOOSE_DUPLICATE_ERROR_NAME
        && err.code === MONGOOSE_DUPLICATE_ERROR_CODE
      ) {
        return next(new ConflictError(MESSAGES.EMAIL_ALREADY_EXISTS));
      }

      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError(MESSAGES.INCORRECT_DATA));
      }

      return next(err);
    });
};

const loginUser = (req, res, next) => {
  User.findUserByCredentials(req.body.email, req.body.password)
    .then((user) => {
      const token = signToken({ _id: user._id });

      res.send({ token });
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError(MESSAGES.USER_NOT_FOUND))
    .then((user) => res.send(user))
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
    .orFail(() => new NotFoundError(MESSAGES.USER_NOT_FOUND))
    .then((user) => res.send(user))
    .catch((err) => {
      if (
        err.name === MONGOOSE_DUPLICATE_ERROR_NAME
        && err.code === MONGOOSE_DUPLICATE_ERROR_CODE
      ) {
        return next(new ConflictError(MESSAGES.EMAIL_ALREADY_EXISTS));
      }

      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError(MESSAGES.INCORRECT_DATA));
      }

      return next(err);
    });
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
};
