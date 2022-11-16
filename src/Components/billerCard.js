import React, { useState } from "react";
import RegisterBiller from "./RegisterBiller";

function BillerCard(props) {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  return (
    <div className="ui card">
      <button
        onClick={showModal}
        style={{
          background: "none",
          color: "inherit",
          border: "none",
          padding: "0px",
          font: "inherit",
          cursor: "pointer",
          outline: "inherit",
        }}
      >
        <div class="ui items">
          <div class="item">
            <div class="ui tiny image">
              <img src={props.image} style={{ width: "100%", height: 75 }} />
            </div>
            <div class="middle aligned content">
              <div className="header">{props.name}</div>
            </div>
          </div>
        </div>
      </button>
      <RegisterBiller show={show} onHide={() => setShow(false)} />
    </div>
  );
}

export default BillerCard;
