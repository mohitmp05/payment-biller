import React, { useState } from "react";
import './toggle.css'

import Form from 'react-bootstrap/Form';

function Toggle() {
  const [toggle,setToggle] = useState(false);

  return (
    <div>
      <label class="switch">
        <input type="checkbox" onChange={(e) => setToggle(e.target.checked)}/>
        <span class="slider round"></span>
      </label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Autopay Limit</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                disabled={!toggle}
              />
            </Form.Group>
    </div>
  );
}

export default Toggle;
