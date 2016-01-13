"use strict";

var assert = require('assert');
var server = require('../lib/server');
var client = require('../lib/client');
var fs = require('fs');
var port = 8124;

describe('tcpServer created', function(){
  it('should connect to the server', function(done){
    server.start(port,function() {
      console.log('server has started');
    });
    done();
  });
});

describe('client connection after server', function(){
  server.start(port, function() {
    console.log('server has started');
  });

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

  after(function(){
    var files = fs.readdirSync('clients');
    for(var ii = 0; ii < files.length; ii++) {
      var filePath = 'clients' + '/' + files[ii];
      if(fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
      }
    }
  });

})
