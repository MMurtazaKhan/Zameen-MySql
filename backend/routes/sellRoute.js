const express = require("express");

const {
  getAllPropertiesForAdmin,
  createProperty,
  getAllProperties,
  getPropertyDetails,
  updateProperty,
  deleteProperty,
  getAllPropertiesOfSpecificUser,
  createPropertyReview,
  getPropertyReviews
} = require("../controllers/sellContoller");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

// get
router.route("/admin/properties").get(authorizedRoles("admin"), getAllPropertiesForAdmin);

// get --User
router.route("/properties").get(getAllProperties);

// get Get All Properties of a specific user
router.route("/property/me").get(isAuthenticatedUser, getAllPropertiesOfSpecificUser);

// post
router.route("/property/new").post(isAuthenticatedUser, createProperty);

//get specific product detail
router.route("/property/:id").get(getPropertyDetails).put(updateProperty).delete(deleteProperty);


// Create New Review or Update the review:
router.route("/review").put(isAuthenticatedUser, createPropertyReview);

// Get product review :
router.route("/reviews").get(isAuthenticatedUser, getPropertyReviews);





module.exports = router;
