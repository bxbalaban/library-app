
import { finished } from "stream";
import "../components/style-output.css"
import Footer from "./footer";
import Navbar from "./navbar";
import OutputForm from "./outputForm";
import OutputFilter from "./outputFilter";

var data = require("../userData.json");

const colNames = [
  "id", "name", "lastName", "date", "birthday", "age", "email", "password", "book-list", "books-overdue", "user-status"
]

const Output = () => {

  // const getJSON = () => {
  //   data && data.map((user: { name: any; }) => {
  //     // if(user.id.toString() === "1") console.log(user.name) //gets spesific item by checking
  //     const userData = JSON.stringify(user)
  //     console.log(userData)
  //   })
  // }

  // const addJSON = () => {

  //   const fs = require("../userData.json")

  //   const jsonData = { "name": "John", "age": 30, "car": null };
  //   const jsonString = JSON.stringify(jsonData);

  //   fs.writeFile(fs, jsonString, 'utf8', function (err: any) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("file saved!");
  //   });
  // }

  return (
    <div>
      <Navbar></Navbar>
      <div className="output-align">
        <OutputFilter></OutputFilter>
        <OutputForm data={data} colNames={colNames}></OutputForm>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Output
