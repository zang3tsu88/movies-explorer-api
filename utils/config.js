const { PORT, MONGO_URL, NODE_ENV } = process.env;

const PORT_CFG = NODE_ENV === 'production' ? PORT : 3001;
const DB_CFG = NODE_ENV === 'production' ? MONGO_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  PORT_CFG,
  DB_CFG,
};
