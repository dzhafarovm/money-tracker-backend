const { NotFound } = require("mongoose");

const { Transaction, User } = require("../../models");

const removeTransactionById = async (req, res, next) => {
    const { transactionId } = req.params;
    
    const result = await Transaction.findByIdAndRemove(transactionId);

    if (!result)
        throw new NotFound(`this transaction not found`);
    
    const { type, sum, owner } = result;

    const user = await User.findOne({ _id: owner });
     if (type === 'income') {
    const balance = user.balance - sum;
    await User.findOneAndUpdate({ _id: owner }, { balance });
  }
  if (type === 'costs') {
    const balance = user.balance + sum;
    await User.findOneAndUpdate({ _id: owner }, { balance });
  }

    res.status(200).json({
        status: "success",
        code: 200,
        message: 'transaction deleted'
    });
};


module.exports = removeTransactionById;