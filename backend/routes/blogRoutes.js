import express from 'express'; // require express dependency
import { blogController } from '../controllers/blogController.js';
import { requireAuth } from '../middleware/requireAuth.js'

export const blogRoutes = express.Router();  // create new router

blogRoutes.use(requireAuth);

// GET – all blogs
blogRoutes.get('/', blogController.blog_index);

// GET – blog form
// router.get('/create', blogController.blog_create_get);

// GET – blog by id
blogRoutes.get('/:id', blogController.blog_details)

// POST – add blog
blogRoutes.post('/', blogController.blog_create);

// DELETE – blog
blogRoutes.delete('/:id', blogController.blog_delete);

// module.exports = router;  // export router