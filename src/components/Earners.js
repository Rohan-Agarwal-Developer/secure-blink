import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import earner1 from "../img/earner1.jpeg";
import earner2 from "../img/earner2.jpg";
import earner3 from "../img/earner3.jpeg";
import earner4 from "../img/earner4.jpeg";

const earners = [
  {
    img: earner1,
    money: "₹8,00,000",
  },
  {
    img: earner2,
    money: "₹5,00,000",
  },
  {
    img: earner3,
    money: "₹3,00,000",
  },
  {
    img: earner4,
    money: "₹1,00,000",
  },
];

const Banner = () => {
  return (
    <Container fluid className="earner">
      <div className="title">Top Earners</div>
      <div className="description">Transforming Ideas into Reality</div>
      <Row>
        {earners.map((earner) => {
          return (
            <Col lg={3} md={6} sm={6} className="earners-card">
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={earner.img} alt="none" className="card-image" />
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
