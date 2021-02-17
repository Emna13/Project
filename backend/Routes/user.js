const express = require("express");
const { register, login, users } = require("../controllers/User.controller");
const {
  registerRules,
  validator,
  questionRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const { save, see, comment, deleteQuestion } = require("../controllers/question.controller");
const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post("/login", login);
Router.get("/current", isAuth(), (req, res) => res.json(req.user));
Router.get("/users" , isAuth(),users)
Router.get("/questions", see);
// Router.post("/questions/delete/:id",isAuth(), deleteQuestion)
Router.post("/questions/add", isAuth(), questionRules(), validator, save);
Router.put("/questions/comment/:id", isAuth(),comment);

module.exports = Router;
