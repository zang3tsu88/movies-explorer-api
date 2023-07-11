const UnauthorizedError = require('../errors/UnauthorizedError');
const MESSAGES = require('../utils/constants');
const { verifyToken } = require('../utils/jwt');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new UnauthorizedError(MESSAGES.AUTHORIZATION_REQUIRED);
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = auth;
