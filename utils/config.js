const {
  PORT, MONGO_URL, NODE_ENV, JWT_SECRET,
} = process.env;

const PORT_CFG = NODE_ENV === 'production' ? PORT : 3001;
const DB_CFG = NODE_ENV === 'production' ? MONGO_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';
const JWT_CFG = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

module.exports = {
  PORT_CFG,
  DB_CFG,
  JWT_CFG,
};
