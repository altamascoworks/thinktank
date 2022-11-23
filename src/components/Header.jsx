import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">MY SPACE</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">
                <Link to="/about" className="head-el">About</Link>
              </Nav.Link>
              <Nav.Link href="#about">
                <Link to="/gallery" className="head-el">Gallery</Link>
              </Nav.Link>

              <Nav.Link href="#contact">
                <Link to="/contact" className="head-el">Contact</Link>
              </Nav.Link>
              <Nav.Link href="#offers">
                <Link className="head-el">Offers</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
