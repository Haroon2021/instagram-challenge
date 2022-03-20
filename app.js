require("dotenv").config();
const express = require('express');
const app = express();
const connection = require("./db");
const cors = require("cors");
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

//connect to database
connection();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render("pages/index")
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

app.get('/login', (req, res) => {
    res.render("pages/login")
})

app.get('/signup', (req, res) => {
    res.render("pages/signup")
})