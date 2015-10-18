'use strict';

let Promise = require('bluebird')
  , passport = require('passport')
  , BearerStrategy = require('passport-http-bearer').Strategy
  , mongoose = require('mongoose');

let User = mongoose.model('User');

passport.use(new BearerStrategy(
  Promise.coroutine(function *(email, done) {
    try {
      let user = yield User.findOne({
        email: email
      });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
));
