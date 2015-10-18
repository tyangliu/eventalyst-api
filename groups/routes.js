'use strict';

let restify = require('restify')
  , handlers = require('./handlers');

module.exports = function(server) {
  server.get({
    path: '/groups',
    version: '1.0.0'
  },
  handlers.getGroups);

  server.get({
    path: '/groups/:id',
    version: '1.0.0'
  },
  handlers.getGroupById);

  server.post({
    path: '/groups',
    version: '1.0.0'
  },
  restify.bodyParser(),
  handlers.postGroups);
};
