'use strict';

let restify = require('restify')
  , passport = require('passport')
  , fs = require('fs')
  , mongoose = require('mongoose')
  , bluebird = require('bluebird');

mongoose.Promise = bluebird;

require('./users/model');
require('./groups/model');
require('./events/model');

createServer();

function createServer() {
  let server = restify.createServer({
    name: 'scoops-server'
  });

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.authorizationParser());
  server.use(passport.initialize());

  // include passport strategies
  require('./auth/strategies');

  let dirs = ['./auth', './users', './events', './groups'];
  dirs.forEach(dir => require(dir + '/routes')(server));

  mongoose.connect('mongodb://localhost/eventalyst');

  server.listen(1337, () => {
    console.log('%s listening at %s', server.name, server.url);
  });

  return server;
}
