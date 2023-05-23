var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var publisherRouter = require("./routes/publishers/publishers.router");
var ConversionRouter = require("./routes/Conversion/Conversion.router");
var UserRoutes = require("./routes/users/registration/registration.router");
var validUsersRouter = require('./routes/users/login/userLogin.router');
var newPublisher = require('./routes/publishers/generatePublisher/newPublisher.router');
var newService = require('./routes/services/generateServices/newService.router');
var deleteService = require('./routes/services/deleteService/deleteService.router');
var updateService = require('./routes/services/updateService/updateService.router');
var updatePublisherName = require('./routes/publishers/updatePulisher/updatePublisher.router');
var updatePublisherStatus = require('./routes/publishers/publisherStatus/publisherStatus.router');
var publishers = require('./routes/publishers/publishers/publisher.router');
var services = require('./routes/services/services/services.router');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/publisher-api", publisherRouter);
app.use("/conversion-api", ConversionRouter);
app.use("/authentication-register", UserRoutes);
app.use("/authentication-login", validUsersRouter);
app.use("/new-publisher", newPublisher);
app.use("/new-service", newService);
app.use("/delete-service", deleteService);
app.use("/manage-service", updateService);
app.use("/update-publisher-name", updatePublisherName);
app.use("/update-publisher-status", updatePublisherStatus);
app.use("/publishers", publishers);
app.use("/services", services);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
