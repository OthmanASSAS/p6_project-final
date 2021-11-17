const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.headers.authorization.split(" ")[1];
  const { jwtSecret } = process.env;
  // Check if no token

  // Verify token

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log({ decoded });
    const userId = decoded.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};
