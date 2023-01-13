const express = require('express');
const axios = require('axios');
const config = require("dotenv").config();

const weatherRoute = express.Router();

weatherRoute.post("/", (req, res) => {
    const city = req.body.cityName;
    const key = process.env.API_KEY;
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + city;

    axios.get(url)
    .then(response => {
        const name = response.data.location.name;
        const region = response.data.location.region;
        const country = response.data.location.country;
        const localTime = response.data.location.localtime;
        const temp_C = response.data.current.temp_c;
        const temp_F = response.data.current.temp_f;
        const condition = response.data.current.condition.text;
        respObj = {"Name": name, "Region": region, "Country": country, "Local Time": localTime, "Temp (C)": temp_C, "Temp (F)": temp_F, "Condition": condition};
        res.json(respObj);
    })
    .catch(err => {
        console.log(err);
        res.json("not found");
        res.sendStatus(500);
    })

});

module.exports = weatherRoute;
