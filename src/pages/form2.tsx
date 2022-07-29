
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../components/style-form.css"
function Form2() {

    const [formData, setFormData] = useState({ email: "", password: "", remember: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  return (
    <div className="form-box">
          <form action="" className="margin-top: 1.5rem; ">
            <div>
              <label htmlFor="" className="form-text-sm">Email</label>
              <input onChange={handleChange} type="email" name="email" className="form-input"></input>
            </div>
           
          
            
          </form>
        </div>
        
  )
}

export default Form2