var express = require("express");
var knex = require("../db/knex");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    let userData = await knex("users").select();
    console.log(userData);
    res.render("users", { title: "Adatok", userData });
});

module.exports = router;