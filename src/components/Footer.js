import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col lg={6} md={6} sm={12} className="footer-left">
          <div>2021-2022 © Course Pro Private Limited</div>
        </Col>
        <Col lg={6} md={6} sm={12} className="footer-right" >
          <Row>
            <Col lg={6} md={6} sm={6}>Terms {"&"} Conditions</Col>
            <Col lg={6} md={6} sm={6}>Privacy Policy</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
