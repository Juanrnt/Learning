const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {

  const token = req.headers.authorization?.split(" ")[1];

  try {
    const verified = jwt.verify(token, "loquenecesite");
    req.verifiedUser = verified.user;
    next();
  } catch (error) {
      console.error("error:", error);
    next();
  }
};

module.exports = {
  authenticate,
};