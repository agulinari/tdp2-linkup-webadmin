var express = require("express"),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
    server = express(),
    hostname = 'localhost',
    port = 3000; 

server.use(express.static(__dirname + '/../app'));
server.use('/bower_components',  express.static(__dirname + '/../bower_components'));
server.use(bodyParser.json());
server.listen(port, hostname);

console.log("Server: Express listening: http://" + hostname + ":" + port);

//mongoose connect
mongoose.connect('mongodb://localhost/simple', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('Database: MongoDB connection successful');
    }
});

  server.use('/api/users', require('./api/users'));
  server.use('/api/abuses', require('./api/abuses'));
  server.use('/api/profiles', require('./api/profiles'));

 
    // All other routes should redirect to the index.html
  server.route('/*')
    .get(function(req, res) {
      res.sendfile('index.html');
    });


// Export module
exports = module.exports = server;