const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { MESSAGES } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: MESSAGES.EMAIL_ERROR,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .orFail(() => new UnauthorizedError(MESSAGES.INCORRECT_EMAIL_OR_PASS))
    .then((user) => Promise.all([user, bcrypt.compare(password, user.password)]))
    .then(([user, passIsEqual]) => {
      if (!passIsEqual) {
        throw new UnauthorizedError(MESSAGES.INCORRECT_EMAIL_OR_PASS);
      }
      return user;
    });
};

// TODO(zang3tsu88): replace method after review.
//
// https://github.com/zang3tsu88/movies-explorer-api/pull/1#discussion_r1296023732
//
// userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
//   return this.findOne({ email }).select('+password')
//     .then((user) => {
//       if (!user || !bcrypt.compareSync(password, user.password)) {
//         throw new UnauthorizedError(MESSAGES.INCORRECT_EMAIL_OR_PASS);
//       }
//       return user;
//     });
// };

module.exports = mongoose.model('user', userSchema);
