const jwt = require('jsonwebtoken');
const { JWT_CFG } = require('./config');

function signToken(payload) {
  return jwt.sign(
    payload,
    JWT_CFG,
    { expiresIn: '7d' },
  );
}

function verifyToken(token) {
  return jwt.verify(
    token,
    JWT_CFG,
  );
}

module.exports = {
  signToken,
  verifyToken,
};
