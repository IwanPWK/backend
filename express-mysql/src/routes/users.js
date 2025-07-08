const express = require("express");

const router = express.Router();

const UserController = require("../controller/users");
const { getAllUsers, createNewUser, updateUser, deleteUser } = UserController;

// Read - GET
router.get("/", getAllUsers);

// Create - POST
router.post("/", createNewUser);

// Update - Patch
router.patch("/:id", updateUser);

// Delete - Delete
router.delete("/:id", deleteUser);

module.exports = router;
