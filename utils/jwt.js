const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

function signToken(payload) {
  return jwt.sign(
    payload,
    NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    { expiresIn: '7d' },
  );
}

function verifyToken(token) {
  return jwt.verify(
    token,
    NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  );
}

module.exports = {
  signToken,
  verifyToken,
};
