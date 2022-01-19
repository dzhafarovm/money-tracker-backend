const getCurrent = async (req, res) => {
  const { email, subscription, balance } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
        balance,
      },
    },
  });
};

module.exports = getCurrent;
