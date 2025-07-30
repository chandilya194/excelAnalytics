// middlewares/multerMiddleware.js
const multer = require("multer");

// Store in memory as buffer (not saved to disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
