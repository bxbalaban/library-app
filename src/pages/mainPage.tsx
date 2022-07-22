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
      </div>
    </div>

  );
}

export default Main
