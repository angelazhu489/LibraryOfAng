const Blog = require('../models/blogModel'); // import db collection

// READ – all blogs sorted by creation date
const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.status(200).json(blogs)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// READ – single blog 
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.status(200).json({ blog: result, title: result.title });
    }).catch((error) => {
      res.status(404).json('404', { error: error.message });
    });
}

const blog_create_post = async (req, res) => {
  try {
    const blog = await new Blog(req.body);
    await blog.save()
    res.status(200).json(blog);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const blog_delete = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOneAndDelete({ _id: id })
    res.status(200).json(blog)
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_post,
  blog_delete
}