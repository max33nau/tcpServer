var net = require('net');
var Chance = require('chance');
var chance = new Chance();

function start() {
    var client = net.connect( { port: 8124, host: '192.168.252.62' }, function(){
      console.log('connected to server!');
      var clientName = chance.first(); // generates a random string with a first name
      client.write(clientName);
      client.end();
    });

    client.on('end', () => {
      console.log('disconnected from server');
    });
}

exports.start = start;
