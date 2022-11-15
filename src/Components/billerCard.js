import React from "react";
import { Link } from "react-router-dom";

function billerCard(props) {
  return (
    <div className="ui card">
        <div class="ui items">
          <div class="item">
            <div class="ui tiny image">
              <img src={props.image} style={{width:"100%",height:75}} />
            </div>
            <div class="middle aligned content">
              <Link className="header" to='/register'>{props.name}</Link>
            </div>
          </div>
          </div>
      </div>
  )
}

export default billerCard