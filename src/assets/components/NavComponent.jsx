import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <strong>My EpiBooks</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacts</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#">History</NavDropdown.Item>
                <NavDropdown.Item href="#">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#">Scifi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavComponent;
