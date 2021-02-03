import React, { useState } from "react";
import "./Signup.css";
import backgroundImg from "./sharing.jpg";
import { register } from "../../js/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Col, Form } from "react-bootstrap";


import NavBar from "../NavBar/NavBar";

const SignUp = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({ name, lastName, gender, phoneNumber, email, password })
    );
  };
  return (
    <div>
      <header>
        <NavBar/>
      </header>
    
    
    <div className="Container" style={{ backgroundColor: "#F6F6F6" }}>
      {loading ? (
        <div class="spinner-border" role="status" style={{textAlign:"center"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div
          style={{
            backgroundImage: `url(${backgroundImg}`,
            backgroundPosition: "left ",
            backgroundSize: "700px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="col-md-4 offset-md-7 pt-4">
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
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label class="form-label" for="form3Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label class="form-label" for="form3Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label class="form-label" for="form3Example2">
                      Gender
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label class="form-label" for="form3Example2">
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label class="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-danger btn-block mb-4"
                onClick={addUser}
              >
                Sign up
              </button>

              <div class="text-center">
                <p>or sign up with:</p>

                <button type="button" class="btn btn-danger btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-dark btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SignUp;
