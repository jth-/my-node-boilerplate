"use strict";

var http = require('http'),
    path = require('path'),
    nunjucks = require('nunjucks'),
    express = require('express');

var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.locals.content = "hello world";
  res.render('index.html');
});

http.createServer(app)
  .listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
