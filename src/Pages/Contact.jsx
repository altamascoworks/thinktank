import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg="5" className="Left">
            <h3>Contact Information</h3>
            <p>
              Fill up the form and our Team will get back to you within 24 hours
            </p>
          </Col>
          <Col className="Right">
            <input type="text" className="inpu" placeholder="First Name" /> <br />
            <br />
            <input type="text" className="inpu" placeholder="Last Name" /> <br />
            <br />
            <input type="email" className="inpu" placeholder="Email" /> <br />
            <br />
            <input
            className="inpu"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />{" "}
            <br />
            <br />
            <input className="inpu" type="text" name="" id="" placeholder="Company Name" />{" "}
            <br />
            <br />
            <input className="inpu" type="number" name="" id="" placeholder="Number of Seats" />
            <br />
            <br />
            <textarea className="inpu" placeholder="Message" name="" id="" cols="30" rows="3"></textarea>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}
