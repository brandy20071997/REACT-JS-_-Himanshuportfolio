import React from "react";
import "./Career.css"
const Career = (props) => {
  return (
    <div>
      <p class="decDesign">
          <div class="row">
              <div className="col-md-1">
              <b>{props.year} </b>
              <i class="far fa-dot-circle"></i>{" "}
              </div>
              <div className="col-md">
              <span class="decDesign_2">{props.dec}</span>{" "}
              </div>

          </div>
       
        
      </p>
    </div>
  );
};

export default Career;
