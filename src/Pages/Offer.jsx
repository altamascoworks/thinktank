import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Offer() {
  return (
    <div className="price">
      <br />
      <Container>
        <Row>
          <Col>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Find the Glorious Spot at your own{" "}
            </h1>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Office Space
            </h1>
            <h5 style={{ textAlign: "center", color: "white" }}>
              Check our Latest offers
            </h5>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col lg="3">
            <div className="plan">
              
              
              <div className="deskbor">
                {" "}
                <br />
                <h4 style={{ fontWeight: "bold" }}>DAILY SEATS</h4>
              </div>
              <h5 style={{ color: "#7B9611", fontWeight: "bold" }}>
                INR 5,000 / Month
              </h5>
              <br />
              <p>(Per person + taxes)</p>
              <Button
                variant="secondary"
                style={{ backgroundColor: "#7B9611" }}
                size="lg"
              >
                Enquire Now
              </Button>{" "}
            </div>
            <br />
          </Col>
          <Col lg="3">
            <div className="plan">
             
              <div className="deskbor">
                <br />
                {" "}
                <h4 style={{ fontWeight: "bold" }}>DAILY SEATS</h4>
              </div>
              <h5 style={{ color: "#7B9611", fontWeight: "bold" }}>
                INR 5,000 / Month
              </h5>
              <br />
              <p>(Per person + taxes)</p>
              <Button
                variant="secondary"
                style={{ backgroundColor: "#7B9611" }}
                size="lg"
              >
                Enquire Now
              </Button>{" "}
            </div>
            <br />
          </Col>

          <br />
          <br />
          <Col lg="3">
            <div className="plan">
             
              <div className="deskbor">
                {" "}
                <br />
                <h4 style={{ fontWeight: "bold" }}>DAILY SEATS</h4>
              </div>
              <h5 style={{ color: "#7B9611", fontWeight: "bold" }}>
                INR 5,000 / Month
              </h5>
              <br />
              <p>(Per person + taxes)</p>
              <Button
                variant="secondary"
                style={{ backgroundColor: "#7B9611" }}
                size="lg"
              >
                Enquire Now
              </Button>{" "}
            </div>
            <br />
          </Col>
          <Col lg="3">
            <div className="plan">
            
              <div className="deskbor">
                {" "}
                <br />
                <h4 style={{ fontWeight: "bold" }}>DAILY SEATS</h4>
              </div>
              <h5 style={{ color: "#7B9611", fontWeight: "bold" }}>
                INR 5,000 / Month
              </h5>
              <br />
              <p>(Per person + taxes)</p>
              <Button
                variant="secondary"
                style={{ backgroundColor: "#7B9611" }}
                size="lg"
              >
                Enquire Now
              </Button>{" "}
            </div>
            <br />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
    </div>
  );
}
