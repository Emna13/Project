const express = require("express");
const { register, login} = require("../controllers/User.controller");
const {
  registerRules,
  validator,
  questionRules,
  messageRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const {
  save,
  see,
  comment,
} = require("../controllers/question.controller");
const { saveM, seeM } = require("../controllers/message.controller");
const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post("/login", login);
Router.get("/current", isAuth(), (req, res) => res.json(req.user));
Router.get("/questions", see);
Router.post("/questions/add", isAuth(), questionRules(), validator, save);
Router.put("/questions/comment/:id", isAuth(), comment);

Router.post("/message/add",isAuth(), messageRules(), saveM);


module.exports = Router;
