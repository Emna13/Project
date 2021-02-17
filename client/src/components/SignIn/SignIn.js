import { LinearProgress } from "@material-ui/core";
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../js/actions";


const SignIn = () => {
  const dispatch = useDispatch();

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
    
  };

  return (
    <div>
      
      {localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : 
      loading ? (
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
                  marginBottom: '40px',
                  
                }}
              >
                Please fill the form
              </h1>
            </div>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-block mb-4"
                onClick={loginUser}
              >
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <a href="/signup">Register</a>
                </p>
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
