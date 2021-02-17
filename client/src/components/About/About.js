import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutBack">
        <p className="about">
          <br/>

          <span style={{color:'rgb(229, 9, 20)', fontWeight:'bold'}}>Share</span> is a knowledge sharing platform made to encourage the students
          of GoMyCode to exchange informations and help each other for a better
          learning experience.
          <br />

          <br/>
          On this platform, you can share your questions and difficulties. But
          also contribute in the growth of other students, by answering their
          questions and giving them feedbacks to help overcome the mistakes that
          you once made.
          <br/>

          <br/>
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default About;
