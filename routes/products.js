var express = require("express");
var knex = require("../db/knex");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    let x = await knex("products").select();
    console.log(x);
    res.render("products", { title: "Termékek", x });
});

module.exports = router;