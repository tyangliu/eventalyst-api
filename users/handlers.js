'use strict';

let bcrypt = require('bcryptjs')
  , mongoose = require('mongoose');

let User = mongoose.model('User');

exports.getUsers = (req, res) => {
  let id = req.param('id');
};

exports.postUsers = (req, res) => {
  let email = req.body.email
    , password = req.body.password
    , salt = bcrypt.genSaltSync(10)
    , hashedPassword = password;

  var newUser = new User{
    email: email,
    hashedPassword: hashedPassword
  }
  newUser.save();
};
