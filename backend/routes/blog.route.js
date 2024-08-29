import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/create',createBlog);
router.post('/update/:id',updateBlog);
router.delete('/:id',deleteBlog);
router.get('/all',getAllBlogs);

export default router;