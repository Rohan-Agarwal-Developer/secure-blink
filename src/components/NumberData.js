import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image from "../img/study.png";

const NumberData = () => {
  return (
    <Container fluid className="numbers">
        <Row>
          <Col lg={4} md={4} sm={4}>
            <div className="name">Total Students</div>
            <div className="number">5140</div>
            <div className="color-band"></div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="name">Partners</div>
            <div className="number">4123</div>
            <div className="color-band"></div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="name">Affiliate Distribution</div>
            <div className="number">4.18 Lac</div>
            <div className="color-band"></div>
          </Col>
        </Row>
      </Container>
  );
};

export default NumberData;