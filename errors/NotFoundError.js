const http2 = require('http2').constants;

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.HTTP_STATUS_NOT_FOUND;
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
