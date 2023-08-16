const isURL = require('validator/lib/isURL');
const { MESSAGES } = require('./constants');

const urlCustomValidation = (value, helpers) => {
  if (isURL(value)) {
    return value;
  }
  return helpers.message(MESSAGES.URL_ERROR);
};

module.exports = urlCustomValidation;
