const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.fetchBlogs);
router.post("/saveBlog", blogController.saveBlog);
router.get("/getStoredBlogs", blogController.getStoredBlogs);

module.exports = router;
