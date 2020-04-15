const express = require("express");
const router = express.Router();
const User = require("../models/user");
//VALIDATION
const Joi = require("@hapi/joi");
const schema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required().email(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required,
};

router.post("/register", async (req, res) => {
  //validate the data before making a user
  const { error } = Joi.validate(req.body, schema);
  res.send(error.details[0].message);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
