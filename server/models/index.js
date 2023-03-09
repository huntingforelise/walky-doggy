const mongoose = require("mongoose");
const conf = require("../config");

mongoose.connect(`${conf.mongoUrl}:${conf.mongoPort}/${conf.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
