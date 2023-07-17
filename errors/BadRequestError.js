const http2 = require('http2').constants;

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.HTTP_STATUS_BAD_REQUEST;
    this.name = 'BadRequestError';
  }
}

module.exports = BadRequestError;
