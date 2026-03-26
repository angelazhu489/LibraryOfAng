const User = require('../models/userModel'); // import db collection
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

const login_user = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)  // find user in db
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const signup_user = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password) // add user to db
    const token = createToken(user._id);  // create jwt
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  login_user,
  signup_user
}