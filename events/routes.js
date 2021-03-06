'use strict';

let restify = require('restify')
  , passport = require('passport')
  , handlers = require('./handlers');

module.exports = function(server) {
  server.get({
    path: '/events',
    version: '1.0.0'
  },
  // passport.authenticate('bearer', { session: false }),
  handlers.getEvents);

  server.get({
    path: '/events/:id',
    version: '1.0.0'
  },
  handlers.getEventById);

  server.post({
    path: '/events',
    version: '1.0.0'
  },
  restify.bodyParser(),
  handlers.postEvents);

  server.patch({
    path: '/events/:id',
    version: '1.0.0'
  },
  restify.bodyParser(),
  handlers.updateEvent);
};
