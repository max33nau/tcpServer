"use strict";

var assert = require('assert');
var server = require('../lib/server');
var client = require('../lib/client');
var fs = require('fs');
var port=8124;

describe('tcpServer created', function(){
  var currentServer;
  it('should connect to the server and then close the server', function(done){
  currentServer = server.start(port,function() {
      console.log('server has started');
    });
  currentServer.close(done);
  });
});

describe('client connection after server', function(){
  var currentServer;
  before(function(done){
  currentServer = server.start(port, function(){
      console.log('server connected');
      done();
    });
  })

  beforeEach(function(done){
    client.start(port, done);
  });

  it('should have 1 file with a random persons name in the client folder after tests', function(){
    assert.equal(fs.readdirSync('clients').length, 1);
  });

  it('should have 2 files with a random persons name in the client folder after tests', function(){
    assert.equal(fs.readdirSync('clients').length, 2);
  })

  it('should have 3 files with a random persons name in the client folder after tests', function(){
    assert.equal(fs.readdirSync('clients').length, 3);
  });

  it('should have 4 files with a random persons name in the client folder after tests', function(){
    assert.equal(fs.readdirSync('clients').length, 4);
  });

  after(function(done){
    currentServer.close(done);
    var files = fs.readdirSync('clients');
    for(var ii = 0; ii < files.length; ii++) {
      var filePath = 'clients' + '/' + files[ii];
      if(fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
      }
    }
  });

})
