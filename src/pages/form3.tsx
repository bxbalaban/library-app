
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../components/style-form.css"
function Form3() {

  const [formData, setFormData] = useState({ purpose: "", otherText: ""})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  return (
    <div className="form-box">
      <form action="" className="margin-top: 1.5rem; ">
      <div>
          <label htmlFor="" className="form-text-sm">Purpose of Use</label>
          <select  name="purpose" id="purpose" className="form-input">
            <option value="bachelor">Education</option>
            <option value="research">Research</option>
            <option value="hobby">Hobby</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="form-text-sm">If other please specify</label>
          <input onChange={handleChange} type="text" name="otherText" className="form-input"></input>
        </div>

      </form>
    </div>

  )
}

export default Form3