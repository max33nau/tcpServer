var net = require('net');
var fs = require('fs');
var client = require('./client');

function start(){

  function connection(c) {
    console.log('client connected');
    c.on('data', function(data){
      var newFile =fs.createWriteStream('./clients/'+data+'.txt');
      newFile.write('Hello '+ data + '! This file was made just for you.');
    })
    c.on('end', function() {
      console.log('client disconnected');
    });
  }
  net.createServer(connection).listen(8124, function(){
    console.log('server has started');
    client.start();
  });

}

exports.start = start;
