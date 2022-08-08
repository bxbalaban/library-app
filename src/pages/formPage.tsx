
import "../components/style-form.css"
import React, { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";

const Form = () => {

  const [count, setCount] = useState(1)
  const handleClick = (param: string) => {
    if (param === "b" && count > 0) {
      setCount(count - 1)
    }
    else if (param === "n" && count < 4) {
      setCount(count + 1)
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
          {
             [
              count === 1 && (<Form1></Form1>),
              count === 2 && (<Form2></Form2>),
              count === 3 && (<Form1></Form1>)
            ]
          }
        </div>
        <div className="button-align ">
          {
            [
              count === 1 && ([
                <button id="btn-back" className="hide-btn" onClick={() => handleClick("b")} > Back</button>,
                <button id="btn-next" className="show-btn" onClick={() => handleClick("n")}> Next</button>
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
                // Ask are you sure as a pop-up
                  window.location.href="/output"
                  
              ]),
            ]
          }

        </div>
        
      </div>

    </div>
  );
}

export default Form;
