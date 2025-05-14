import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  Form,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";
import axios from "axios";

const ApiCrudExample = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [allData, setAllData] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    if(id != '') {
      axios
        .put(`http://localhost:3000/users/${id}`, data)
        .then(() => console.log("Updated Successfully"));
    }else{
      axios
      .post("http://localhost:3000/users", data)
      .then(() => console.log("Inserted Successfully"));
    }
      displayData()
      setData({
        name: "",
        age: "",
      })
      setId("");
  };

  const displayData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };

  useEffect(() => {
    displayData();
  }, []);

  const delData = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        console.log("Deleted Successfully");
        displayData();
      });
  }
  
  const updateData = (id) => {
    axios.patch(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data));
      setId(id);
  }

  return (
    <div>
      <Row>
        <Col>
          <Container
            style={{
              padding: "2rem",
              borderRadius: "10px",
              backgroundColor: "lightgreen",
              color: "black",
              margin: "0 auto",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Basic Form</h1>
            <br />
            <Row>
              <Col>
                <InputGroup size="md">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Name
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                  />
                </InputGroup>
                <br />
                <InputGroup size="md">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Age
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    type="number"
                    value={data.age}
                    name="age"
                    onChange={handleChange}
                  />
                </InputGroup>
                <br />
                <Button variant="dark" onClick={onSubmitData}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <Container
            style={{
              padding: "2rem",
              borderRadius: "10px",
              backgroundColor: "#a9a9a9",
              color: "black",
              margin: "0 auto",
            }}
          >
            <Table bordered hover size="xl" responsive="lg">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((i) => {
                  return (
                    <tr>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>
                        <Button variant="info" onClick={() => updateData(i.id)}>Edit</Button>
                        <Button variant="danger" onClick={() => delData(i.id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default ApiCrudExample;
