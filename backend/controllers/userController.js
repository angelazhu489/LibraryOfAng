const User = require('../models/userModel'); // import db collection

const login_user = async (req, res) => {
  // User.signup()
  res.json(({ msg: 'login user' }))
}

const signup_user = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password)
    res.status(200).json({ email, user });
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  login_user,
  signup_user
}