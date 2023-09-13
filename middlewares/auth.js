const UnauthorizedError = require('../errors/UnauthorizedError');
const { MESSAGES } = require('../utils/constants');
const { verifyToken } = require('../utils/jwt');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return next(new UnauthorizedError(MESSAGES.AUTHORIZATION_REQUIRED));
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = verifyToken(token);
    req.user = payload;
    return next();
  } catch (err) {
    // TODO(zang3tsu88): not sure which error to pass in next instead of err.
    // https://github.com/zang3tsu88/movies-explorer-api/pull/1#discussion_r1268550779
    // next(new UnauthorizedError(MESSAGES.AUTHORIZATION_REQUIRED)); ?
    return next(err);
  }
};

module.exports = auth;
