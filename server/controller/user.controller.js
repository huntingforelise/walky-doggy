"use strict";

const user = require("../models/user.js");

exports.logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ res: "Missing fields!", error: true });
    } else {
      const theUser = await user.find({ username: username });
      if (theUser[0].password === password) {
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
