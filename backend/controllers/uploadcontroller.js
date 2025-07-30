const uploadSchema= require("../models/filemodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const xlsx = require("xlsx")
// const fs = require("fs");


// Set storage engine

// Route to handle Excel file upload
exports.getfile=async(req, res) => {
    console.log(req.file)
     try {
      const buffer = req.file.buffer;
      const fileName = req.file.originalname;

    const workbook = xlsx.read(buffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    const uploadDoc = new uploadSchema({userId:req.user.id,fileName,jsonData});

    await uploadDoc.save();
    // Optional: delete file after processing
    // fs.unlinkSync(filePath);

    res.json({
      message: "Excel file processed successfully",
      data: jsonData,
      name:fileName
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process Excel file" });
  }
};

  
