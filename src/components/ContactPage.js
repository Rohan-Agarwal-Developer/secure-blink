import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import message from "../img/message.png";
import telephone from "../img/telephone.png";
import location from "../img/location.png";
import Button from "react-bootstrap/Button";

import facebookIcon from "../img/Facebook.png";
import twitterIcon from "../img/Twitter.png";
import LinkedinIcon from "../img/Linkedin.png";
import githubIcon from "../img/Github.png";

const ContactPage = () => {
  return (
    <Container fluid className="contact">
      <div className="title">Contact Us</div>
      <div className="description">Reach out with any questions you have</div>
      <Row className="contact-section">
        <Col lg={4} md={12} sm={12}>
          <div className="left-header">Contact Information</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={message} className="icon"></img>
            <div>contact@coursepro.com</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={telephone} className="icon"></img>
            <div>1800-562-895, 1800-869-877</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={location} className="icon"></img>
            <div>102 Street, India</div>
          </div>
          <div className="left-header" style={{ marginTop: "50px" }}>
            Social Media Channel
          </div>
          <div style={{ display: "flex" }}>
            <img src={facebookIcon} className="social-icons"></img>
            <img src={twitterIcon} className="social-icons"></img>
            <img src={LinkedinIcon} className="social-icons"></img>
            <img src={githubIcon} className="social-icons"></img>
          </div>
        </Col>
        <Col
          lg={8}
          md={12}
          sm={12}
          className="right-column"
        >
          <div style={{ textAlign: "center" }}>
            <div className="right-header" style={{ textAlign: "center" }}>
              Fill up the form and out team will get back to you in 24 hours
            </div>
          </div>
          <form className="contact-form">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Email"
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Phone"
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Subject"
                />
              </Col>
            </Row>
            <Row className="last-row">
              <Col lg={12} md={12} sm={12}>
                <textarea
                  className="input-message"
                  name="w3review"
                  rows="4"
                  cols="40"
                  placeholder="Message"
                >
                </textarea>
              </Col>
            </Row>
            <Button variant="dark">Submit</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
