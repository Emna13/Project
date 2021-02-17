import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import QuestionsHome from "./components/Question/QuestionsHome";
import QuestionsLook from "./components/Question/QuestionsLook";
import MyQuestions from "./components/Question/MyQuestions";
import { useDispatch } from "react-redux";
import { getProfile } from "./js/actions";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/skills" component={QuestionsHome} />
        <Route exact path="/skills/:skill" component={QuestionsLook} />
        <Route exact path="/skills/:skill/:id" component={MyQuestions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
