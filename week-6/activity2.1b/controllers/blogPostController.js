const mongoose = require("mongoose");
const BlogPost = require("../models/blogPostModel");

// get all getBlogPosts
const getBlogPosts = async (req, res) => {
  try {
    const blogs = await BlogPost.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add one addBlogPost
const addBlogPost = async (req, res) => {
  try {
    const { title, content, author, publishedDate, published, user_id } =
      req.body;
    if (!title || !content || !author || !publishedDate || !user_id) {
      return res
        .status(400)
        .json({ error: "All fields (title, snippet, body) are required" });
    }

    const newBlogPost = new BlogPost({
      title,
      content,
      author,
      publishedDate,
      published,
      user_id,
    });
    const savedBlogPost = await newBlogPost.save();

    res.status(201).json(savedBlogPost);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get getBlogPost by ID
const getBlogPost = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete deleteBlogPost by ID
const deleteBlogPost = async (req, res) => {
  try {
    const blog = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update updateBlogPost by ID
const updateBlogPost = async (req, res) => {
  try {
    const blog = await BlogPost.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      {
        new: true, // To return the updated document
      }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getBlogPosts,
  addBlogPost,
  getBlogPost,
  deleteBlogPost,
  updateBlogPost,
};
