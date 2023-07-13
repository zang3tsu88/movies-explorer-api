module.exports = {
  EMAIL_ERROR: 'Некорректный email',
  URL_ERROR: 'Некорректный URL адрес',
  PAGE_NOT_FOUND: '  (✖╭╮✖)   Запрашиваемая страница не существует.',
  USER_NOT_FOUND: 'Пользователь не найден.',
  SAVED_MOVIES_NOT_FOUND: 'Нет сохранненых фильмов.',
  MOVIE_NOT_FOUND: 'Фильм с указанным _id не найден',
  FORBIDDEN_DELETE_MOVIE: 'Нельзя удалить чужой фильм',
  INCORRECT_EMAIL_OR_PASS: 'Неправильная почта или пароль',
  INCORRECT_DATA: 'Переданы некорректные данные.',
  EMAIL_ALREADY_EXISTS: 'Пользователь с такой почтой уже существует.',
  AUTHORIZATION_REQUIRED: 'Необходимо авторизоваться',
  MOVIE_CREATED: 'Фильм успешно создан.',
  MOVIE_DELETED: 'Фильм удален.',
};

module.exports.URL_REGEX = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/;
