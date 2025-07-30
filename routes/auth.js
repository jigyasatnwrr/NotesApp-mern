const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');


router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be at least 4 characters long").isLength({ min: 4 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  
      }

      
      const { name, email, password } = req.body;

      
      const user = await User.create({
        name: name,       
        email: email,
        password: password,
      });

      res.status(201).json({ message: "User created successfully", user });

    } catch (error) {
      console.error("Error while saving user:", error);
      res.status(500).json({ error: error.message });
    }
  }
);


module.exports = router;
