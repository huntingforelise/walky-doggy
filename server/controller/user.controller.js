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
      res.status(200).send({ res: user, error: false });
      console.log("login user result:" + user);
    } else {
      return res.status(401).send({
        error: true,
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Username or password is incorrect", error: true });
  }
};

exports.create = async (req, res) => {
  const { email, username } = req.body;
  const userEmail = await User.findOne({ email: email });
  const userUsername = await User.findOne({ username: username });
  if (userEmail) {
    return res
      .status(409)
      .send({ error: true, message: "User with this E-mail already exists" });
  } else if (userUsername) {
    return res
      .status(409)
      .send({ error: true, message: "Username already exists" });
  }
  try {
    const newUser = new User({ ...req.body });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error : true, message: "Could not create user" });
  }
};

exports.profile = async (req, res) => {
  try {
    const username = req.params.user;
    console.log("req params: " + username);
    // const username = req.body.username;
    // console.log(username);
    const findUser = await User.findOne({ username: username });
    console.log("did i find the user", findUser);
    res.status(200).send({ res: findUser, error: false });
  } catch (e) {
    console.log(e);
    res.status(404).send({ message: "User not found", error: true });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error : true, message: "Could not log out, please try again" });
    } else {
      res.clearCookie("sid");
      res.status(200).send({ error: false, message: "Logout successful" });
    }
  });
};
