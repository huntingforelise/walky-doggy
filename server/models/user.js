"use strict";

const mongoose = require("./");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  isOwner: Boolean,
  isWalker: Boolean,
  scheduledWalks: Array,
  subscribedWalks: Array,
  username: String,
  email: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;
