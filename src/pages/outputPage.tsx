
import { finished } from "stream";
import "../components/style-output.css"
import Footer from "./footer";
import Navbar from "./navbar";
import OutputForm from "./outputForm";
import OutputFilter from "./outputFilter";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

var data = require("../userData.json");
function getFullName(params: any) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter:getFullName
  },
];


const Output = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <OutputForm data={data} colNames={columns}></OutputForm>
      </div>
        {/* <OutputFilter></OutputFilter> */}
      <Footer></Footer>
    </div>
  );
}

export default Output
