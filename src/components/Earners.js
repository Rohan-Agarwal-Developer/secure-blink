import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import earner1 from "../img/earner1.jpeg";
import earner2 from "../img/earner2.jpg";

const earners = [
  {
    img: earner1,
    money: "₹8,00,000",
  },
  {
    img: earner2,
    money: "₹8,00,000",
  },
  {
    img: earner1,
    money: "₹8,00,000",
  },
  {
    img: earner2,
    money: "₹8,00,000",
  },
];

const Banner = () => {
  return (
    <Container fluid className="earner">
      <div className="title">Top Earners</div>
      <div className="description">Transforming Ideas into Reality</div>
      <Row style={{overflowX: "scroll"}}>
        {earners.map((earner) => {
          return (
            <Col lg={3} md={3} sm={3} className="earners-card">
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={earner.img} alt="none" />
                <Card.Body style={{ padding: 0, marginTop: "5px" }}>
                  <Card.Title className="money">{earner.money}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Banner;
