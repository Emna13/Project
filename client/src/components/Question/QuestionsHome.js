import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seeQuestions } from "../../js/actions";
import { LinearProgress } from "@material-ui/core";
import QuestionCards from "./QuestionCards";
import Footer from "../Footer/Footer";

const Questions = () => {
  const loading = useSelector((state) => state.questionReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seeQuestions());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div>
        {!localStorage.getItem("token") ? (
          <Redirect to="/login" />
        ) : loading ? (
          <LinearProgress />
        ) : (
          <div>
            <QuestionCards />
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Questions;
