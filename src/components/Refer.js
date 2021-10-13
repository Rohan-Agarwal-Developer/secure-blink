import React from "react";

import Container from "react-bootstrap/Container";

import background from "../img/Group 12142.png";

const Refer = () => {
  return (
    <Container fluid className="background">
      <div className="title">Refer</div>
      <div className="description">How it works</div>
      <img src={background} style={{ width: "100%" }}></img>
    </Container>
  );
};

export default Refer;
