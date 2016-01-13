"use strict";

var net = require('net');
var fs = require('fs');

function connection(c) {
  console.log('client connected');
  c.on('data', function(data){
    var newFile = fs.createWriteStream('clients/'+data+'.txt');
    newFile.write('Hello '+ data + '! This file was made just for you.');
  });
  c.on('end', function() {
    console.log('client disconnected');
  });
}

function start(portValue, callback){
  net.createServer(connection).listen(portValue,function(){
    callback();
  });
}

exports.start = start;
