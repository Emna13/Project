import React, { useState } from "react";
import "./Signup.css";
import backgroundImg from "./sharing.jpg";
import { register } from "../../js/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

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
      <div className="Container" style={{ backgroundColor: "#F6F6F6" }}>
        {loading ? (
          <LinearProgress />
        ) : user ? (
          <Redirect to="/login" />
        ) : (
          <div
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundPosition: "left ",
              backgroundSize: "700px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-md-4 offset-md-7 pt-5 ">
              <div className="row">
                <h1
                  style={{
                    color: "#E50914",
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginBottom: '20px',
                    
                  }}
                >
                  Please fill the form
                </h1>
              </div>

              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        placeholder='*Required'
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
                        className="form-control"
                        placeholder='*Required'
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label className="form-label" for="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        placeholder='*Required'
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-label" for="form3Example2">
                        Gender
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        placeholder='*Required'

                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <label className="form-label" for="form3Example2">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    placeholder='user@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder='At least 4 chars'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" for="form3Example4">
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
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
