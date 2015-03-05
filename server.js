// Super simple server - serve single static file

var express = require('express');
var app = express();
var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Serve our static content
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Dynamic port
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
