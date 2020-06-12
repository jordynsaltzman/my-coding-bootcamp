const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
require("../db");

router.post("/register", async (req, res) => {
  //validate the data before making a user
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //make sure user isnt already in the database
  User.find({
    email: req.body.email,
  }).then((emails) => {
    console.log("email");
    if (emails.length) {
      return res.status(404).send("Email Already exists");
      console.log("email eists");
    } else {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body,
      });

      user.save().then((doc) => {
        console.log(doc);
        if (!doc || doc.length === 0) {
          res.status(500).send("Internal server error");
        }
        res.send("succcess register");
      });
    }
  });

  //hash the password
  //const salt = bcrypt.genSalt(10);
  //const hashedPassword = bcrypt.hash(req.body.password, salt);
  console.log("hashed");
  //create a new user

  // res.send("last send");
  // try {
  //   const savedUser = await user.save();
  //   res.send({ user: savedUser });
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

router.post("/login", async (req, res) => {
  //validate the data before loggin in user
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //make sure user is in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found.");

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password.");

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  console.log(user);
  res.header("auth-token", token).send(token);

  res.send("Logged in");
});

module.exports = router;
