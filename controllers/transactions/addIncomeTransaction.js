const { IncomeTransaction } = require("../../models");

const addIncomeTransaction = async (req, res) => {
  const { _id } = req.user;
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
  const result = await IncomeTransaction.create({
    ...req.body,
    owner: _id,
    date: { day: day, month: month, year: year },
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addIncomeTransaction;
