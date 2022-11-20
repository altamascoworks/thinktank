import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="foot">
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Link className="foot-ele">Home</Link>
          </Col>
          <Col>
            <Link className="foot-ele">About Us</Link>
          </Col>
          <Col>
            <Link className="foot-ele">Contact Us</Link>
          </Col>
          <Col>
            <Link className="foot-ele">Sitemap</Link>
          </Col>
         
          <Col>
            <Link className="foot-ele">Privacy Policy</Link>
          </Col>
        </Row>
      </Container>

      <hr style={{ color: "white" }} />
      <Container>
        <Row>
          <Col>
            <Link>
              {" "}
              <AiFillFacebook  color="white" size={30}></AiFillFacebook>
            </Link>
          </Col>
          <Col>
            <Link>
              {" "}
              <AiFillLinkedin color="white" size={30}></AiFillLinkedin>
            </Link>
          </Col>
          <Col>
            <Link>
              {" "}
              <AiFillYoutube color="white" size={30}></AiFillYoutube>
            </Link>
          </Col>
          <Col>
            <Link>
              {" "}
              <AiFillTwitterCircle color="white" size={30}></AiFillTwitterCircle>
            </Link>
          </Col>
          <Col>
            <Link>
              {" "}
              <AiFillInstagram color="white" size={30}></AiFillInstagram>
            </Link>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}
