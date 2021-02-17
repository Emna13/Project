import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../js/actions";

const QuestionModal = ({ handleClose, show, match }) => {
  const [skill, setSkill] = useState(match.params.skill);
  const [questionBody, setQuestionBody] = useState("");
  const dispatch = useDispatch();

  const addQuestion = (e) => {
    e.preventDefault();
    dispatch(
      add({
        skill,
        questionBody,
      })
    );
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"darkGrey", fontFamily:'system-ui'}}>Share a question about <span style={{color:'#fa4d37',fontWeight:"bold" }}>{skill}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{fontStyle:'italic'}}>Please write your question in this box:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setQuestionBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={addQuestion}>
            Post it !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuestionModal;
