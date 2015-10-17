'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let User = new Schema({
    author          : ObjectId
  , name            : String
  , email           : String
  , hashedPassword  : String
  , type            : String
  , createdAt       : Date
  , updatedAt       : Date
});

mongoose.model('User', User);
