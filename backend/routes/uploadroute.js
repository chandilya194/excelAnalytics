const express = require('express');
const app = express.Router();
const uploadcontroller = require("../controllers/uploadcontroller.js")
const upload= require("../middleware/storage.js")
const {authenticate} = require("../middleware/authmiddleware.js")

app.post("/",authenticate,upload.single("file"),uploadcontroller.getfile)
app.get("/",authenticate,uploadcontroller.getdetails)
app.delete("/:id",authenticate,uploadcontroller.delfile)
module.exports = app