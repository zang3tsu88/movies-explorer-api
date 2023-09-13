const http2 = require('http2').constants;

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.HTTP_STATUS_FORBIDDEN;
    this.name = 'ForbiddenError';
  }
}

module.exports = ForbiddenError;
