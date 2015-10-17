'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Group = new Schema({
    author        : ObjectId
  , name          : String
  , description   : String
  , content       : String
  , logoUrl       : String
  , createdAt     : Date
  , updatedAt     : Date
});

mongoose.model('Group', Group);
