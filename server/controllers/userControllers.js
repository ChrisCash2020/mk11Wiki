const express = require('express');
const User = require('../models/User');
exports.createNewUser = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    await User.saveUser(username, password);
    const [newUser, _] = await User.findNewUser();
    req.session.user = { id: newUser[0].id, username: newUser[0].username };
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getUserById = async (req, res, next) => {
  let userid = req.params.id;
  try {
    const [posts, _] = await User.findOneUser(userid);
    res.status(200).json({ ...posts });
  } catch (err) {
    console.log(err);
    next(err);
  }
  exports;
};

exports.loginUser = async (req, res, next) => {
  let { username, password } = req.body;
  let [user, _] = await User.checkUserCred(username, password);
  if (user.length == 1) {
    req.session.user = { id: user[0].id, username: user[0].username };
  }
  res.status(200).json(user);
};
exports.auth = async (req, res, next) => {
  if (req.session.user) {
    res.send({ status: true, user: req.session.user });
  } else {
    res.send({ status: false, user: { id: '', username: '' } });
  }
};
