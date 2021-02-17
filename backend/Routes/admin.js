const express = require("express");
const {users } = require("../controllers/User.controller");
const isAuth = require("../middleware/passport-setup");
const { see } = require("../controllers/question.controller");
const { seeM } = require("../controllers/message.controller");
const Router = express.Router();


Router.get("/users" , isAuth(),users)
Router.get("/questions", see);
Router.get("/message/",seeM )


module.exports = Router;