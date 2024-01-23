```javascript
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'your-secret-key';

// Function to generate new JWT
const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
};

// Function to verify JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.log('Token verification failed: ', err);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
```