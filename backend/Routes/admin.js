const express = require("express");
const {users } = require("../controllers/User.controller");
const {
  validator,
  questionRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const { save, see, comment, deleteQuestion } = require("../controllers/question.controller");
const Router = express.Router();


Router.get("/users" , isAuth(),users)
Router.get("/questions", see);
// Router.post("/questions/delete/:id",isAuth(), deleteQuestion)


module.exports = Router;