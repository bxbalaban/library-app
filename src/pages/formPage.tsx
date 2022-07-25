
import "../components/style-form.css"
import React,{useState} from "react";
import {useForm} from "react-hook-form";

const Form = () => {
  const [formData, setFormData] = useState({email: "", password: "" , remember: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData({...formData, [e.target.name]: e.target.value})
     console.log(e.target.value)
  }


  return (
<div className="form-container">
    <div className="form-container-1">
      <div className="form-text-container">
        <div className="form-text-md">Form.</div>
      </div>
      <div className="form-box">
        <form action="" className="margin-top: 1.5rem; ">
          <div>
            <label htmlFor="" className="form-text-sm">Email</label>
            <input onChange={handleChange} type="email" name="email"  className="form-input"></input>
          </div>
          <div>
            <label htmlFor="" className="form-text-sm">Password</label>
            <input onChange={handleChange} type="password" name="password" className="form-input"></input>
          </div>
          <div>
            <label htmlFor="" className="form-text-sm">Multi Select</label>
            <select name="" id="" className="form-input">
              <option value="#1">#1</option>
              <option value="#2">#2</option>
            </select>
          </div>
          <div className="form-container-2">
            <input type="checkbox" className="form-checkbox" name="remember"></input>
            <label htmlFor="" className="form-text-sm">Remember Me</label>
          </div>
          <button className="button float-right"> Next</button> 
          {/* TODO -- fix this tailwind css code  */}
        </form>
      </div>
    </div>
    </div>
  );
}

export default Form;
