import React from 'react'
import "../components/style-output.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



interface Props {
  colNames: GridColDef[];
  data: any;
}

function OutputForm(props: Props) {
  return (
    <div>
      <div className='output-container'>
        <h1>OutputForm</h1>
        <div >

          {/* <div className="output-container-1">
            {
              <table style={{ padding: "10px 10px" }}>
                <thead>
                  <tr>
                    {props.colNames.map((headerItem, index) => (
                      <th key={index}></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((user: { id: any; name: any; lastname: any; date: any; }) => (
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
          </div> */}

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={props.data}
              columns={props.colNames}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default OutputForm