import {nanoid} from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../components/style-form.css"
import data from "../userData.json"
function Form1() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setFormData] = useState({
    id:nanoid(),
    firstName: "",
    lastName: "",
    university:"",
    email:"",
    graduationDate:"",
    remember:"",
  })
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...addFormData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const fieldValue = e.target.value
  //   const fieldName = e.target.getAttribute("name") ?? "null";
  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;
  //   setFormData(newFormData);
  //   console.log("value is:" + fieldValue)
  // }

  // const handleAddFormSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   const newContact = {
  //     id:nanoid(),
  //     firstName: addFormData.firstName,
  //     lastName:addFormData.lastName ,
  //     email:addFormData.email
  //   }
  //   const newContacts=[...contacts,newContact];
  //   setContacts(newContacts);
  // }

  return (
    <div className="form-box">
      <form action="" className="margin-top: 1.5rem; " >
        <div>
          <label htmlFor="" className="form-text-sm">First Name</label>
          <input onChange={handleChange}  type="text" name="firstName" className="form-input"></input>
        </div>
        <div>
          <label htmlFor="" className="form-text-sm">Last Name</label>
          <input  onChange={handleChange} type="text" name="lastName" className="form-input"></input>
        </div>
        <div>
          <label htmlFor="" className="form-text-sm">University</label>
          <select name="university" id="university" className="form-input">
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
          </select>
        </div>
        <div>
              <label htmlFor=""  className="form-text-sm m-1" > Graduation Date (if not enter predicted graduation date) </label>
              <input onChange={handleChange} type="date" name="graduationDate" className="form-input"></input>
            </div>        
        <div className="form-container-2">
          <input onChange={handleChange} type="checkbox" className="form-checkbox m-1" name="remember"></input>
          <label htmlFor="" className="form-text-sm">Drop Out</label>
        </div>
      </form>
    </div>

  )
}

export default Form1