import React from "react";

import NavBar from "../NavBar/NavBar";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
        

        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/max/1920/1*9aWXvm6c0wpF5CB0H6UFVw.jpeg')",
            backgroundRepeat: "no-repeat",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
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
                  rel="nofollow"
                  target="_blank"
                >
                  Sign Up
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="/login"
                  target="_blank"
                  role="button"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Home;
