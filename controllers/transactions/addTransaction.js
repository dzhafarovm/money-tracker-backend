const { Transaction } = require("../../models");
const { User } = require("../../models");

const addTransaction = async (req, res) => {
  const { _id, balance } = req.user;
  const { type, sum } = req.body;
  let newBalance;
  if (type === "income") {
    newBalance = Number(balance) + Number(sum);
  } else {
    newBalance = Number(balance) - Number(sum);
  }
  const resultBalance = await User.findByIdAndUpdate(req.user._id, {
    balance: newBalance,
  });
  const result = await Transaction.create({
    ...req.body,
    owner: _id,
  });
  const resultNewBalance = await User.findById(req.user._id);
  const showResultBalance = resultNewBalance.balance;
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
    showResultBalance,
  });
};

module.exports = addTransaction;
