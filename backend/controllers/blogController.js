const Blog = require('../models/blog'); // import db collection

// READ – all blogs sorted by creation date
const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('blogs/index', { blogs: result, title: 'All Blogs' });
    })
    .catch((err) => console.log(err));
}

// READ – single blog 
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('blogs/details', { blog: result, title: result.title });
    }).catch((err) => console.log(err));
}

const blog_create_get = (req, res) => {
  res.render('blogs/create', { title: 'New Blog' });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.redirect('/blogs');
    }).catch((err) => console.log(err));
}
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.send({ redirect: '/blogs' }))
    .catch(err => console.log(err));
}


module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}