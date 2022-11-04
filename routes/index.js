var express = require('express');
var router = express.Router();


const years = {
  year: 2023
}
/* GET home page. */
router.get('/', function(req, res) {
  res.json({year: years.year})
});

module.exports = router;
