const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Schema constructor
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new Schema({   // create Schema
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// static signup method 
userSchema.statics.signup = async function (email, password) {
  // input validation
  if (!email || !password) throw Error('All fields must be filled')
  if (!validator.isEmail(email)) throw Error('Email is not  valid')
  if (!validator.isStrongPassword(password)) throw Error('Password not strong enough')

  // throw error if email exsts in db
  const exists = await this.findOne({ email })
  if (exists) {
    throw Error('An account already exists with this email')
  }
  // hash password
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ email, password: hash })
  return user;
}

const User = mongoose.model('User', userSchema);  // get collection

module.exports = User;