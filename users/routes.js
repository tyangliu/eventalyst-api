'use strict';

let restify = require('restify')
  , handlers = require('./handlers');

module.exports = function(server) {
  server.get({
    path: '/users',
    version: '1.0.0'
  },
  handlers.getUsers);

  server.post({
    path: '/users',
    version: '1.0.0'
  },
  handlers.postUsers);
};
