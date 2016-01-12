var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var Waterline = require('waterline');
var config = require('./config/orm');
var orm = new Waterline();

//import routes
var index = require('./routes/index');
var user = require('./routes/user');
//import models
var User = require('./models/user');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//config middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.tmp')));
//load routes
app.use('/', index);
//-: service REST API
app.use('/api', user);
//load models
orm.loadCollection(User);

orm.initialize(config, function(err, models) {
  if(err) throw err;
  app.models = models.collections;
  app.connections = models.connections;
  app.listen(3000);
});
