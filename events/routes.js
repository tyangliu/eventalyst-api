'use strict';

let restify = require('restify')
  , handlers = require('./handlers');

module.exports = function(server) {
  server.get({
    path: '/events',
    version: '1.0.0'
  },
  handlers.getEvents);

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
