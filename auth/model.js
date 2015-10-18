'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Auth = new Auth({
  user: {
    type: ObjectId,
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  }
})
