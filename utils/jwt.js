const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const JWT_DEV_SECRET = 'dev-secret';

function signToken(payload) {
  return jwt.sign(
    payload,
    NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_SECRET, // Мне кажется тут можно оптимизировать, но не знаю как лучше. Есть мысль перенести в конфиг эту строчку.
    { expiresIn: '7d' },
  );
}

function verifyToken(token) {
  return jwt.verify(
    token,
    NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_SECRET, // Мне кажется тут можно оптимизировать, но не знаю как лучше. Есть мысль перенести в конфиг эту строчку.
  );
}

module.exports = {
  signToken,
  verifyToken,
};
