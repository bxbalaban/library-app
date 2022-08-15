
import "../components/style-form.css"
import React, { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

const Form = () => {

  let stepComleted = "stepper-item completed";
  let stepActive = "stepper-item active";
  let stepInactive = "stepper-item ";

  const [count, setCount] = useState(1)
  const handleClick = (param: string) => {
    if (param === "b" && count > 0) {
      setCount(count - 1)
      const steps = document.getElementById("step" + count);
      steps?.classList.remove("completed")
      steps?.classList.add("active")
    }
    else if (param === "n" && count < 4) {
      setCount(count + 1)
      const steps = document.getElementById("step" + count);
      steps?.classList.remove("active")
      steps?.classList.add("completed")
    }
    console.log(count)

  }

  return (
    <div id="form" className="form-container" >
      <div className="container-1">
        <p>Steps For You</p>
        <div className="container_items">
          <div className={stepComleted} id="step0">
            <div className="step-counter">1</div>
            <div className="step-name">First</div>
          </div>
          <div className={stepActive} id="step1">
            <div className="step-counter" >2</div>
            <div className="step-name">Second</div>
          </div>
          <div className={stepInactive} id="step2">
            <div className="step-counter" >3</div>
            <div className="step-name">Third</div>
          </div>
          <div className={stepInactive} id="step3">
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
          {
            [
              count === 1 && (<Form1></Form1>),
              count === 2 && (<Form2></Form2>),
              count === 3 && (<Form3></Form3>),
            ]
          }
        </div>
        <div className="button-align ">
          {
            [
              count === 1 && ([
                <button id="btn-back" className="hide-btn" onClick={() => handleClick("b")} > Back</button>,
                <button id="btn-next" className="show-btn" onClick={() => handleClick("n")}> Next</button>,
              ]),
              count === 2 && ([
                <button id="btn-back" className="show-btn" onClick={() => handleClick("b")} > Back</button>,
                <button id="btn-next" className="show-btn" onClick={() => handleClick("n")}> Next</button>
              ]),
              count === 3 && ([
                <button id="btn-back" className="show-btn" onClick={() => handleClick("b")} > Back</button>,
                <button id="btn-next" className="submit-btn" onClick={() => handleClick("n")}>Submit</button>,
              ]),
              count === 4 && ([
                // window.location.href="/output",
                <a href="/output">
                  <button className="sure-btn">Sure?</button>
                </a>

              ]),
            ]
          }
        </div>
      </div>
      
    </div>
  );
}

export default Form;
