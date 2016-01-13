"use strict";

var server = require('./server');
var port = 8124;

server.start(port, function() {
  console.log('server has started');

});
