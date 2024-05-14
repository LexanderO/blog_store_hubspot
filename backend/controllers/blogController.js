const axios = require('axios');
const Token = require('../models/Token');
const Blog = require('../models/Blog');

exports.fetchBlogs = async (req, res) => {
    try {
        const tokenDetails = await Token.findOne().sort({ _id: -1 });
        if (!tokenDetails) {
            return res.status(401).json({ message: "No authorization token found." });
        }

        const blogs = await axios.get("https://api.hubapi.com/content/api/v2/blog-posts", {
            headers: { Authorization: `Bearer ${tokenDetails.accessToken}` },
        });
        res.json(blogs.data.objects);
    } catch (error) {
        console.error("Failed to fetch blogs:", error.response?.data || error.message);
        res.status(500).json({
            message: "Failed to fetch blogs",
            error: error.response?.data || error.message,
        });
    }
};

exports.saveBlog = async (req, res) => {
    const { blogId, name, description, url, author } = req.body;
    
    try {
        const existingBlog = await Blog.findOne({ blogId });
        if (existingBlog) {
            return res.status(409).json({ message: "Blog already exists in the database." });
        }

        const newBlog = new Blog({ blogId, name, description, url, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error("Error saving blog:", error);
        res.status(500).json({ message: "Failed to save blog", error: error.message });
    }
};

exports.getStoredBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (error) {
        console.error("Failed to fetch stored blogs:", error);
        res.status(500).json({ message: "Failed to fetch stored blogs", error: error.message });
    }
};
