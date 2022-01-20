const { Transaction } = require("../../models");
const { User } = require("../../models");

const addTransaction = async (req, res) => {
  const { _id, balance } = req.user;
  const { type, sum } = req.body;
  const dateObj = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
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
    day: day,
    month: month,
    year: year,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addTransaction;
