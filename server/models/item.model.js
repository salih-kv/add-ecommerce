const { Schema, model } = require("mongoose");

const itemSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    highlights: {
      type: Array,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Items = model("Items", itemSchema);
