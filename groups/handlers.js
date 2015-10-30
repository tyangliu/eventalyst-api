'use strict';

let bcrypt = require('bcryptjs')
  , mongoose = require('mongoose')
  , Promise = require('bluebird');

let Group = mongoose.model('Group');

exports.getGroups = (req, res) => {
  Group.find({}, (err, groups) => {
    res.send(groups);
  });
};

exports.getGroupById = (req, res) => {
  Group.findById(req.params.id, groups => {
    return res.send(groups);
  });
};

exports.postGroups = Promise.coroutine(function *(req, res){
  try {
    let newGroup = new Group(req.body);
    let group = yield newGroup.save();
    return res.send(group);
  } catch(err) {
    return res.send(400, err);
  }
});
