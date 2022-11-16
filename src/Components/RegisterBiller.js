import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function RegisterBiller(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Register Biller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Consumer Number</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Autopay</Form.Label>
              <br></br>
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="public"
                  onChange={(e) => setToggle(e.target.checked)}
                />
                <label></label>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Autopay Limit</Form.Label>
              <Form.Control type="text" autoFocus disabled={!toggle} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Add Biller
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterBiller;
