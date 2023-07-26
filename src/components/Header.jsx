import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import phone from "../assets/phone.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../assets/Brainery logo.png"

export default function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        navbar-expand-lg
        className="head fixed-top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
          <img src={logo} alt="" height="50"  />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">
                <Link to="/about" className="head-el">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#about">
                <Link to="/gallery" className="head-el">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link href="#contact">
                <Link to="/contact" className="head-el">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link href="#offers">
                <Link to="/offer" className="head-el">
                  Offers
                </Link>
              </Nav.Link>
              <Nav.Link href="#plan">
                <Link to="/plan" className="head-el">
                  Price
                </Link>
              </Nav.Link>
              &nbsp;
              <div style={{ borderRadius: "15px" }}>
                <Container >
                  <Row>
                    <Col
                      style={{ backgroundColor: "#90B00F", padding: "10px" }}  >
                      <BsFillTelephoneFill></BsFillTelephoneFill>
                    </Col>
                    <Col
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px",
                      }}
                    
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        href="tel:9007957227"
                      >
                        9007957227
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
              {/* <div className="phone">

                 <img src={phone} height="26" alt="" />
                 
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  href="tel:9007957227"
                >
                  9007957227
                </a>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br /><br /><br />
    </div>
  );
}
