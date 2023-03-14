"use strict";
var mongoose = require("./");
var Schema = mongoose.Schema;
var walkSchema = new Schema({
    ownerID: {
        type: String,
        required: true,
    },
    dogName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    pickUpLocation: {
        type: String,
        required: true,
    },
    walkerID: String,
    imageURL: Array,
    coordinates: Array,
    didPee: Boolean,
    didPoo: Boolean,
});
var walk = mongoose.model("walk", walkSchema);
module.exports = walk;
//# sourceMappingURL=walk.js.map