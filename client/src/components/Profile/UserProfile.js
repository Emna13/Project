import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfile, seeQuestions, seeUsers } from "../../js/actions";
import { LinearProgress } from "@material-ui/core";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const UserProfile = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const question = useSelector((state) => state.questionReducer.question);
  const loadingQ = useSelector((state) => state.questionReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seeQuestions());
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <div>
        <NavBar/>
      <div>
        {loading ? (
          <LinearProgress />
        ) : !isAuth ? (
          <Redirect to="/login" />
        ) : (
          <div style={{ marginLeft: "50px" }}>
            <div className="Container">
              <div className="row">
                <div className="col-4">
                  <AccountBoxIcon
                    style={{ fontSize: 300, marginLeft: "-50px" }}
                  />
                  <h6>Name: {user.name}</h6>
                  <h6>Last Name: {user.lastName}</h6>
                  <h6>Gender: {user.gender} </h6>
                  <h6>Phone Number: {user.phoneNumber}</h6>
                  <h6>Email: {user.email} </h6>

                  <Link
                    to="/"
                    className="btn btn-danger col-3 mb-5 ml-5"
                    role="button"
                    rel="nofollow"
                    onClick={() => localStorage.removeItem("token")}
                  >
                    Log out
                  </Link>
                </div>
                <div className="col mt-5">
                  <h5 style={{ color: "rgb(229, 9, 20)" }}>My questions:</h5>
                  {loadingQ ? (
                    <LinearProgress />
                  ) : (
                    question
                      .filter(
                        (question) => question.postedBy.name === user.name
                      )
                      .map((question) => (
                        <div className="question">
                          <Link
                            to={`/skills/${question.skill}/${question._id}`}
                          >
                            <h6>
                              {question.skill} : {question.questionBody}
                            </h6>
                          </Link>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    <Footer/>
    </div>
  );
};

export default UserProfile;
