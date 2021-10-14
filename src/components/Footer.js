import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <div className="footer-row">
        <div className="footer-left">
          <div style={{textAlign: "center"}}>2021-2022 © Course Pro Private Limited</div>
        </div>
        <div className="footer-right" >
            <div>Terms {"&"} Conditions</div>
            <div className="privacy">Privacy Policy</div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
