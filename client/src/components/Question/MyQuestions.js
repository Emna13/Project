import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { comment, seeQuestions } from "../../js/actions";
import { LinearProgress } from "@material-ui/core";
import Footer from "../Footer/Footer";

const MyQuestions = ({ match }) => {
  const question = useSelector((state) => state.questionReducer.question);
  var dateFormat = require("dateformat");
  const loading = useSelector((state) => state.questionReducer.loading);
  const dispatch = useDispatch();
  const [showCom, setShowCom] = useState(false);

  useEffect(() => {
    dispatch(seeQuestions());
  }, [dispatch]);

  const addCom = (id, item) => {
    dispatch(comment(id, { text: item }));
  };

  const showComments = (id) => {
    setShowCom(!showCom);
  };
 

  return (
    <div>
      <div>
        <NavBar />
        <div>
          {!localStorage.getItem("token") ? (
            <Redirect to="/login" />
          ) : loading ? (
            <LinearProgress />
          ) : (
            <div>
              <div style={{ marginLeft: "100px", marginTop: "30px", marginBottom:'100px' }}>
                {question
                  .filter(
                    (question) =>
                      question.skill.toUpperCase() ===
                      match.params.skill.toUpperCase()
                  )
                  .filter((question) => question._id === match.params.id)
                  .map((question, index) => (
                    <div>
                      <div style={{borderStyle:"groove ", padding:'5px', margin:'5px 100px 5px 20px'}}>
                        <div className="container">
                          <div className="row" >
                            <p
                              className="col-10 "
                              style={{ color: "grey", fontStyle: "italic" }}
                            >
                              Posted By: {question.postedBy.name}
                            </p>

                            <p
                              className="col-2"
                              style={{ color: "grey", fontStyle: "italic" , fontSize:'small', }}
                            >
                              {dateFormat(question.date, "mediumDate")}{" "}
                              {dateFormat(question.date, "shortTime")}
                              
                            </p>
                          </div>
                        </div>
                        <h6
                          style={{
                            fontFamily: "sans-serif",
                            marginLeft: "20px",
                            marginRight: "100px",
                            
                          }}
                        >
                          {question.questionBody}
                        </h6>

                        {question.comments
                          .filter(
                            (comment) =>
                              question.comments.indexOf(comment) ===
                              question.comments.length - 1
                          )
                          .map((comment) => (
                            <div
                              style={{
                                backgroundColor: "#F0F0F0",
                                margin: "50px 50px 5px 50px",
                                borderStyle:"inset "
                              }}
                            >
                              <div className="container">
                                <div className="row">
                                  <p className="col-10 " style={{fontSize:"small", fontStyle:"italic"}}>
                                    {comment.postedBy.name} :
                                  </p>

                                  <p className="col-2" style={{ color: "grey", fontStyle: "italic" , fontSize:'small'}}>
                                    {dateFormat(comment.date, "mediumDate")}{" "}
                                    {dateFormat(comment.date, "shortTime")}
                                  </p>
                                </div>
                              </div>

                              <div style={{ marginLeft: "20px" }}>
                                {comment.text}
                              </div>
                            </div>
                          ))}
                        <Link
                          onClick={() => showComments(question._id)}
                          style={{ marginBottom: "10px" }}
                        >
                          <span>
                            {!showCom ? "More comments" : "Less comments"}
                          </span>
                        </Link>

                        {showCom ? (
                          <div>
                            {question.comments
                              .filter(
                                (comment) =>
                                  question.comments.indexOf(comment) !==
                                  question.comments.length - 1
                              )
                              .map((comment) => (
                                <div
                                  style={{
                                    backgroundColor: "#F0F0F0",
                                    margin: "10px 50px 5px 50px",
                                    borderLeft:"solid rgb(229, 9, 2)"
                                  }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <p className="col-10 " style={{fontSize:"small", fontStyle:"italic"}}>
                                        {comment.postedBy.name} :
                                      </p>

                                      <p className="col-2" style={{ color: "grey", fontStyle: "italic" , fontSize:'small'}}>
                                        {dateFormat(comment.date, "mediumDate")}{" "}
                                        {dateFormat(comment.date, "shortTime")}
                                      </p>
                                    </div>
                                  </div>

                                  <div style={{ marginLeft: "20px" }}>
                                    {comment.text}
                                  </div>
                                </div>
                              ))}
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="container">
                          <div className="row">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                addCom(question._id, e.target[0].value);
                                e.target[0].value = "";
                              }}
                            >
                              <input
                                type="text"
                                id="typeText"
                                class="form-control col-10 mt-1 mr-5"
                                placeholder="Add a comment"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      <Footer/>
      </div>
    </div>
  );
};

export default MyQuestions;
