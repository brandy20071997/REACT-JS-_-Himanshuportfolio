import React from "react";
// import "./UI/Form.css"
import "./Form.css";
import Button from "./Button"

const Form = () => {
  return (
    <form class="Form_styling mt-5 mr-5">
      <div class="form-group">
        {/* <label for="exampleFormControlInput1">Email address</label> */}
        <input
          type="Text"
          class="form-control input_design "
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <br></br>
      <div class="form-group ">
        {/* <label for="exampleFormControlInput1">Email address</label> */}
        <input
          type="Email"
          class="form-control input_design mt-2"
          id="exampleFormControlInput1"
          placeholder="Email"
        />
      </div>
      <br></br>
      <div class="form-group">
        {/* <label for="exampleFormControlInput1">Email address</label> */}
        <input
          type="Text"
          class="form-control input_design mt-2"
          id="exampleFormControlInput1"
          placeholder="Subject"
        />
      </div>
      <br></br>

      <div class="form-group">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <textarea
          class="form-control input_design mt-2"
          id="exampleFormControlTextarea1"
          placeholder="Message"
          rows="5"
        ></textarea>
      </div>

      <div>
        {/* <Button btnStyle="btnstyling_2" value="Send"/> */}
        <Button btnstyle="btnstyling_3" value="SEND" />
      </div>
    </form>
  );
};

export default Form;
