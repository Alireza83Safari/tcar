// Assuming you have a Mongoose model named 'Image'
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
});

const Images = mongoose.model("Image", imageSchema);

export default Images;
