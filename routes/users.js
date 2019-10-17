var express = require("express");
var router = express.Router();
const User = require("../models/User.js");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.use(express.json());
const jwt = require("jsonwebtoken");

router.get("/all", async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", function(req, res, next) {
  res.send("Respond with a resource");
});

router.post("/login", async function(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const bcrypt = require("bcryptjs");
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      throw new Error("Login failed, no such Username or Password is wrong");
    }

    const token = jwt.sign({ name: user.username }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token);
    res.json({ username: username });
  } catch (err) {
    if (err.message === "Login failed") {
      err.status = 400;
    }
    next(err);
  }
});

router.post("/logout", function(req, res, next) {
  res.clearCookie("token").send("You are now logged out!");
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = new User(req.body);
    console.log(req.body);
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.status(500).end("You are not authorised");
  }
});

module.exports = router;
