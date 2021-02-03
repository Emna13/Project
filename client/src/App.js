import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import Questions from "./components/Question/Questions";



function App() {
  return (
    <BrowserRouter>
      <Switch>
       
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/questions" component={Questions} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
