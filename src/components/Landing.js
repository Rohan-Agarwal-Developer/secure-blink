import React, { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../css/Landing.css";

import Banner from "./Banner";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import NumberData from "./NumberData";
import Courses from "./Courses";
import Earners from "./Earners";
import Testimonials from "./Testimonial";
import Refer from "./Refer";

const Landing = () => {
  return (
    <Fragment>
      <Banner />
      <NumberData />  
      <Courses />
      <Earners />
      <Refer />
      <Testimonials />
      <ContactPage />
      <Footer />
    </Fragment>
  );
};

export default Landing;
