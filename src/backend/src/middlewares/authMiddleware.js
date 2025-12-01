const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'No token provided' });
  const token = header.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Invalid token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret123');
    const user = await User.findByPk(payload.id);
    if (!user) return res.status(401).json({ message: 'Invalid user' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
};

module.exports = authMiddleware;
