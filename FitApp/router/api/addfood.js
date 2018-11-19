const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Load Food Model
const Food = require("../../models/Food");

//load validation
const validateFoodInput = require("../../validation/food");
router.get("/test", (req, res) => res.json({ msg: "Profile work" }));
// @route GET api/addfood
// @desc Add food to database
// @access Public

router.post("/add", (req, res) => {
  const { errors, isValid } = validateFoodInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Food.findOne({ name: req.body.name }).then(food => {
    if (food) {
      return res.status(400).json("Food already exists");
    } else {
      const newFood = new Food({
        name: req.body.name,
        servingsize: req.body.servingsize,
        kcal: req.body.kcal,
        fat: req.body.fat,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fiber: req.body.fiber,
        sugar: req.body.sugar
      });
      newFood.save().then(newFood => res.json(newFood));
    }
  });
});
module.exports = router;
