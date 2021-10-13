import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import image from "../img/study.png";

const Banner = () => {
  return (
    <Container fluid className="get-started">
      <Row>
        <Col lg={6} md={12} sm={12} className="left">
          <div className="head">
            AnyTime, anywhere Learn on your schedule from any device
          </div>
          <div className="body">
            We Believe everyone has the capcity to be creative Course Pro is a
            place where people develop their own potential
          </div>
          <Button variant="dark">Let's Get Start</Button>
        </Col>
        <Col lg={6} md={12} sm={12} className="col-no-padding right">
          <img src={image} width="100%" />
        </Col>
      </Row>
    </Container>
  );
};


export default Banner;