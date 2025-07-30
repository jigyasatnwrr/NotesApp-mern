const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST route: Create a new user
router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error while saving user:", error);
    res.status(500).json({ error: error.message });
  }
});

// Export the router
module.exports = router;
