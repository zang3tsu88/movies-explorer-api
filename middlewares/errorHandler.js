module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  const { NODE_ENV } = process.env;

  const userMessage = {
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  };

  if (NODE_ENV !== 'production') { userMessage.stack = err.stack; }

  res.status(statusCode).send(userMessage);

  next();
};

// module.exports = (err, req, res, next) => {
//   const { statusCode = 500, message } = err;
//   res.status(statusCode).send({
//     message: statusCode === 500
//       ? 'На сервере произошла ошибка'
//       : message,
//   });

//   next();
// };
