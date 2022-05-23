const express = require("express");

const { createBlog, getAllBlogs, deleteBlog } = require("../controllers/blogController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

// post
router.route("/blog/new").post(authorizedRoles("admin"), createBlog);

// get
router.route("/blogs").get(isAuthenticatedUser, getAllBlogs);

//delete
router.route("/blog/:id").delete(authorizedRoles("admin"), deleteBlog);



module.exports = router;
