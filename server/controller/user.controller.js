"use strict";
const User = require("../models/user.js");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ res: "Missing fields!", error: true });
  }
  try {
    const user = await User.findOne({ username: username });
    if (user.password === password) {
      req.session.uid = user._id;
      res.status(200).send(user);
    } else {
      return res.status(401).send({
        error: "401",
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
};


exports.create = async (req, res) => {
  const { email, username } = req.body;
  const userEmail = await User.findOne({ email: email });
  const userUsername = await User.findOne({ username: username });
  if (userEmail) {
    return res
      .status(409)
      .send({ error: '409', message: 'User with this E-mail already exists' });
  } else if (userUsername) {
    return res
      .status(409)
      .send({ error: '409', message: 'Username already exists' });
  }
  try {
    const newUser = new User({ ...req.body });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

exports.profile = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch {
    res.status(404).send({ error, message: 'User not found' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.status(200).send({ message: 'Logout successful' });
    }
  });
};