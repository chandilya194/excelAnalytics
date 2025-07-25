const express= require('express');
const app = express();
const mongoose= require("mongoose");
const routes = require("./routes/userroutes");
const cors= require("cors");

require('dotenv').config();
//database connect

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err)=>console.log("Connection error :",err))

app.use(cors())

app.use(express.json()) 

app.use('/auth',routes)

app.listen(process.env.PORT,()=>{
  console.log("Server listening to port ",process.env.PORT);
})

  