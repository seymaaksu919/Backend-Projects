var express = require('express');
var router = express.Router();

const config = require("../config");   //Config deki index dosyasını kullanabilmek için tanımladık.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , config}); //Buraya yazıldı. 
});

module.exports = router;
