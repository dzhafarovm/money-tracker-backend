const { User } = require("../../models");
const { NotFound } = require("http-errors");

const updateBalance = async (req, res) => {
  const { _id: id } = req.user;
  const { balance } = req.body;
  const result = await User.findByIdAndUpdate(
    req.user._id,
    { balance },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`User with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateBalance;
