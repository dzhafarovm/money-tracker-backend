const getCurrent = async (req, res) => {
  const { email, token, balance, avatarURL } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        token,
        balance,
        avatarURL,
      },
    },
  });
};

module.exports = getCurrent;
