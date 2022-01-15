const { Schema, model } = require("mongoose");
const Joi = require("joi");

const transationsSchema = Schema(
  {
    income: {
      type: Boolean,
      default: true,
    },
    date: {
      day: {
        type: Date,
        default: Date.now,
      },
      month: {
        type: Date,
        default: Date.now,
      },
      year: {
        type: Date,
        default: Date.now,
      },
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      enum: [
        "products",
        "alcohol",
        "fun",
        "health",
        "transport",
        "home",
        "technic",
        "utility and phone",
        "sport and hobby",
        "education",
        "other",
      ],
      default: "products",
    },
    sum: { type: Number, require: true },
  },
  { versionKey: false, timestamps: true }
);

const joiTransactionSchema = Joi.object({
  income: Joi.boolean().required(),
  date: Joi.object(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  sum: Joi.number().required(),
});

const Transaction = model("transaction", transationsSchema);

module.exports = {
  Transaction,
  joiTransactionSchema,
};
