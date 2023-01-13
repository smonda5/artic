const express = require('express');

const aboutRoute = express.Router();

aboutRoute.get("/", (req, res) => {
    const aboutInfo = {"foo": "bar"}
    res.json(aboutInfo);
})

module.exports = aboutRoute;