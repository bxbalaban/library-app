import React from "react";
import "../components/style-main.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const bg_book = require("../assets/bg-book.png")

const Main = () => {
  return (

    <div id="main"  className="background">
      <div className="grid">
        <div className="grid-settings">
          <h1 className="header">Lorem ipsum dolor sit amet </h1>
          <p className="header_1">Free of Charge</p>
          
          <Button className="button" value={"Register Now"} to="form" spy={true} smooth={true} offset={-170} duration={500}></Button>
        </div>
        <div>
          <img className="w-full" src={bg_book} alt=""></img>
        </div>
       
      </div>
    </div>

  );
}

export default Main
