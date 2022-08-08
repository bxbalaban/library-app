
import { finished } from "stream";
import Footer from "./footer";
import Navbar from "./navbar";
import "../components/style-output.css"

var data = require("../userData.json");

const Output = () => {

  // const getJSON = () => {
  //   data && data.map((user: { name: any; }) => {
  //     // if(user.id.toString() === "1") console.log(user.name) //gets spesific item by checking
  //     const userData = JSON.stringify(user)
  //     console.log(userData)
  //   })
  // }

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

  const colNames = [
    "id", "name", "lastName", "date","birthday","age","email","password","book-list","books-overdue",""
  ]

  return (
    <div>
      <Navbar></Navbar>
      <div className='output-container'>
        <div>
          <h1>OutputForm</h1>
          <div className="output-align" >
            <div>
              filter
            </div>
            <div>
              {
                <table style={{ padding: "10px 10px" }}>
                  <thead>
                    <tr>
                      {colNames.map((headerItem, index) => (
                        <th key={index}>{headerItem.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user: { id: any; name: any; lastname: any; date: any; }) => (
                      <tr key={0}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Output
