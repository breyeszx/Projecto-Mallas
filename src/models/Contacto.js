import mongoose from "mongoose";

const ContactoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  number: {
    type: Number,
    required: [true, "Please provide a phone number"],
  },
});

export default mongoose.models.Contacto ||
  mongoose.model("Contacto", ContactoSchema);
