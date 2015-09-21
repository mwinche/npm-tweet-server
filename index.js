'use strict';

var express = require('express');
var app = express();
var path = require('path');
var expressWs = require('express-ws');
var fetch = require('npm-tweet-fetch');
var filter = require('npm-tweet-filter');

var publicDir = path.join(require('npm-tweet-page'), 'public');
var HASHTAG = '#whatisnpm';

expressWs(app);

app.use('/', express.static(publicDir));
app.ws('/tweets', function(ws, req){
  var closed = false;

  ws.on('close', function(){
    closed = true;
  });
  console.log('incoming connection to /tweets');
  fetch(HASHTAG, function(tweet){
    tweet.text = filter(tweet.text);

    if(!closed && tweet.text){
      console.log('sending tweet', tweet);
      ws.send(JSON.stringify(tweet));
    }
  });
});

var server = app.listen(3000, function(){
  console.log('Server started on port 3000');
});
