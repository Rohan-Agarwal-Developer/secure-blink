import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import lecturer1 from "../img/lecturer1.jpeg";
import quotes from "../img/right-quotation-sign.png";

const testimonials = [
  {
    description:
      "It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides",
    name: "Anshul Jain",
    when: "Yesterday",
  },
  {
    description:
      "It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Provinding This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides",
    name: "Rajkumar Jain",
    when: "Yesterday",
  },
];

const Testimonials = () => {
  return (
    <Container fluid className="testimonials">
      <div className="title">Testimonials</div>
      <div className="description">
        Check out what out students think about us
      </div>
      <Row className="testimonial-row">
        {testimonials.map((item) => {
          return (
            <Col
              lg={6}
              md={6}
              sm={12}
              style={{ padding: "20px", paddingBottom: "10px" }}
            >
              <div className="testimonial-card">
                <div className="text">{item.description}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img src={lecturer1} className="testimonial-image"></img>
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="when">{item.when}</div>
                    </div>
                  </div>
                  <div>
                    <img src={quotes} className="quotes"></img>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Testimonials;
