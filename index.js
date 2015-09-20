'use strict';

var express = require('express');
var app = express();
var path = require('path');
var publicDir = path.join(require('mwinche-tweet-page'), 'public');

app.use('/', express.static(publicDir));

var server = app.listen(3000, function(){
  console.log('Server started on port 3000');
});
