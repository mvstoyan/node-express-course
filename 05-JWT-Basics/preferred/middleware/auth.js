const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authMiddleware(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decodedToken);
    req.user = { name: decodedToken.name };
    // console.log(req.user);
    next();
  } catch (err) {
    // console.log(err);
    res.status(401).json({ msg: 'unauthorized' });
  }
}

module.exports = authMiddleware;