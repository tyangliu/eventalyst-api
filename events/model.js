'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Event = new Schema({
    author            : ObjectId
  , name              : String
  , description       : String
  , city              : String,
  , location          : String,
  , content           : String
  , imageUrl          : String
  , bannerUrl         : String
  , numberOfAtendees  : Number
  , votes             : Number
  , tags              : [String]
  , creator           : User
  , sponsors          : [Group]
  , startsAt          : Date
  , endsAt            : Date
  , createdAt         : Date
  , updatedAt         : Date
});

mongoose.model('Event', Event);
