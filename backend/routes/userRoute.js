const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

//create -->post
router.route("/register").post(registerUser);

// login
router.route("/login").post(loginUser);

// logout
router.route("/logout").get(logOut);

// forgot Password
router.route("/password/forgot").post(forgotPassword);

// reset Password
router.route("/password/reset/:token").put(resetPassword);

// Get User Details
router.route("/me").get(isAuthenticatedUser, getUserDetails);

// Update User Password:
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// Update User Profile:
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// Get All User (Admin):
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAllUser);

// Get Single User (Admin), Update User Role (Admin), Delete User (Admin):
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser);

module.exports = router;
