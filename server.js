'use strict';

var express       = require('express');
var bodyparser    = require('body-parser');
var port          = process.env.PORT || 3000;
var app           = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
