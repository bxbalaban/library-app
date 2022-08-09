import React from 'react'
import "../components/style-output.css"


interface Props {
  colNames: string[];
  data: any;
}

function OutputForm(props: Props) {
  return (
    <div>
      <div className='output-container'>
        <h1>OutputForm</h1>
        <div >

          <div className="output-container-1">
            {
              <table style={{ padding: "10px 10px" }}>
                <thead>
                  <tr>
                    {props.colNames.map((headerItem, index) => (
                      <th key={index}>{headerItem.toUpperCase()}</th>
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
          </div>
        </div>
      </div>
    </div>

  )
}

export default OutputForm