const router = require("express").Router();

const { auth, ctrlWrapper, validation } = require("../../middleware");
const { transactions: ctrl } = require("../../controllers");
const { joiTransactionSchema } = require("../../models/transactions");


router.get("/", auth,ctrlWrapper(ctrl.getTransactionByMonth));

router.post("/",auth,validation(joiTransactionSchema),ctrlWrapper(ctrl.addTransaction));

router.delete("/:transactionId", ctrlWrapper(ctrl.removeTransactionById));


module.exports = router;
