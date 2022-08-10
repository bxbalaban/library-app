
import { finished } from "stream";
import "../components/style-output.css"
import Footer from "./footer";
import Navbar from "./navbar";
import OutputForm from "./outputForm";
import OutputFilter from "./outputFilter";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

var data = require("../userData.json");
const colNames : GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'fullName', headerName: 'Full Name', width: 230 },
]

const Output = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <OutputForm data={data} colNames={colNames}></OutputForm>
      </div>
        {/* <OutputFilter></OutputFilter> */}
      <Footer></Footer>
    </div>
  );
}

export default Output
