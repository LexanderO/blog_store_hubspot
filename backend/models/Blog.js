const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogId: { type: String, unique: true, required: true },
  name: String,
  description: String,
  url: String,
  author: String,
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
