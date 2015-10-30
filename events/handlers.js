'use strict';

let bcrypt = require('bcryptjs')
  , mongoose = require('mongoose')
  , Promise = require('bluebird')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Event = mongoose.model('Event');
let User = mongoose.model('User');
let Group = mongoose.model('Group');

exports.getEvents = Promise.coroutine(function *(req, res) {
  try {
    let foundEvents = yield Event.find(req.body).lean();
    if (foundEvents) {

      for (var i=0; i<foundEvents.length; i++) {
        let event = foundEvents[i];
        var creator = yield User.findById(event.creator).lean();
        foundEvents[i].creator = creator;
      }

      res.send(foundEvents);
    } else {
      res.send(400);
    }
  } catch (err) {
    res.send(400, err);
  }
});

exports.getEventById = Promise.coroutine(function *(req, res) {
  try {
    var foundEvent = yield Event.findById(req.params.id).lean();
    if (foundEvent) {
      let creator = yield User.findById(foundEvent.creator).lean();
      foundEvent.creator = creator;
      let sponsors = yield Group.find(foundEvent.sponsors).lean();
      foundEvent.sponsors = sponsors;
      res.send(foundEvent);
    } else {
      res.send(400);
    }
  } catch (err) {
    res.send(400, err);
  }
});

exports.postEvents = Promise.coroutine(function *(req, res) {
  let newEvent = new Event(req.body);
  let event = yield newEvent.save();
  if (event) {
    return res.send(event);
  }
  return res.send(400);
});

exports.updateEvent = (req, res) => {
  Event.update({
    _id: req.params.id
  }, req.body, {}, (err, event) => {
    if (err) {
      console.log(err);
      res.send(400, err);
    } else {
      res.send(event);
    }
  });
};
