import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="foot">
      <br />
      <br />
      <Container>
        <div></div>
        <Row>
          <Col sm="12" lg="3">
            <h1 style={{ color: "white" }}>MAKERspace</h1>

            <p style={{ color: "white" }}>
              Ideapod is a premium coworking space for freelancers,
              professionals, startups, and more.
            </p>

            <Row>
              <Col>
                <Link>
                  {" "}
                  <AiFillFacebook color="#9CC200" size={30}></AiFillFacebook>
                </Link>
              </Col>
              <Col>
                <Link>
                  {" "}
                  <AiFillLinkedin color="#9CC200" size={30}></AiFillLinkedin>
                </Link>
              </Col>
              <Col>
                <Link>
                  {" "}
                  <AiFillYoutube color="#9CC200" size={30}></AiFillYoutube>
                </Link>
              </Col>
              <Col>
                <Link>
                  {" "}
                  <AiFillTwitterCircle
                    color="#9CC200"
                    size={30}
                  ></AiFillTwitterCircle>
                </Link>
              </Col>
              <Col>
                <Link>
                  {" "}
                  <AiFillInstagram color="#9CC200" size={30}></AiFillInstagram>
                </Link>
              </Col>
            </Row>

            <br />
          </Col>

          <Col sm="3" lg="3">
            <h4 style={{ color: "#9CC200", fontSize: 20, fontWeight: "bold" }}>
              {" "}
              Quick Links
            </h4>
            <br />
            <Link className="foot-ele">Home</Link>
            <br />
            <br />
            <Link className="foot-ele" to="/about">
              About Us
            </Link>
            <br />
            <br />
            <Link className="foot-ele" to="/contact">
              Contact Us
            </Link>
            <br />
            <br />
          </Col>

          <Col sm="3" lg="3">
            <h4 style={{ color: "#9CC200", fontSize: 20, fontWeight: "bold" }}>
              Useful Links
            </h4>
            <br />
            <Link to="/plan" className="foot-ele">
              Pricing
            </Link>
            <br />

            <br />
            <Link to="/privacy" className="foot-ele">
              Privacy Policy
            </Link>
            <br />
            <br />
          </Col>

          <Col sm="12" lg="3">
            <h4 style={{ color: "#9CC200", fontSize: 20, fontWeight: "bold" }}>
              Contact Us
            </h4>
            <br />
            <BsFillTelephoneFill color="#90B00F"></BsFillTelephoneFill>
            &nbsp;
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:9007957227"
            >
              9007957227
            </a>
            <br />
            <br />
            <MdEmail color="#90B00F"></MdEmail>
            &nbsp;
            <span style={{ color: "white" }}>abc@gmail.com</span>
            <br />
            <br />
            <ImLocation2 color="#90B00F"></ImLocation2>
            &nbsp;
            <a
              style={{ color: "white",textDecoration:"none" }}
              href="https://www.google.com/maps/place/Signet+Tower/@22.5753111,88.4316639,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275af71bb3b0d:0x2110d4fdd8951475!8m2!3d22.5753111!4d88.4338526!16s%2Fg%2F11f_x9ydr5"
            >
              Signet Tower Dn-2, DN Block, Sector V, Bidhannagar, Kolkata, West
              Bengal 700091
            </a>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <hr style={{ color: "white" }} />
            <br />
          </Col>
        </Row>
      </Container>

      <Container>
        {/* <Row>
          <Col>
            <Link>
              {" "}
              <AiFillFacebook color="white" size={30}></AiFillFacebook>
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
              <AiFillTwitterCircle
                color="white"
                size={30}
              ></AiFillTwitterCircle>
            </Link>
          </Col>
          <Col>
            <Link>
              {" "}
              <AiFillInstagram color="white" size={30}></AiFillInstagram>
            </Link>
          </Col>
        </Row> */}

        <Row>
          <Col>
            <h5 style={{ color: "white" }}>
              © 2023 by Makerspace. All Rights Reserved.
            </h5>
          </Col>
        </Row>
      </Container>

      <br />
    </div>
  );
}
