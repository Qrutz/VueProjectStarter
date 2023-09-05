var express = require('express');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');



var port = process.env.PORT || 3000;

var app = express();
// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
// allow cors from 
app.use(cors({origin: '*'}));

// Import routes
app.get('/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT342 backend ExpressJS project!'});
});


// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));





app.listen(port, function(err) {
    if (err) throw err;
    console.log('Express server listening on port ' + port);
});


module.exports = app;