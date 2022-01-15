const { CostsTransaction } = require("../../models");

const addCostsTransaction = async (req, res) => {
  const { _id } = req.user;
  const result = await CostsTransaction.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addCostsTransaction;
