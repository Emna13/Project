import React from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";



const Home = () => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <Redirect to="/skills" />
      ) : (
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/max/1920/1*9aWXvm6c0wpF5CB0H6UFVw.jpeg')",
            backgroundRepeat: "no-repeat",
            height: "100%",
            backgroundPosition: "center",
           
            backgroundSize: "cover",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <img
                  src="https://gomycodewebsite.blob.core.windows.net/website/img/black_Logo_342868e838_129748d4cd.svg"
                  className="center"
                  alt=""
                />
                <h1 className="mb-3" style={{ fontWeight: "bold" }}>
                  Learn by <span style={{ color: "red" }}>S</span>haring
                </h1>
                <h5 className="mb-4">
                  Best free content for GoMyCode community
                </h5>
                <a
                  href="/signup"
                  className="btn btn-outline-light btn-lg m-2"
                  role="button"
                >
                  Sign Up
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="/login"
                  role="button"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
