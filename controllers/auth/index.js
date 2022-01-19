const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");
const {googleAuth, googleRedirect} = require("./googleAuth");

module.exports = {
  signup,
  signin,
  logout,
  googleAuth,
  googleRedirect,
};
