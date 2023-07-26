import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import desk1 from "../assets/dedicated.jpg";
import desk2 from "../assets/Private.jpg";
import price1 from "../assets/price1.jpg";
import price2 from "../assets/price6.jpeg";
import price3 from "../assets/price3.jpg";
import price4 from "../assets/price4.jpg";
import Button from "react-bootstrap/Button";

export default function OurPlans() {
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
              Choose from a plan that works for find the you & your team
            </h5>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col lg="3">
            <div className="plan">
              <img
                src={price1}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
              <br />
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
              <img
                src={price2}
                className="img-fluid"
                style={{ borderRadius: "10px", marginBottom: 18 }}
              />
              <div className="deskbor">
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
              <img
                src={price3}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
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
              <img
                src={price4}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
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
