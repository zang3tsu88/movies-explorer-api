const http2 = require('http2').constants;

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.HTTP_STATUS_UNAUTHORIZED;
    this.name = 'UnauthorizedError';
  }
}

module.exports = UnauthorizedError;
