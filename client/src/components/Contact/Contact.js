import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { useDispatch } from "react-redux";
import { addMessage } from "../../js/actions";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const addMsg = (e) => {
    e.preventDefault();
    dispatch(addMessage({ subject, message }));
    setSubject("");
    setMessage("");
    alert(
      "Tank you for your message. We will get back to you as soon as possible"
    );
  };

  return (
    <div>
      <NavBar />
      <MDBContainer className="form">
        <MDBRow>
          <MDBCol s md="6">
            <form>
              <p className="h4 text-center mb-4">Write to us</p>
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="text-center mt-4">
                <MDBBtn color="danger" outline type="submit" onClick={addMsg}>
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default Contact;
