const createError = require('http-errors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./connection/connection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

var app = express();
const cors = require('cors')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
	const errorMessage = err.message;
	res.status(500).send({
		status: 'false',
		message: errorMessage
	});
});

module.exports = app;
