'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Event = new Schema({
    author: ObjectId
  , name: {
      type: String,
      default: "Default name"
    }
  , description: {
      type: String,
      default: "Default description"
    }
  , city: {
      type: String,
      default: "Default city"
    }
  , location: {
      type: String,
      default: "Default location"
    }
  , content: {
      type: String,
      default: "Default content"
    }
  , imageUrl: {
      type: String,
      default: null
    }
  , atendeeCount: {
      type: Number,
      default: 0
    }
  , votes: {
      type: Number,
      default: 0
    }
  , tags: [String]
  , creator: {
      type: ObjectId,
      default: null
    }
  , sponsors: [ObjectId]
  , startsAt: {
      type: Date,
      default: null
    }
  , endsAt: {
      type: Date,
      default: null
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

mongoose.model('Event', Event);
