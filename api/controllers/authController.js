const User = require("../models/User");
const brcypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const salt = await brcypt.genSalt(10);
    const hashPassword = await brcypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("User not found");
    }
    const validPassword = await brcypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, login };
