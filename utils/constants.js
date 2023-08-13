const MESSAGES = {
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
  INTERNAL_SERVER_ERROR: 'На сервере произошла ошибка',

  // TODO(zang3tsu88): uncomment or delete based on DB messages in app.js
  // DB_CONNECTION_SUCCESS: 'Connected to DB!',
  // DB_CONNECTION_FAIL: 'DB connection error!',
};

const MONGOOSE_DUPLICATE_ERROR_CODE = 11000;
const MONGOOSE_DUPLICATE_ERROR_NAME = 'MongoServerError';

module.exports = {
  MESSAGES,
  MONGOOSE_DUPLICATE_ERROR_NAME,
  MONGOOSE_DUPLICATE_ERROR_CODE,
};
