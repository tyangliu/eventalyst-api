'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Group = new Schema({
    author: ObjectId
  , name : {
      type: String,
      default: "Default name"
    }
  , description : {
      type: String,
      default: "Default description"
    }
  , content: {
      type: String,
      default: "Default content"
    }
  , creator: {
      type: ObjectId,
      default: null
    }
  , logoUrl: {
      type: String,
      default: null
    }
  , createdAt: {
      type: String,
      default: null
    }
  , updatedAt: {
      type: Date,
      default: Date.now
    }
});

mongoose.model('Group', Group);
