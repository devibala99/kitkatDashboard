// ! Require the modules

const express = require("express");
const app = express();

// middleware to use body.
const bodyParser = require("body-parser");

const { schemaData, studentData, post_attendance } = require("./schema.js");

// dotenv
const dotenv = require("dotenv");
dotenv.config();

// cors for connecting front end
const cors = require("cors");

// router
const router = require("./router");

// connect db
const mongoose = require("mongoose");
mongoose.connect(process.env.DB).then(() => {
    console.log("Connected Successfully");
})
    .catch((err) => {
        console.log("Connection failure " + err);
    })
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use(router);
app.use(cors());



app.listen(process.env.PORT || 8021, () => {
    console.log("port is " + process.env.PORT);
})
