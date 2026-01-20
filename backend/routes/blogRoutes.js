const express = require('express'); // require express dependency
const blogController = require('../controllers/blogController')
const router = express.Router();  // create new router

// GET – all blogs
router.get('/', blogController.blog_index);

// GET – blog form
// router.get('/create', blogController.blog_create_get);

// GET – blog by id
router.get('/:id', blogController.blog_details)

// POST – add blog
router.post('/', blogController.blog_create_post);

// DELETE – blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;  // export router