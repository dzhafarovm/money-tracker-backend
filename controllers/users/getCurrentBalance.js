const getCurrent = async (req, res) => {
  const { balance } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        balance,
      },
    },
  });
};

module.exports = getCurrent;
