var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Staff Page');
});

/* GET list of assignments */
router.get('/todo', function (req, res, next) {
  knex('todo').then(function (todos) {
    res.send(todos);
  });
})

/* GET list of assignments for students */
router.get('/student_todo', function (req, res, next) {
  knex('student_todo').then(function (student_todos) {
    res.send(student_todos);
  });
})

module.exports = router;
