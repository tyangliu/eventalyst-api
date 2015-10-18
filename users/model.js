'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let User = new Schema({
    name: {
      type: String,
      default: "Default name"
    }
  , email: {
      type: String,
      default: "Default email",
      required: true
    }
  , description: {
      type: String,
      default: "Default description"
    }
  , hashedPassword: {
      type: String,
      default: null
    }
  , avatarUrl: {
      type: String,
      default: null
    }
  , type: {
      type: String,
      default: "seeker"
    }
  , createdAt: {
      type: Date,
      default: null
    }
  , updatedAt: {
      type: Date,
      default: Date.now
    }
});

mongoose.model('User', User);
