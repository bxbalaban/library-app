
import "../components/style-form.css"
import React,{useState} from "react";
import {useForm} from "react-hook-form";

const Form = () => {
  const{register, handleSubmit}=useForm();
  const onSubmit=handleSubmit((data)=>{
    console.log(data);
  })



  return (

    <div className="form-container">
      <div className="form-text-container">
        <div className="form-text-md">Form.</div>
      </div>
      <div className="form-box">
        <form action="" onSubmit={onSubmit} className="margin-top: 1.5rem; ">
          <div>
            <label htmlFor="" className="form-text-sm">Email</label>
            <input  type="email" name="email"  className="form-input"></input>
          </div>
          <div>
            <label htmlFor="" className="form-text-sm">Password</label>
            <input type="password" className="form-input"></input>
          </div>
          <div>
            <label htmlFor="" className="form-text-sm">Multi Select</label>
            <select name="" id="" className="form-input">
              <option value="#1">#1</option>
              <option value="#2">#2</option>
            </select>
          </div>
          <div className="form-container-2">
            <input type="checkbox" className="form-checkbox"></input>
            <label htmlFor="" className="form-text-sm">Remember Me</label>
          </div>
          <button className="button float-right"> Next</button> 
          {/* TODO -- fix this tailwind css code  */}
        </form>
      </div>
    </div>

  );
}

export default Form;
