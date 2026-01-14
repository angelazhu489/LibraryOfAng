const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Schema constructor

const blogSchema = new Schema({   // create Schema
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);  // get collection

module.exports = Blog;