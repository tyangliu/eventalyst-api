'use strict';

let bcrypt = require('bcryptjs')
  , mongoose = require('mongoose')
  , Promise = require('bluebird');

let Event = mongoose.model('Event');

exports.getEvents = (req, res) => {
  Event.find(req.body, (err, events) => {
    if (err) {
      res.send(400, err);
    } else {
      res.send(events);
    }
  });
};

exports.postEvents = Promise.coroutine(function *(req, res) {
  let newEvent = new Event(req.body);
  let event = yield newEvent.save();
  if (event) {
    return res.send(event);
  }
  return res.send(400);
});

exports.updateEvent = Promise.coroutine(function *(req, res) {
  try {
    let updatedEvent = yield Event.update({
      id: req.query.id
    }, req.body, {});
    res.send(updatedEvent);
  } catch (err) {
    res.send(400, err);
  }
});
