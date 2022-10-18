const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        auth: false,
        error: "Unauthorized!",
      });
    } else {
      req.userId = decoded.id;
      next();
    }
  });
};

module.exports = verifyToken;
