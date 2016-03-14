import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
let app = express();
import Waterline from 'waterline';
import config from './config/orm';
let orm = new Waterline();

//import routes
import index from './routes/index';
import user from './routes/user';
//import orm
import User from './models/user';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//models middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.tmp')));
//load routes
app.use('/', index);
//-: service REST API
app.use('/api', user(app));
//load orm
orm.loadCollection(User);

orm.initialize(config, function(err, models) {
    if(err) throw err;
    app.models = models.collections;
    app.connections = models.connections;
    app.listen(3000);
});
