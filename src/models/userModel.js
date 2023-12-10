const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    address: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const userModel = mongoose.model("users", dataSchema);

module.exports = userModel;
