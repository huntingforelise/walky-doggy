"use strict";
var mongoose = require("./");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    isOwner: Boolean,
    isWalker: Boolean,
    scheduledWalks: Array,
    subscribedWalks: Array,
    username: String,
    email: String,
    password: String,
});
var user = mongoose.model("user", userSchema);
module.exports = user;
//# sourceMappingURL=user.js.map