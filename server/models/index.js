const mongoose = require('mongoose');
const conf = require('../config');

const mongoUrl =
  process.env.NODE_ENV === 'test'
    ? `${conf.mongoUrl}:${conf.mongoPort}/${conf.testDbName}`
    : `${conf.mongoUrl}:${conf.mongoPort}/${conf.dbName}`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;

