import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../js/actions";
import NavBar from "../NavBar/NavBar";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.userReducer.loading);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    if (localStorage.getItem("token")) {
      return history.push("/questions");
    }
  };

  return (
    <div>
      <NavBar />
      {/* localStorage.getItem("token") ? (
        <Redirect to="/questions" />
      ) :  */}
      {loading ? (
        <LinearProgress />
      ) : (
        <div className="container">
          <div className="col-md-8 offset-md-2 mt-5">
            <div className="row">
              <h1
                style={{
                  color: "#E50914",
                  fontFamily: "Georgia, serif",
                  textAlign: "center",
                }}
              >
                Please fill the form
              </h1>
            </div>
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label class="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label class="form-label" for="form2Example2">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="text-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-danger btn-block mb-4"
                onClick={loginUser}
              >
                Sign in
              </button>

              <div class="text-center">
                <p>
                  Not a member? <a href="/signup">Register</a>
                </p>
                <p>or sign up with:</p>

                <button type="button" class="btn btn-danger btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-warning btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default SignIn;
