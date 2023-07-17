require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { PORT_CFG, DB_CFG } = require('./utils/config');
const MESSAGES = require('./utils/constants');

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

mongoose.connect(DB_CFG)
  .then(() => process.stdout.write('Connected to DB!\n'))
  .catch(() => process.stdout.write('DB connection error!\n'));

app.listen(PORT_CFG, () => process.stdout.write(`Listening on port: ${PORT_CFG}\n`));
