import React, { useState } from "react";
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

const UserCrud = () => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const onSubmitData = (e) => {
    e.preventDefault();
    if (id != "") {
      const res = data.map((i, index) => {
        if (id == index) {
          i = info;
        }
        return i;
      });
      setData(res);
    } else {
      setData([...data, info]);
    }
    setInfo({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const delData = (id) => {
    const res = data.filter((i, index) => {
      return id != index;
    });
    setData(res);
  };

  const updateData = (id) => {
    const res = data.find((i, index) => {
      return id == index;
    });
    setInfo(res);
    setId(id);
  };
  return (
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
                  value={info.name}
                  name="name"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
              <InputGroup size="md">
                <InputGroup.Text id="inputGroup-sizing-lg">Age</InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="number"
                  value={info.age}
                  name="age"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
              <InputGroup size="md">
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Salary
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="number"
                  value={info.salary}
                  name="salary"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
              <Button variant="dark" onClick={onSubmitData}>
              Submitm n  
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
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <Button variant="info" onClick={() => updateData(index)}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => delData(index)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Col>
    </Row>
  );
};

export default UserCrud;
