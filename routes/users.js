var express = require("express");
var knex = require("../db/knex");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    let userData = await knex("users").select();
    console.log(userData);
    res.render("users", { title: "Adatok", userData });
});

/*router.get('/users', async function(req, res, next) => {
    const userMix = await knex("users").select();
    res.render("users", {
        name: "",
        email: "",
        address: ""
    });
}); */

/*router.post("/", (req, res, next) => {
    // res.json(req.body).send();
    const userDTO = req.body;

    if (!isUserFormValid(userDTO)) {
        res.render('error', {
            message: "Hibás form kitöltés!"
        });
    } else {
        res.send(isUserFormValid(userDTO.name));
    }
}
});

const isUserFormValid = (users) => {
    return users.name && users.email && users.address;
};

const isUserExist = async(name) => {
    const count = await knex("users")
        .count("name")
        .where("name", name);
    return count > 0;

}; */


module.exports = router;