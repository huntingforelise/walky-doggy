"use strict";
const user = require("../models/user.js");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ res: "Missing fields!", error: true });
    } else {
      const theUser = await user.find({ username: username });
      if (theUser[0].password === password) {
        req.session.uid = user._id;
        return res.status(201).send({ res: theUser, error: false });
      } else if (!theUser || theUser.password !== password) {
        return res
          .status(400)
          .send({ res: "Wrong username and/or password!", error: true });
      }
    }
  } catch (e) {
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.create = async (req, res) => {
  const {email, username } = req.body;
  const userEmail = await user.findOne({ email: email });
  const userUsername = await user.findOne({ username: username });
  if (userEmail)
    return res
      .status(409)
      .send({ error: '409', message: 'User with this E-mail already exists' });
  if (userUsername)
     return res
      .status(409)
      .send({ error: '409', message: 'Username already exists' });
  try {
    const newUser = new user(...req.body);
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