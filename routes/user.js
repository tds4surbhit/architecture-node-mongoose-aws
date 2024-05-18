const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router
  .route("/")
  .get(controller.handleGetAllUsers) // Pass the function reference
  .post(controller.handleCreateNewUser); // Pass the function reference

router
  .route("/:id")
  .get(controller.handlegetUserById) // Pass the function reference
  .patch(controller.handleUpdateUserById) // Pass the function reference
  .delete(controller.deleteUserById); // Pass the function reference

module.exports = router;
