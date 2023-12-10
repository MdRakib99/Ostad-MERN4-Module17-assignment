const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          validate: {
            validator: function (value) {
              return value > 0;
            },
          },
        },
      },
    ],
    shippingAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
  },
  { timestamps: true, versionKey: false }
);

const orderModel = mongoose.model("orders", dataSchema);

module.exports = orderModel;
