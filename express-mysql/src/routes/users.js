const express = require("express");

const router = express.Router();

const UserController = require("../controller/users");
const {
  getAllUsers,
  createNewUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
} = UserController;

const upload = require("../middleware/multer");

// Read - GET
router.get("/", getAllUsers);

// Create - POST
router.post("/", createNewUser);

// Update - Patch
router.patch("/:id", updateUserPatch);

// Update - Put
router.put("/:id", updateUserPut);

// Delete - Delete
router.delete("/:id", deleteUser);

// Upload Assets (PDF, Image, File, etc)
router.post("/assets", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.status(201).json({
    message: "File uploaded successfully",
    file: req.file,
  });
});

module.exports = router;
