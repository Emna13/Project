const express = require('express');
const { register, login } = require("../controllers/User.controller");
const { registerRules, validator, questionRules } = require("../middleware/validator");
const isAuth=require('../middleware/passport-setup')
const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post('/login',login)
Router.get('/current', isAuth(),(req,res)=>res.json(req.user))
Router.get('/questions',(req,res)=>res.send(req.questionsBody))
Router.post('/questions/add', questionRules(),validator)

module.exports = Router;
