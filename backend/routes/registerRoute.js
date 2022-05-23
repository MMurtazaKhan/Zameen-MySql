const express = require("express");

const { registerationInProject, getAllRegistrationProjectOfSpecificUser, updateInstallmentStatus, getAllRegisterations } = require("../controllers/registerController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();


// post
router.route("/register/project/new/:id").post(isAuthenticatedUser, registerationInProject);

// get Get All projects of a specific user
router.route("/register/project/me").get(isAuthenticatedUser, getAllRegistrationProjectOfSpecificUser);

// get Get All project registerations
router
  .route("/admin/registerations")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAllRegisterations);

// put Update User Installment Status:
router.route("/project/Installments/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateInstallmentStatus);


module.exports = router;
