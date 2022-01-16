const { NotFound } = require("mongoose");

const { IncomeTransaction } = require("../../models");
const { CostsTransaction } = require("../../models");

const removeIncomeById = async (req, res, next) => {
    const { transactionId } = req.params;
    
    const result = await IncomeTransaction.findByIdAndRemove(transactionId);

    if (!result)
        throw new NotFound(`this transaction not found`);

    res.status(200).json({
        status: "success",
        code: 200,
        message: 'transaction deleted'
    });
};

const removeCostById = async (req, res, next) => {
    const { transactionId } = req.params;
    
    const result = await CostsTransaction.findByIdAndRemove(transactionId);

    if (!result)
        throw new NotFound(`this transaction not found`);

    res.status(200).json({
        status: "success",
        code: 200,
        message: 'transaction deleted'
    });
};

module.exports = {
    removeIncomeById,
    removeCostById,
}