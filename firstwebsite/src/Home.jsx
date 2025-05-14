import React from "react";
import styled from "styled-components"; //using styled-components for styling

import HomeStyle from "./HomeStyle.module.css"; //using module style

import { Button } from "@mui/material"; //using material ui for styling

const Home = () => {
  // styled-components
  const Title = styled.h2`
    font-size: 1.5em;
  `;
  const Pragraph = styled.p`
    color: red;
  `;
  return (
    <>
      <div>
        <Title>Home</Title>
        <Pragraph>Welcome to the Home page!</Pragraph>

        {/* this is module style  */}
        <div className={HomeStyle.box}>Module Style</div>

        <br />

        {/* material ui */}
        <Button variant="contained">Button</Button>
      </div>
    </>
  );
};

export default Home;
