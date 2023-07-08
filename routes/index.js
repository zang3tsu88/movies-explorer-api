const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

router.get('/', (req, res) => {
  res.send({ message: 'Responce received from router' });
});
router.post('/signup', (req, res) => {
  res.send({ message: 'post /signup' });
});
router.post('/signin', (req, res) => {
  res.send({ message: 'post /signin' });
});

// Защитить эти роуты авторизацией:
router.get('/users/me', (req, res) => {
  res.send({ message: 'get /users/me' });
});

router.patch('/users/me', (req, res) => {
  res.send({ message: 'patch /users/me' });
});

router.get('/movies', (req, res) => {
  res.send({ message: 'get /movies' });
});

router.post('/movies', (req, res) => {
  res.send({ message: 'post /movies' });
});

router.delete('/movies/:id', (req, res) => {
  res.send({ message: 'post /movies' });
});

router.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемая страница не существует.'));
});

module.exports = router;
