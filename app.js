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

// TODO(zang3tsu88): perhaps replace DB connect { MESSAGES } with constants
// const { MESSAGES } = require('./utils/constants');

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
  .then(() => console.log('Connected to DB!'))
  .catch(() => console.log('DB connection error!'));

app.listen(PORT_CFG, () => console.log(`Listening on port: ${PORT_CFG}`));
