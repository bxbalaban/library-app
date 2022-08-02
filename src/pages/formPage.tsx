
import "../components/style-form.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Routes, Route, useNavigate,Link } from 'react-router-dom';
import Form1 from "./form1";
import Form2 from "./form2";
import Output from "./outputPage";

import { Button } from "react-scroll";

import { getAllByDisplayValue } from "@testing-library/react";
const Form = () => {

  const [count, setCount] = useState(1)
  const [btnText, setBtnText] = useState("Next");

  const navigate = useNavigate();

  const navigateToOutput = () => {
    // 👇️ navigate to /output
    navigate('/output');
  };
  const handleClick = (param: string) => {
    if (param === "b" && count > 0) {
      setCount(count - 1)
    }
    else if (param === "n" && count < 4) {
      setCount(count + 1)
    }

    if (count >= 0 && count <= 3) {
      switch (count) {
        case 0:
          {
            document.getElementById("form1")?.setAttribute("class", "show-form")
            document.getElementById("form2")?.setAttribute("class", "hide-form")
            document.getElementById("btn-back")?.setAttribute("class", "hide-btn")
            document.getElementById("btn-next")?.setAttribute("class", "show-btn")
            break;
          }
        case 1:
          {
            document.getElementById("form1")?.setAttribute("class", "hide-form")
            document.getElementById("form2")?.setAttribute("class", "show-form")
            document.getElementById("btn-back")?.setAttribute("class", "show-btn")
            break;
          }
        case 2:
          {
            document.getElementById("form1")?.setAttribute("class", "show-form")
            document.getElementById("form2")?.setAttribute("class", "show-form")
            document.getElementById("btn-next")?.setAttribute("class", "show-btn")
            setBtnText("Next")
            break;
          }
        case 3:
          { //the last page print 
            document.getElementById("form1")?.setAttribute("class", "hide-form")
            document.getElementById("form2")?.setAttribute("class", "hide-form")
            document.getElementById("btn-next")?.setAttribute("class", "submit-btn")
            setBtnText("Submit")
            break;
          }
        case 4:
          { //go to the output page
           
            
            break;
          }
        default:
          {

            break;
          }
      }
    }
    console.log(count)
  }

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
        <div id="form1" className="show-form">
          <Form1></Form1>
        </div>
        <div id="form2" className="hide-form">
          <Form2></Form2>
        </div>

        <div className="button-align ">
          <button id="btn-back" className="hide-btn" onClick={() => handleClick("b")} > Back</button>
          <button id="btn-next" className="show-btn" onClick={() => handleClick("n")}> {btnText}</button>
        </div>
        {/* TODO -- fix this tailwind css code  */}
      </div>

    </div>
  );
}

export default Form;
