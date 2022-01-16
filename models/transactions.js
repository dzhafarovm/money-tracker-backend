const { Schema, model } = require("mongoose");
const Joi = require("joi");

const incomeTransationsSchema = Schema(
  {
    type: {
      type: String,
      default: "income",
    },
    date: {
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
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      enum: ["salary", "other income"],
      default: "salary",
    },
    sum: { type: Number, require: true },
  },
  { versionKey: false, timestamps: true }
);

const joiIncomeTransactionSchema = Joi.object({
  type: Joi.string().required(),
  date: Joi.object(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  sum: Joi.number().required(),
});

const costsTransationsSchema = Schema(
  {
    type: {
      type: String,
      default: "costs",
    },
    date: {
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

const IncomeTransaction = model("incomeTransaction", incomeTransationsSchema);
const CostsTransaction = model("costsTransaction", costsTransationsSchema);

module.exports = {
  IncomeTransaction,
  joiIncomeTransactionSchema,
  CostsTransaction,
};
