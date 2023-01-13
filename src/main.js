const express = require('express');
const path = require('path')
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

const weatherRouter = require("./routes/weather");
const aboutRouter = require("./routes/about");


app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`Weather app listening on port ${port}`)
})