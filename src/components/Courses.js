import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import course1 from "../img/course1.jpg";
import course2 from "../img/course2.jpeg";
import lecturer1 from "../img/lecturer1.jpeg";

const courses = [
    {
      img: course1,
      name: "Ultimate Business Intelligence Analyst A to Z Course 2021",
      students: "46995",
      hours: "11 hours 20 minutes",
      calender: "44 Lectures",
      lecturer: "Albert Hitler",
      lecturerImage: lecturer1,
      price: "10000",
      discountedprice: "1000",
    },
    {
      img: course1,
      name: "Adobe Photoshop Training: From Beginner to Pro",
      students: "46995",
      hours: "10 hours 40 minutes",
      calender: "10 Lectures",
      lecturer: "Wanda Willson",
      lecturerImage: lecturer1,
      price: "10000",
      discountedprice: "1000",
    },
    {
      img: course1,
      name: "Social Media Marketing - A to Z Content Marketing class 2021",
      students: "46995",
      hours: "14 Hours",
      calender: "120 Lectures",
      lecturer: "Albert Hitler",
      lecturerImage: lecturer1,
      price: "10000",
      discountedprice: "1000",
    },
  ];

const Courses = () => {
  return (
    <Container fluid className="courses">
        <div className="title">Courses</div>
        <div className="description">Our most popular courses</div>
        <Row>
          {courses.map((course) => {
            return (
              <Col lg={4} md={12} sm={12} className="course-card">
                <Card>
                  <Card.Img variant="top" src={course.img} alt="none" />
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <div className="students">{course.students} Students</div>
                    <div className="hours">
                      <div
                        style={{
                          display: "flex",
                          float: "left",
                          alignItems: "center",
                        }}
                      >
                        <div className="time"></div>
                        <div className="time-value">{course.hours}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          float: "right",
                          alignItems: "center",
                        }}
                      >
                        <div className="calender"></div>
                        <div className="calender-value">{course.calender}</div>
                      </div>
                    </div>
                    <div className="lecturer">
                      <div
                        style={{
                          display: "flex",
                          float: "left",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={course.lecturerImage}
                          className="picture"
                        ></img>
                        <div className="name">{course.lecturer}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          float: "right",
                          alignItems: "center",
                        }}
                      >
                        <div className="discounted-price">
                          {course.discountedprice}
                        </div>
                        <div className="price">{course.price}</div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
  );
};


export default Courses;