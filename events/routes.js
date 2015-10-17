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
  handlers.postEvents);
};
