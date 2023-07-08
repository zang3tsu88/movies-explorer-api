const { celebrate, Joi, errors, Segments } = require('celebrate');

// {
//   [Segments.BODY]: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().min(8),
//     name: Joi.string().required().min(2).max(30),
//     age: Joi.number().integer().required().min(18),
//     about: Joi.string().min(2).max(30),
//   })
// }
// https://www.npmjs.com/package/celebrate
// https://practicum.yandex.ru/learn/web/courses/4da123a7-d4aa-4bc2-b299-b48f921da09c/sprints/135798/topics/f539cec7-7bfb-4e0d-87e0-3f92d1ddcfdb/lessons/39dd7359-fe76-46b9-a900-7e936ca7eac9/
