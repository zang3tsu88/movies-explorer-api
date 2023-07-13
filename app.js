require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const limiter = require('./middlewares/rateLimit');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const { PORT, MONGO_URL } = process.env;
const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(cors());

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect(MONGO_URL)
  .then(() => process.stdout.write('Connected to DB!\n'))
  .catch(() => process.stdout.write('DB connection error!\n'));

app.listen(PORT, () => process.stdout.write(`Listening on port: ${PORT}\n`));
