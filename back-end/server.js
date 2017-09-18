var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

var index = require('./routes/indexRoutes');
var admin = require('./routes/adminRoutes');
var mentor = require('./routes/mentorRoutes');
var staff = require('./routes/staffRoutes');
var student = require('./routes/studentRoutes');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/admin', admin);
app.use('/mentor', mentor);
app.use('/staff', staff);
app.use('/student', student);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
