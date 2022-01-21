var express = require("express");
var router = express.Router();

var movies = require("../movies.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(movies);
});

module.exports = router;
