var express = require(`express`);
var router = require(`express`).Router();
var db = require(`../lib/db`);

module.exports = () => {

    router.get('/', (req, res) => {

        res.send("good");
    });

    return router;
}