const express = require("express");

const {
  createProject,
  getAllProjects,
  getProjectDetails,
  updateProject,
  deleteProject,
  createProjectReview,
  getProjectReviews,
} = require("../controllers/projectController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

// post
router.route("/project/new").post(isAuthenticatedUser, authorizedRoles("user"), createProject);

// get
router.route("/projects").get(getAllProjects);

//get specific project detail
router
  .route("/project/:id")
  .get(getProjectDetails)
  .put(authorizedRoles("admin"), updateProject)
  .delete(authorizedRoles("admin"), deleteProject);

// Create New Review or Update the review:
router.route("/review").put(isAuthenticatedUser, createProjectReview);

// Get product review:
router.route("/reviews").get(isAuthenticatedUser, getProjectReviews);

module.exports = router;
