import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="order-md-1">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6} className="order-md-2">
            <div style={{ margin: "10px" }}>
              <table>
                <thead>
                  <tr>
                    <th>School/University</th>
                    <th>Degree</th>
                    <th> Year of completion</th>
                    <th>CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Birla Institute of Applied sciences</td>
                    <td>Btech(Computer Science and Engineering)</td>
                    <td>2024</td>
                    <td>8.71</td>
                  </tr>
                  <tr>
                    <td>2. ST Theresa senior secondary school</td>
                    <td>Intermediate</td>
                    <td>2020</td>
                    <td>9.89</td>
                  </tr>
                  <tr>
                    <td>3. ST Theresa senior secondary school</td>
                    <td>High School</td>
                    <td>2018</td>
                    <td>9.98</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
