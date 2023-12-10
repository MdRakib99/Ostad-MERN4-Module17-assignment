const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
      },
    },
    stock: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return Number.isInteger(value) && value >= 0;
        },
      },
    },
    category: { type: String, required: true },
    imageURL: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const productModel = mongoose.model("products", dataSchema);

module.exports = productModel;
