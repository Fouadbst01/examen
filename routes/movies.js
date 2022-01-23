var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//var movies = require("../movies.json");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const { take = 0, skip = 10 } = req.query;
  const movies = await prisma.movies.findMany({
    take: parseInt(take),
    skip: parseInt(skip),
  });
  res.send({
    data: movies,
    pagination: {
      count: await prisma.movies.count({}), // Total des enregistrements
      take: skip,
      skip: take, // Décalage à partir duquel on prend les  données
    },
  });
});

module.exports = router;
