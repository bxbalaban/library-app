
import { finished } from "stream";
import Footer from "./footer";
import Navbar from "./navbar";
import FormOutput from "./formOutput";
var data = require("../userData.json");

const Output = () => {

  const enum tableData {
    id,
    name,
    lastname
  }

  const getJSON = () => {
    data && data.map((user: { name: any; }) => {
      // if(user.id.toString() === "1") console.log(user.name) //gets spesific item by checking
      const userData = JSON.stringify(user)
      console.log(userData)
    })
  }
  const addJSON = () => {

    const fs = require("../userData.json")

    const jsonData = { "name": "John", "age": 30, "car": null };
    const jsonString = JSON.stringify(jsonData);

    fs.writeFile(fs, jsonString, 'utf8', function (err: any) {
      if (err) {
        return console.log(err);
      }
      console.log("file saved!");
    });
  }

  const newUser = {
    "id": 4,
    "name": "busra3",
    "lastname": "balaban3",
    "date": "04/08/22"
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <FormOutput />
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default Output
