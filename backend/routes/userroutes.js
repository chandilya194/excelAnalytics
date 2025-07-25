const express = require('express');
const app = express.Router();
const authcontrol = require("../controllers/authcontroller.js")

app.post("/register",authcontrol.createuser)
app.post("/login",authcontrol.checkuser)
module.exports = app