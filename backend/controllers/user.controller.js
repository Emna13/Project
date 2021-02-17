const bcryt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../model/User");

const secretOrKey = config.get("secretOrKey");

exports.register = async (req, res) => {
  const { name, lastName, gender, phoneNumber, email, password } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes) return res.status(401).json({ msg: "user already exists" });
    const newUser = new User({
      name,
      lastName,
      gender,
      phoneNumber,
      email,
      password,
    });
    const salt = await bcryt.genSalt(10);
    const hash = await bcryt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(err);
    res.status(500).json({ errors: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "bad credentails" });
    const isMatch = await bcryt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "bad credentials!!" });
    const payload = {
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      email: user.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
exports.users = async (req, res) => {
  try {
    const user = await User.find()
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
  }
};

