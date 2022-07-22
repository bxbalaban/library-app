import React from "react";
import "../components/style-main.css"
const bg_book = require("../assets/bg-book.png")

const Main = () => {
  return (

    <div className="background">
      <div className="grid">
        <div className="grid-settings">
          <h1 className="header">Lorem ipsum dolor sit amet </h1>
          <p className="header_1">Free of Charge</p>
          <button className="button">Register Now</button>
        </div>
        <div>
          <img className="w-full" src={bg_book} alt=""></img>
        </div>
        <div className="container">
          <p>Steps For You</p>
          <p>.</p>
          <div className="stepper-wrapper">
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
      </div>
    </div>

  );
}

export default Main
