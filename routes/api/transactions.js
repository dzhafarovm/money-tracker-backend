const express = require("express");

const { auth, ctrlWrapper, validation } = require("../../middleware");
const { transactions: ctrl } = require("../../controllers");
const { joiIncomeTransactionSchema } = require("../../models/transactions");

const router = express.Router();

// router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/income",
  auth,
  validation(joiIncomeTransactionSchema),
  ctrlWrapper(ctrl.addIncomeTransaction)
);
router.post(
  "/costs",
  auth,
  validation(joiIncomeTransactionSchema),
  ctrlWrapper(ctrl.addCostsTransaction)
);

module.exports = router;
