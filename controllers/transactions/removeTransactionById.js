const { NotFound } = require("mongoose");

const { Transaction } = require("../../models");

const removeTransactionById = async (req, res, next) => {
    const { transactionId } = req.params;
    
    const result = await Transaction.findByIdAndRemove(transactionId);

    if (!result)
        throw new NotFound(`this transaction not found`);

    res.status(200).json({
        status: "success",
        code: 200,
        message: 'transaction deleted'
    });
};


module.exports = removeTransactionById;