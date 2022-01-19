const router = require("express").Router();

const { auth, ctrlWrapper, validation } = require("../../middleware");
const { joiTransactionSchema } = require("../../models/transactions");
const { transactions: ctrl } = require("../../controllers");

router.get('/getType/:type', auth, ctrlWrapper(ctrl.getTransactionByType));

router.get('/getMonth/:month', auth, ctrlWrapper(ctrl.getTransactionByMonth));

router.post("/",auth,validation(joiTransactionSchema),ctrlWrapper(ctrl.addTransaction));

router.delete("/:transactionId", ctrlWrapper(ctrl.removeTransactionById));


module.exports = router;
