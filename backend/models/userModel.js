import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator'

const Schema = mongoose.Schema;   // Schema constructor

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

// static login method 
userSchema.statics.login = async function (email, password) {
  // input validation
  if (!email || !password) throw Error('All fields must be filled');

  // find email in db
  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }
  // check password
  const match = await bcrypt.compare(password, user.password)
  if (!match) throw Error('Incorrect P\password');
  return user
}

export const User = mongoose.model('User', userSchema);  // get collection

// module.exports = User;