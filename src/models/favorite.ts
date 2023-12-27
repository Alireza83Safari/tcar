// Create a new file, e.g., CartItem.js
const mongoose = require("mongoose");
import car from "@/models/car";
import user from "@/models/user";

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
