'use strict';

let restify = require('restify')
  , handlers = require('./handlers');

module.exports = function(server) {
  server.get({
    path: '/users',
    version: '1.0.0'
  },
  handlers.getUsers);

  server.get({
    path: '/users/:id',
    version: '1.0.0'
  },
  handlers.getUserById);

  server.post({
    path: '/users',
    version: '1.0.0'
  },
  restify.bodyParser(),
  handlers.postUsers);

  server.patch({
    path: '/users/:id',
    version: '1.0.0'
  },
  handlers.patchUsers);

  server.get({
    path: '/users/:id/events',
    version: '1.0.0'
  },
  handlers.getEvents);
};
