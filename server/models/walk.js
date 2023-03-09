"use strict";

const mongoose = require("./");
const Schema = mongoose.Schema;

const walkSchema = new Schema({
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

const walk = mongoose.model("walk", walkSchema);

module.exports = walk;
