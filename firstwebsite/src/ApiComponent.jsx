import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>
                  <img src={i.image} height={"100px"} width={"100px"} />
                </td>
                <td>{i.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiComponent;
