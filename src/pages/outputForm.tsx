import React from 'react'
import "../components/style-output.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';



interface Props {
  colNames: GridColDef[];
  data: any;
}


function OutputForm(props: Props) {
  const [select, setSelection] = React.useState([]);
  const handleRowSelection = (e: { selectionModel: React.SetStateAction<never[]>; }) => {
    setSelection(e.selectionModel);
    console.log(select); // <-- The state is still not updated
  }
  return (
    <div>
      <div className='output-container'>
        <h1>OutputForm</h1>
        <div >
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={props.data}
              columns={props.colNames}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              // onSelectionModelChange={itm => console.log(itm)}
              onSelectionModelChange={(ids) => {
                console.log(ids)
              }}              
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default OutputForm