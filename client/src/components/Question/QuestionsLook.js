import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seeQuestions } from "../../js/actions";
import { Fab, LinearProgress, Tooltip } from "@material-ui/core";
import QuestionModal from "./QuestionModal";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import { Form } from "react-bootstrap";
import Footer from "../Footer/Footer";

const QuestionsLook = ({ match }) => {
  const question = useSelector((state) => state.questionReducer.question);
  const loading = useSelector((state) => state.questionReducer.loading);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  var dateFormat = require("dateformat");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(seeQuestions());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
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
              <div className="all">
                <h4 style={{ margin: "20px" }}>All Questions</h4>

                <Form.Group style={{ marginTop: "20px", width: "500px" }}>
                  <Form.Control
                    style={{ textAlign: "center" }}
                    type="text"
                    placeholder=" Search"
                    onChange={handleSearch}
                    value={search}
                  />
                </Form.Group>

                <Tooltip
                  title="Click to add a question"
                  aria-label="add"
                  style={{ marginTop: "10px" }}
                >
                  <Fab color="secondary" onClick={handleShow}>
                    <ContactSupportOutlinedIcon
                      className="fa fa-plus-circle"
                      style={{ fontSize: "30" }}
                    />
                  </Fab>
                </Tooltip>
              </div>
              <QuestionModal
                match={match}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
              <div style={{ marginLeft: "100px" }}>
                {question
                  .filter(
                    (question) =>
                      question.skill.toUpperCase() ===
                      match.params.skill.toUpperCase()
                  )

                  .filter((question) =>
                    question.questionBody
                      .toUpperCase()
                      .includes(search.toUpperCase())
                  )
                  .map((question) => (
                    <div>
                      
                      <div className="question">
                      <a className='questionList'
                          href={`/skills/${match.params.skill}/${question._id}`}
                        >
                        <div className="container">
                          <div className="row">
                            
                            <p
                              className="col-10 "
                              style={{ color: "grey", fontStyle: "italic", marginLeft: '-50px',}}
                            >
                              Posted By: {question.postedBy.name}
                            </p>

                            <p
                              className="col-2"
                              style={{ color: "grey", fontStyle: "italic" , fontSize:'small', marginLeft: '50px'}}
                            >
                              {dateFormat(question.date, "mediumDate")}{" "}
                                    {dateFormat(question.date, "shortTime")}
                            </p>
                          </div>
                        </div>
                        
                          {question.questionBody}
                        </a>
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

export default QuestionsLook;
