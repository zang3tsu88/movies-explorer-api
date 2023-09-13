const http2 = require('http2').constants;

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = http2.HTTP_STATUS_CONFLICT;
    this.name = 'ConflictError';
  }
}

module.exports = ConflictError;
