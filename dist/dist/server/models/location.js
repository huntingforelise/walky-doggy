var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var locationSchema = new Schema({
    eventId: String,
    coordinates: [Number]
});
var locationModel = mongoose.model("locations", locationSchema);
module.exports = locationModel;
//# sourceMappingURL=location.js.map
//# sourceMappingURL=location.js.map