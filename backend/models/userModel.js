const mongoose = require('mongoose');
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

const User = mongoose.model('User', userSchema);  // get collection

module.exports = User;