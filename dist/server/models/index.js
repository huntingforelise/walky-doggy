var mongoose = require('mongoose');
var conf = require('../config');
var mongoUrl = process.env.NODE_ENV === 'test'
    ? "".concat(conf.mongoUrl, ":").concat(conf.mongoPort, "/").concat(conf.testDbName)
    : "".concat(conf.mongoUrl, ":").concat(conf.mongoPort, "/").concat(conf.dbName);
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose;
//# sourceMappingURL=index.js.map