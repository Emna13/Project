import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import NotListedLocationOutlinedIcon from "@material-ui/icons/NotListedLocationOutlined";
import { Link } from "react-router-dom";
import "./Question.css";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const QuestionCards = () => {
  const loading = useSelector((state) => state.questionReducer.state);
  const skills = [
    {
      title: "HTML",
      desc:
        "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images.",
    },
    {
      title: "CSS",
      desc:
        "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language (HTML).CSS is designed to enable the separation of presentation and content. ",
    },
    {
      title: "JavaScript",
      desc:
        "JavaScript is a programming language commonly used in web development. It was originally developed as a means to add dynamic and interactive elements to websites.JavaScript is a client-side scripting language.",
    },
    {
      title: " React",
      desc:
        "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components.React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      title: "Redux",
      desc:
        "Redux is a predictable state container for JavaScript apps. It helps us write applications that behave consistently, run in different environments, and it is easy to test.We can use Redux together with React, or with any other view library.",
    },
    {
      title: "API",
      desc:
        " API stands for Application Programming Interface. In practice, an API is “a set of functions and procedures” that allow you to access and build upon the data and functionality of an existing application.",
    },
    {
      title: "Node",
      desc:
        "Node.js is an open source development platform for executing JavaScript. It is intended to run on a dedicated HTTP server and to employ a single thread. Node.js applications are event-based and run asynchronously.",
    },
    {
      title: "Express",
      desc:
        "Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. It has been called the de facto standard server framework for Node.js.",
    },
    {
      title: "MongoDB",
      desc:
        "MongoDB is a cross-platform and open-source document-oriented NoSQL database. MongoDB uses JSON-like documents with optional schemas. This makes data integration for certain types of apps faster and easier.",
    },
  ];
  return (
    <div style={{ margin: "20px" }}>
      {loading ? (
        <LinearProgress />
      ) : (
        <MDBRow>
          {skills.map((skill) => (
            <MDBCol md="4">
              <MDBCard
                className="card-image"
                style={{
                  marginBottom: "15px",
                  hover: "border 10px black",
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h5 className="red-text">
                      <MDBIcon icon="chart-pie" /> Skill
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>{skill.title}</strong>
                    </MDBCardTitle>
                    <p>{skill.desc}</p>
                    <MDBBtn color="red">
                      <Link to={`/skills/${skill.title}`} className="link">
                        <NotListedLocationOutlinedIcon />
                        View questions
                      </Link>
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </div>
  );
};

export default QuestionCards;
