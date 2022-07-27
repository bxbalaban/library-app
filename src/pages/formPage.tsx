
import "../components/style-form.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form1 from "./form1";
const Form = () => {


  return (
    <div id="form" className="form-container" >
      <div className="container-1">
        <p>Steps For You</p>
        <div className="container_items">
          <div className="stepper-item completed">
            <div className="step-counter">1</div>
            <div className="step-name">First</div>
          </div>
          <div className="stepper-item completed">
            <div className="step-counter">2</div>
            <div className="step-name">Second</div>
          </div>
          <div className="stepper-item active">
            <div className="step-counter">3</div>
            <div className="step-name">Third</div>
          </div>
          <div className="stepper-item">
            <div className="step-counter">4</div>
            <div className="step-name">Forth</div>
          </div>
        </div>
      </div>
      <div className="form-container-1">
        <div className="form-text-container">
          <div className="form-text-md">Form.</div>
        </div>
        <Form1></Form1>
        <div className="button-align ">
          <button className="button"> Back</button>
          <button className="button"> Next</button>
        </div>
        {/* TODO -- fix this tailwind css code  */}
      </div>

    </div>
  );
}

export default Form;
