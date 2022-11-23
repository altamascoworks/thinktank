import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              voluptatibus praesentium assumenda, corrupti, atque impedit
              facilis iste numquam culpa officiis soluta! Saepe cupiditate,
              quisquam praesentium magni minima beatae molestias distinctio?
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex
              recusandae unde temporibus libero rem aut excepturi nesciunt
              veritatis voluptatum illo sequi, minus corrupti, eaque doloremque
              reprehenderit voluptate non est.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Our Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex
              recusandae unde temporibus libero rem aut excepturi nesciunt
              veritatis voluptatum illo sequi, minus corrupti, eaque doloremque
              reprehenderit voluptate non est.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
