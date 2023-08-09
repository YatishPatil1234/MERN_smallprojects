// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = await Blog.create({ title, content, author });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a new blog post' });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch blog posts' });
  }
});

// Get a specific blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch the blog post' });
  }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the blog post' });
  }
});

module.exports = router;
