const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    color: { type: String, required: true },
    price: { type: String, required: true },

    quantity: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return Number.isInteger(value) && value > 0;
        },
      },
    },
  },
  { timestamps: true, versionKey: false }
);

const cartItemModel = mongoose.model("cartitems", dataSchema);

module.exports = cartItemModel;
