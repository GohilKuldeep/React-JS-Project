import React, { useCallback, useState } from "react";
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
import Display from "./Display";
import { Outlet } from "react-router";

const BasicForm = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [moNo, setMoNo] = useState("");
  let [id, setId] = useState("");
  let [data, setData] = useState([]);

  // insert and update data
  const onSubmitData = useCallback((e) => {
    e.preventDefault();
    if(id != ""){
      const res = data.map((i,index) => {
        if(id == index){
          i.name = name
          i.age = age
          i.moNo = moNo
        }
        return i
      })
      setData(res)
    }else{
      setData([
        ...data,
        {
          "name": name,
          "age": age,
          "moNo": moNo,
        },
      ]);
    }
    
    setName("");
    setAge("");
    setMoNo("");
    setId("");
  })


  // delete data
  // const delData = (id) => {
  //   const res = data.filter((i,index) =>{
  //     return id != index
  //   });
  //   setData(res);
  // }

  // update data
//   const updateData = (id) => {
//     const res = data.find((i,index) => {
//       return id == index
//     })
//     setName(res.name)
//     setAge(res.age)
//     setMoNo(res.moNo)
//     setId(id)
//     console.log(id);
    
//  }
  return (
    <Row>
      <Outlet/>
      <Col>
        <Container
          style={{
            padding: "2rem",
            borderRadius: "10px",
            backgroundColor: "lightblue",
            color: "black",
            margin: "0 auto",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Basic Form</h1>
          <br />
          <Row>
            <Col>
              <Row>
                <Col>
                  <InputGroup size="md">
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Name
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <br />
                <Col>
                  <InputGroup size="md">
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Age
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <br />
              <InputGroup size="md">
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Mobile No.
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="number"
                  value={moNo}
                  onChange={(e) => setMoNo(e.target.value)}
                />
              </InputGroup>
              <br />
              <Button variant="dark" onClick={onSubmitData}>
                Save
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
          <Display data={data}/>
        </Container>
      </Col>
      
    </Row>
  );
};

export default BasicForm;
