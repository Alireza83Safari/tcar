import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 2,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
