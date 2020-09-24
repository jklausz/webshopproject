var express = require("express");
var knex = require("../db/knex");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    const productId = req.query.product;
    let productsData;
    if (productId) {
        productsData = await knex('products').select().where({ id: productId }); // kérdezzük le azt az 1 productot id alapján
    } else {
        productsData = await knex("products").select();
    }
    let userData = await knex("users").select();
    console.log(userData);
    console.log(productsData);
    res.render("users", { title: "Adatok", userData, productsData });
});

router.post("/", async(req, res, next) => {
    // res.json(req.body).send();
    console.log('called/users');
    const userDTO = req.body;
    const orderproductsDTO = req.body;
    if (!isUserFormValid(userDTO)) {
        res.render("error", {
            message: "Hibás form kitöltés!",
        });
    } else {

        // 1. lépés: user lementése
        const userId = await knex("users").insert({
            name: userDTO.name,
            email: userDTO.email,
            address: userDTO.address,
        }).returning('id');


        // 2.lépés: order lementése
        // előbb mentsük le az orderbe a rendelést
        // userId
        // TODO: productId megszerzése (<select value="{{id}}")>...)

        // knex('orders').insert({ userId, productId})
        // .returning('id') <-- order tábla id-ját adjuk vissza

        // ha csak 1 termék tartozhat 1 rendeléshez, akkor nem kell joining table-be lementeni
        await knex("order_products").insert({
            content: orderproductsDTO.content
        });

        let userData = await knex("users").select();
        // rendereljünk ki egy info view-t:
        // Köszönjük, hogy írt nekünk! <a href=...>Vissza a főoldalra</a>
        res.render("users", {
            title: "Adatok",
            userData,
            message: "Köszönjük,hogy irt nekünk!",
        });
    }
});

const isUserFormValid = (users) => {
    return users.name && users.email && users.address;
};

const isUserExist = async(name) => {
    const count = await knex("users").count("name").where("name", name);
    return count > 0;
};

module.exports = router;