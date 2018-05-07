var express = require('express');
var router = express.Router();
var QC = require('../control/quizz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'CREDITS' });
});

router.get('/quizzes', QC.index);


module.exports = router;
