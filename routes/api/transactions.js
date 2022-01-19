const router = require("express").Router();

const { auth, ctrlWrapper, validation } = require("../../middleware");
const { joiTransactionSchema } = require("../../models/transactions");
const { transactions: ctrl } = require("../../controllers");


router.get("/:type"), auth, ctrlWrapper(ctrl.getTransactionByType);

router.post("/",auth,validation(joiTransactionSchema),ctrlWrapper(ctrl.addTransaction));

router.delete("/:transactionId", ctrlWrapper(ctrl.removeTransactionById));


module.exports = router;
