require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use(requestLogger);
app.use(router);
app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

mongoose.connect('mongodb://127.0.0.1:27017/filmsdb')
  .then(() => console.log('Connected to Films DB!'))
  .catch(() => console.log('DB connection error!'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
