
import "../components/style-form.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form1 from "./form1";
import Form2 from "./form2";

import { Button } from "react-scroll";
import { BADHINTS } from "dns";
import { getAllByDisplayValue } from "@testing-library/react";
const Form = () => {

  const [count, setCount] = useState(0)
  let [back, setBack] = useState(false);

  const handleClick = (param: string) => {
    if (param === "b" && count > 0) {
      setCount(count - 1)
    }
    else if (param === "n" && count < 3) {
      setCount(count + 1)
    }

    if (count <= 0) {
      document.getElementById("btn-back")?.setAttribute("class", "hide-btn")
      document.getElementById("btn-next")?.setAttribute("class", "show-btn")
    }
    else if (count > 0 && count<= 3) {
      document.getElementById("btn-back")?.setAttribute("class", "show-btn")
      document.getElementById("btn-next")?.setAttribute("class", "show-btn")
      switch(count){
        case 1:
        {
          console.log("case 1: has been entered")
          document.getElementById("form1")?.setAttribute("class","show-form")
          document.getElementById("form2")?.setAttribute("class","hide-form")
          break;
        }
        case 2:
          {
            console.log("case 2: has been entered")
            document.getElementById("form1")?.setAttribute("class","hide-form")
          document.getElementById("form2")?.setAttribute("class","show-form")
          break;
          }
        case 2: 
          {break;}
        case 3:
          {break;}
        default:
          {break;}
      }
      

    }
    else if (count > 3) {
      document.getElementById("btn-next")?.setAttribute("class", "hide-btn")
      document.getElementById("btn-back")?.setAttribute("class", "show-btn")
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
        <div id="form1">
          <Form1></Form1>
        </div>
        <div id="form2">
          <Form2></Form2>
        </div>
       
        <div className="button-align ">
          <button id="btn-back" className="button hide" onClick={() => handleClick("b")} > Back</button>
          <button id="btn-next" className="button" onClick={() => handleClick("n")}> Next</button>
        </div>
        {/* TODO -- fix this tailwind css code  */}
      </div>

    </div>
  );
}

export default Form;
