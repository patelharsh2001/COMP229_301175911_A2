/*
This is users.js file
Name : Harsh Patel
Student ID: 301175911
Date : 4th March 2022 
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
