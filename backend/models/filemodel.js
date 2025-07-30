const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    userId:{
            type:mongoose.Schema.Types.ObjectId,
             required:true
        },
  fileName: {
    type: String,
    required: true,
  },

  jsonData: {
    type: Array, // You can also use [Object] if you want to be strict
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Upload", uploadSchema);
