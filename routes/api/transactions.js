const express = require("express");

const { auth, ctrlWrapper, validation } = require("../../middleware");
const { transactions: ctrl } = require("../../controllers");
const { joiTransactionSchema } = require("../../models/transactions");

const router = express.Router();

// router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/",
  auth,
  validation(joiTransactionSchema),
  ctrlWrapper(ctrl.addTransaction)
);

module.exports = router;
