const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

const authenticateJWT = (req, res, next) => {
  let token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  token = token.replace('Bearer ', '')
  try {
    const secretKey = process.env.JWT_SECRET
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};


module.exports = authenticateJWT
