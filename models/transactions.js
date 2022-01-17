const { Schema, model } = require("mongoose");
const Joi = require("joi");

const transactionSchema = Schema(
  {
    type: {
      type: String,
      enum: ["income", "costs"],
      default: "income",
    },
      day: {
        type: String,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      enum: [
        "salary",
        "other income",
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
      default: "salary",
    },
    sum: { type: Number, require: true },
  },
  { versionKey: false, timestamps: true }
);

const joiTransactionSchema = Joi.object({
  type: Joi.string().required(),
  day: Joi.string(),
  month: Joi.string(),
  year: Joi.string(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  sum: Joi.number().required(),
});


const Transaction = model("transaction", transactionSchema);

module.exports = {
  Transaction,
  joiTransactionSchema,
};
