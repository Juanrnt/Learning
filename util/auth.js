const jwt = require("jsonwebtoken");

const createJWTToken = (user) => {
  return jwt.sign({ user }, "loquenecesite", {
    expiresIn: "1d",
  });
};

module.exports = {
  createJWTToken,
};
