const http2 = require('http2').constants;
const { MESSAGES } = require('../utils/constants');

// module.exports = (err, req, res, next) => {
//   const { statusCode = http2.HTTP_STATUS_INTERNAL_SERVER_ERROR, message } = err;
//   const { NODE_ENV } = process.env;

//   const userMessage = {
//     message: statusCode === http2.HTTP_STATUS_INTERNAL_SERVER_ERROR
//       ? MESSAGES.INTERNAL_SERVER_ERROR
//       : message,
//   };

//   if (NODE_ENV !== 'production') { userMessage.stack = err.stack; }
//   /*
//   Тут я подумал что в dev режиме можно иметь err.stack, по этому добавил такую конструкцию,
//   но мне тогда надо в package.json отредактировать dev скрипт на это:

//         "dev": "set \"NODE_ENV=dev\" && nodemon app.js",

//   вот, жду отмажки, или совета как лучше и стоит вообще реализовывать

//   */

//   res.status(statusCode).send(userMessage);

//   next();
// };

module.exports = (err, req, res, next) => {
  const { statusCode = http2.HTTP_STATUS_INTERNAL_SERVER_ERROR, message } = err;

  res.status(statusCode).send({
    message: statusCode === http2.HTTP_STATUS_INTERNAL_SERVER_ERROR
      ? MESSAGES.INTERNAL_SERVER_ERROR
      : message,
    errorStack: err.stack,
  });

  next();
};
