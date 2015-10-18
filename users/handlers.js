'use strict';

let bcrypt = require('bcryptjs')
  , mongoose = require('mongoose');

let User = mongoose.model('User');
let Event = mongoose.model('Event');

exports.getUsers = (req, res) => {
  var user = User.find({}, (err, user) => {
    if (err) {
      console.log(err);
      res.send(400, err);
    } else {
      res.send(user);
    }
  });
};

exports.getUserById = (req, res) => {
  var user = User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
      res.send(400, err);
    } else {
      res.send(user);
    }
  });
};

exports.postUsers = (req, res) => {
  let email = req.body.email
    , password = req.body.password
    , type = req.body.type
    , salt = bcrypt.genSaltSync(10)
    , hashedPassword = password;

  var newUser = new User({
    email: email,
    hashedPassword: hashedPassword,
    type: type
  })
  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      res.send(400, err);
    } else {
      res.send(user);
    }
  });
};

exports.patchUsers = (req, res) => {
  User.update({
    id: req.query.id
  }, req.body, { multi: true }, (err, user) => {
    if (err) {
      res.send(400, err);
    } else {
      res.send(user);
    }
  });
};
