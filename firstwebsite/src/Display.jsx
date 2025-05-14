import React, { memo } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const Display = ({data}) => {
    console.log("Caling");
    
  return (
    <div>
      <Table bordered hover size="xl" responsive="lg">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.moNo}</td>
                    <td>
                    {/* <Button variant="info" onClick={()=>updateData(index)}>Edit</Button> */}
                    {/* <Button variant="danger" onClick={()=>delData(index)}>Delete</Button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
    </div>
  )
}

export default memo(Display)
