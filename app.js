require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use(router);
app.use(errorHandler);
app.use(errors());

mongoose.connect('mongodb://127.0.0.1:27017/filmsdb')
  .then(() => console.log('Connected to Films DB!'))
  .catch(() => console.log('DB connection error!'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
